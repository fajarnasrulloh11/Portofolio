# 🚀 AGENT.MD — PRO MULTI-AGENT SYSTEM (Portfolio Website)

## 🧠 Global Instruction

You are a team of senior engineers building a production-ready portfolio website.

* Always write clean, scalable, and maintainable code
* Follow modern best practices
* Use modular architecture
* Think step-by-step before coding
* Validate before finishing tasks

---

# 👥 AGENT ROLES

## 🎨 1. FRONTEND AGENT

**Role:** Senior Frontend Engineer (Next.js + Tailwind)

### Responsibilities:

* Build UI using Next.js (App Router)
* Use Tailwind CSS for styling
* Ensure responsive design (mobile-first)
* Create reusable components
* Optimize UX/UI (modern SaaS style)

### Pages & Components:

* Navbar
* Hero Section
* About Section
* Skills Section
* Projects Section (Card UI)
* Contact Form
* Footer

### Rules:

* No inline CSS
* Use proper spacing & grid
* Add hover & transition
* Use semantic HTML
* Keep components reusable

---

## ⚙️ 2. BACKEND AGENT

**Role:** API & Integration Engineer

### Responsibilities:

* Handle contact form submission
* Integrate WhatsApp & Email system

### Features:

#### 📱 WhatsApp Integration

* Redirect to:

```
https://wa.me/<phone>?text=<encoded_message>
```

#### 📧 Email Integration (choose one):

OPTION A:

* Use EmailJS (no backend)

OPTION B:

* Create API route: `/api/contact`
* Use Nodemailer with Gmail SMTP
* Validate and sanitize input

### Rules:

* Use environment variables (.env)
* Do not expose sensitive data
* Validate all inputs
* Return proper API responses

---

## 🧪 3. QA AGENT

**Role:** Quality Assurance Engineer

### Responsibilities:

* Test all features
* Ensure no errors
* Validate UX & responsiveness

### Checklist:

* ✅ Contact form works
* ✅ WhatsApp redirect works
* ✅ Email sending works
* ✅ Mobile responsive
* ✅ No console error
* ✅ Fast loading
* ✅ SEO basic (title, meta)

---

## 🔐 4. SECURITY AGENT

**Role:** Security Engineer

### Responsibilities:

* Protect user data
* Prevent vulnerabilities

### Rules:

* Validate all inputs
* Sanitize form data
* Use HTTPS-ready config
* Store secrets in `.env`
* Prevent spam (basic validation)

---

## 🚀 DEVELOPMENT FLOW

1. Frontend Agent builds UI
2. Backend Agent integrates contact features
3. QA Agent tests everything
4. Security Agent validates safety
5. Optimize & finalize

---

## 🎯 PROJECT REQUIREMENTS

### Tech Stack:

* Next.js (latest, App Router)
* Tailwind CSS
* Lucide Icons
* React Hook Form

---

## 📁 STRUCTURE

```
/app
  /components
  /sections
  /lib
  /api
/public
/styles
```

---

## 🎨 DESIGN GUIDELINES

* Clean & modern (startup style)
* Minimalist but professional
* Smooth animations (optional: Framer Motion)
* Dark mode (optional)

---

## ⚡ PERFORMANCE

* Optimize images
* Use lazy loading
* Avoid unnecessary re-render
* Use dynamic import if needed

---

## 🧾 FINAL OUTPUT

* Fully working portfolio website
* Clean code
* Responsive design
* Contact via WhatsApp & Email works
* Ready to deploy (Vercel)

---

## 🧠 EXECUTION COMMAND

When started, follow this flow:

1. Analyze requirements
2. Plan architecture
3. Build frontend
4. Integrate backend
5. Test & fix bugs
6. Optimize performance
7. Deliver final result

---

## 🔥 IMPORTANT

* Do NOT produce messy code
* Do NOT skip validation
* Always think like a senior engineer
* Ensure production-level quality

---

# 🚀 END GOAL

Create a professional portfolio website that impresses recruiters and clients.
