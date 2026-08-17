'use client';

import React, { useEffect, useRef, useState } from 'react';
import { PERSONAL_INFO, EXPERIENCE_DATA, SKILLS_DATA } from '@/data/portfolioData';
import {
  XIcon,
  DownloadIcon,
  BriefcaseIcon,
  SparklesIcon,
  CheckCircleIcon,
} from '@/components/icons';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({
  isOpen,
  onClose,
}) => {
  const resumeRef = useRef<HTMLDivElement>(null);
  const [isDownloading, setIsDownloading] = useState(false);

  // ==========================================
  // ESCAPE KEY + BODY SCROLL
  // ==========================================
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  // ==========================================
  // DOWNLOAD PDF
  // ==========================================
  const handleDownload = async () => {
    if (!resumeRef.current || isDownloading) return;

    setIsDownloading(true);

    try {
      const { default: html2canvas } = await import('html2canvas');
      const { default: jsPDF } = await import('jspdf');

      const originalElement = resumeRef.current;

      // Clone resume agar tampilan asli tidak berubah
      const clone = originalElement.cloneNode(true) as HTMLElement;

      // Container sementara untuk proses PDF
      const wrapper = document.createElement('div');

      wrapper.style.position = 'fixed';
      wrapper.style.left = '-100000px';
      wrapper.style.top = '0';
      wrapper.style.width = `${originalElement.scrollWidth}px`;
      wrapper.style.backgroundColor = '#0d101d';
      wrapper.style.zIndex = '-9999';

      wrapper.appendChild(clone);
      document.body.appendChild(wrapper);

      // ==========================================
      // FORCE SAFE COLORS
      // ==========================================
      // Browser akan memberikan computed color dalam
      // bentuk RGB/RGBA sehingga html2canvas tidak
      // perlu membaca lab()/lch()/oklab().
      const allElements = [
        clone,
        ...Array.from(clone.querySelectorAll('*')),
      ];

      allElements.forEach((element) => {
        const htmlElement = element as HTMLElement;
        const computed = window.getComputedStyle(htmlElement);

        // Background
        if (
          computed.backgroundColor &&
          computed.backgroundColor !== 'rgba(0, 0, 0, 0)'
        ) {
          htmlElement.style.backgroundColor =
            computed.backgroundColor;
        }

        // Text color
        if (computed.color) {
          htmlElement.style.color = computed.color;
        }

        // Border color
        if (computed.borderColor) {
          htmlElement.style.borderColor =
            computed.borderColor;
        }

        // Box shadow
        if (computed.boxShadow) {
          htmlElement.style.boxShadow =
            computed.boxShadow;
        }

        // Text shadow
        if (computed.textShadow) {
          htmlElement.style.textShadow =
            computed.textShadow;
        }
      });

      // ==========================================
      // GENERATE CANVAS
      // ==========================================
      const canvas = await html2canvas(clone, {
        scale: 2,
        useCORS: true,
        allowTaint: false,
        backgroundColor: '#0d101d',
        logging: false,

        width: clone.scrollWidth,
        height: clone.scrollHeight,

        windowWidth: clone.scrollWidth,
        windowHeight: clone.scrollHeight,
      });

      // Hapus clone setelah canvas selesai
      document.body.removeChild(wrapper);

      const imgData = canvas.toDataURL('image/png');

      // ==========================================
      // CREATE A4 PDF
      // ==========================================
      const pdf = new jsPDF({
        orientation: 'portrait',
        unit: 'mm',
        format: 'a4',
        compress: true,
      });

      const pdfWidth = 210;
      const pdfHeight = 297;

      const imgWidth = pdfWidth;

      const imgHeight =
        (canvas.height * pdfWidth) / canvas.width;

      let heightLeft = imgHeight;
      let position = 0;

      // ==========================================
      // PAGE 1
      // ==========================================
      pdf.addImage(
        imgData,
        'PNG',
        0,
        position,
        imgWidth,
        imgHeight,
        undefined,
        'FAST'
      );

      heightLeft -= pdfHeight;

      // ==========================================
      // ADDITIONAL PAGES
      // ==========================================
      while (heightLeft > 0) {
        position = heightLeft - imgHeight;

        pdf.addPage();

        pdf.addImage(
          imgData,
          'PNG',
          0,
          position,
          imgWidth,
          imgHeight,
          undefined,
          'FAST'
        );

        heightLeft -= pdfHeight;
      }

      // ==========================================
      // DOWNLOAD
      // ==========================================
      pdf.save('Fajar-Nasrulloh-CV-2026.pdf');
    } catch (error) {
      console.error('Failed to generate PDF:', error);

      alert('Gagal membuat PDF. Silakan coba lagi.');
    } finally {
      setIsDownloading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-md animate-in fade-in duration-200">

      {/* ==========================================
          BACKDROP
      ========================================== */}
      <div
        className="absolute inset-0"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* ==========================================
          MODAL
      ========================================== */}
      <div
        className="
          relative z-10
          flex w-full max-w-3xl
          max-h-[90vh]
          flex-col
          overflow-hidden
          rounded-2xl
          border border-[#1e293b]
          bg-[#0d101d]
          shadow-2xl
        "
      >

        {/* ==========================================
            HEADER
        ========================================== */}
        <div
          className="
            flex shrink-0
            items-center justify-between
            border-b border-[#1e293b]
            bg-[#0a0c16]
            px-4 py-4
            sm:px-6
          "
        >

          {/* Title */}
          <div className="flex items-center gap-2">
            <SparklesIcon
              size={16}
              className="text-[#818cf8]"
            />

            <h3 className="text-sm font-bold text-white sm:text-base">
              Curriculum Vitae / Resume
            </h3>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-2">

            {/* Download */}
            <button
              type="button"
              onClick={handleDownload}
              disabled={isDownloading}
              className="
                flex items-center gap-1.5
                rounded-lg
                bg-[#4f46e5]
                px-3 py-1.5
                text-xs font-semibold text-white
                shadow-md
                transition-all
                hover:bg-[#6366f1]
                disabled:cursor-not-allowed
                disabled:opacity-60
              "
            >
              <DownloadIcon size={14} />

              <span>
                {isDownloading
                  ? 'Generating...'
                  : 'Download CV'}
              </span>
            </button>

            {/* Close */}
            <button
              type="button"
              onClick={onClose}
              aria-label="Close resume"
              className="
                rounded-lg
                bg-[#1e293b]
                p-1.5
                text-[#94a3b8]
                transition-all
                hover:text-white
              "
            >
              <XIcon size={18} />
            </button>
          </div>
        </div>

        {/* ==========================================
            SCROLLABLE AREA
        ========================================== */}
        <div className="overflow-y-auto">

          {/* ==========================================
              PDF CONTENT
          ========================================== */}
          <div
            ref={resumeRef}
            className="
              space-y-6
              bg-[#0d101d]
              p-6
              font-sans
              text-white
              sm:p-8
            "
          >

            {/* ==========================================
                PERSONAL INFORMATION
            ========================================== */}
            <section className="border-b border-[#1e293b] pb-5">

              <h1 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
                {PERSONAL_INFO.name}
              </h1>

              <p className="mt-1 font-mono text-sm font-medium text-[#818cf8]">
                {PERSONAL_INFO.role}
              </p>

              <div className="mt-3 flex flex-wrap gap-x-5 gap-y-2 text-xs text-[#94a3b8]">

                <span>
                  📍 {PERSONAL_INFO.location}
                </span>

                <span>
                  ✉ {PERSONAL_INFO.email}
                </span>

              </div>

              <div className="mt-2 flex flex-wrap gap-x-5 gap-y-2 text-xs text-[#94a3b8]">

                {PERSONAL_INFO.github && (
                  <span>
                    GitHub: {PERSONAL_INFO.github}
                  </span>
                )}

                {PERSONAL_INFO.linkedin && (
                  <span>
                    LinkedIn: {PERSONAL_INFO.linkedin}
                  </span>
                )}

              </div>
            </section>

            {/* ==========================================
                SUMMARY
            ========================================== */}
            <section className="space-y-2">

              <h4 className="flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-[#94a3b8]">

                <SparklesIcon size={13} />

                Executive Overview

              </h4>

              <div
                className="
                  rounded-xl
                  border border-[#1e293b]
                  bg-[rgba(15,23,42,0.6)]
                  p-4
                "
              >

                <p className="text-xs leading-relaxed text-[#cbd5e1] sm:text-sm">
                  {PERSONAL_INFO.bio}
                </p>

              </div>
            </section>

            {/* ==========================================
                EXPERIENCE
            ========================================== */}
            <section className="space-y-4">

              <h4 className="flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-[#94a3b8]">

                <BriefcaseIcon size={14} />

                <span>
                  Professional Experience
                </span>

              </h4>

              {EXPERIENCE_DATA.map((exp) => (
                <div
                  key={exp.id}
                  className="
                    space-y-3
                    rounded-xl
                    border border-[#1e293b]
                    bg-[rgba(15,23,42,0.4)]
                    p-4
                  "
                >

                  {/* Experience Header */}
                  <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-start">

                    <div>

                      <h5 className="text-sm font-bold text-white">
                        {exp.role}
                      </h5>

                      <p className="mt-0.5 text-xs font-medium text-[#818cf8]">
                        {exp.company}
                      </p>

                      {exp.location && (
                        <p className="mt-1 text-[11px] text-[#64748b]">
                          {exp.location}
                        </p>
                      )}

                    </div>

                    <span className="shrink-0 font-mono text-[11px] text-[#94a3b8]">
                      {exp.period}
                    </span>

                  </div>

                  {/* Summary */}
                  {exp.summary && (
                    <p className="text-xs leading-relaxed text-[#94a3b8]">
                      {exp.summary}
                    </p>
                  )}

                  {/* Accomplishments */}
                  {exp.accomplishments?.length > 0 && (
                    <ul className="space-y-2">

                      {exp.accomplishments.map(
                        (acc, idx) => (
                          <li
                            key={idx}
                            className="
                              flex
                              items-start
                              gap-2
                              text-xs
                              leading-relaxed
                              text-[#cbd5e1]
                            "
                          >

                            <CheckCircleIcon
                              size={14}
                              className="
                                mt-0.5
                                shrink-0
                                text-[#34d399]
                              "
                            />

                            <span>
                              {acc}
                            </span>

                          </li>
                        )
                      )}

                    </ul>
                  )}

                  {/* Tech Stack */}
                  {exp.techStack?.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 pt-1">

                      {exp.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="
                            rounded-md
                            border border-[#334155]
                            bg-[rgba(30,41,59,0.7)]
                            px-2
                            py-1
                            font-mono
                            text-[10px]
                            text-[#cbd5e1]
                          "
                        >
                          {tech}
                        </span>
                      ))}

                    </div>
                  )}

                </div>
              ))}

            </section>

            {/* ==========================================
                SKILLS
            ========================================== */}
            <section className="space-y-3">

              <h4 className="font-mono text-xs uppercase tracking-wider text-[#94a3b8]">
                Core Technical Capabilities
              </h4>

              <div className="flex flex-wrap gap-1.5">

                {SKILLS_DATA.map((skill) => (
                  <span
                    key={skill.name}
                    className="
                      rounded-md
                      border border-[#1e293b]
                      bg-[#0f172a]
                      px-2.5
                      py-1
                      font-mono
                      text-xs
                      text-[#cbd5e1]
                    "
                  >
                    {skill.name}
                  </span>
                ))}

              </div>
            </section>

            {/* ==========================================
                FOOTER
            ========================================== */}
            <div className="border-t border-[#1e293b] pt-4">

              <p className="text-center font-mono text-[10px] text-[#475569]">
                © 2026 {PERSONAL_INFO.name}
              </p>

            </div>

          </div>
        </div>
      </div>
    </div>
  );
};
