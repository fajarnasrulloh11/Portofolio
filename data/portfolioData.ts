import { Project, Skill, Experience, CodeSnippet } from '@/types/portfolio';


export const PERSONAL_INFO = {
  name: 'Fajar Nasrulloh',
  role: 'Software Engineer',
  tagline: 'Software Engineer focused on building modern, responsive, and scalable web applications, from frontend to backend.',
  location: 'Jakarta Selatan, DKI Jakarta, Indonesia',
  email: 'fajarnasrulloh89@gmail.com',
  github: 'https://github.com/fajarnasrulloh11',
  linkedin: 'https://www.linkedin.com/in/fajar-nasrulloh-943ab1290/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BvtHR%2Fq57SqqW1TDERNIPfQ%3D%3D',
  status: 'Software Engineer',
  bio: `Passionate Software Engineer focused on building modern and scalable web applications. Experienced with Next.js, React, TypeScript, Django, Python, REST APIs, and PostgreSQL, with a strong interest in creating reliable solutions across frontend and backend.`,
  stats: [
    { label: 'Clean Code', value: '100%' },
    { label: 'Certifications', value: '2+' },
    { label: 'Developer', value: '1+' },
  ]
};

export const PROJECTS_DATA: Project[] = [
  {
    id: 'Demo Kasir',
    title: 'Aplikasi pemesanan ',
    shortDescription: 'Aplikasi kasir dan pemesanan makanan.',
    fullDescription: 'Aplikasi full-stack untuk mengelola produk, pesanan, pembayaran, dan transaksi.',
    category: 'frontend',
    image: '/kasir.png',
    tags: ['Next.js', 'TypeScript', 'Django', 'PostgreSQL', 'Tailwind CSS'],
    metrics: [
       { label: 'Performance', value: 'Fast' },
      { label: 'Stack', value: 'Full-stack' },
    ],
    githubUrl: 'https://github.com/fajarnasrulloh11/Demo-Kasir.git',
    liveUrl: 'https://example.com',
    featured: true,
    highlights: [
  'Membangun sistem pemesanan makanan dan minuman dengan alur order hingga pembayaran',
  'Mengembangkan dashboard admin untuk mengelola produk, pesanan, stok, dan status transaksi',
  'Menerapkan responsive UI agar aplikasi nyaman digunakan pada desktop, tablet, dan mobile'
],
architecture: [
  'Next.js 16 App Router dengan React dan Tailwind CSS untuk frontend',
  'Django REST Framework sebagai backend API dengan PostgreSQL sebagai database',
  'REST API untuk menghubungkan proses pemesanan, pembayaran, dan manajemen data secara terstruktur'
    ],
    date: '2026'
  },
  {
  id: 'Crud Mahasiswa',
  title: 'Student Management System',
  shortDescription: 'Full-stack web application for managing student records with authentication, CRUD operations, search, and pagination.',
  fullDescription: 'A full-stack student management application built to manage academic records through a responsive dashboard. The system provides secure authentication, student CRUD operations, search, pagination, and a RESTful API connecting the Next.js frontend with a Django backend.',
  category: 'fullstack',
  image: '/ss.png',
  tags: [
    'Next.js',
    'React',
    'Tailwind CSS',
    'Django',
    'Django REST Framework',
    'SQLite',
    'JWT',
    'Axios'
  ],
  metrics: [
    { label: 'Core Operations', value: 'CRUD' },
    { label: 'Authentication', value: 'JWT' },
    { label: 'API', value: 'RESTful' }
  ],
  githubUrl: 'https://github.com/fajarnasrulloh11/fullstack-',
  liveUrl: '',
  featured: true,
  highlights: [
    'Implemented complete student management workflow with create, read, update, and delete operations',
    'Built JWT-based authentication with protected dashboard and REST API endpoints',
    'Added student search and pagination to efficiently manage larger datasets'
  ],
  architecture: [
    'Next.js App Router frontend with React Hooks, Tailwind CSS, and Axios',
    'Django REST Framework backend providing authentication and student management APIs',
    'SQLite database with JWT authentication for protected application resources'
  ],
  date: '2026'
},
  {
  id: 'hospital-landing-page',
  title: 'Hospital Landing Page',
  shortDescription: 'Modern and responsive healthcare landing page designed to present hospital services, doctors, schedules, and contact information.',
  fullDescription: 'A responsive hospital landing page designed with a clean and accessible interface for presenting healthcare services and hospital information. The website includes service sections, doctor information, navigation, contact features, and a responsive layout optimized for different screen sizes.',
  category: 'frontend',
  image: '/hs.png',
  tags: [
    'React',
    'Vite',
    'Tailwind CSS',
    'JavaScript',
    'Responsive Design'
  ],
  metrics: [
    { label: 'Design', value: 'Responsive' },
    { label: 'Pages', value: 'Landing Page' },
    { label: 'UI', value: 'Modern & Clean' }
  ],
  githubUrl: 'https://github.com/fajarnas/hospital',
  liveUrl: 'https://hospital-three-lyart.vercel.app',
  featured: true,
  highlights: [
    'Designed responsive healthcare landing page for desktop, tablet, and mobile devices',
    'Created structured sections for hospital services, doctor information, schedules, and contact details',
    'Built a clean and accessible user interface focused on healthcare information and user navigation'
  ],
  architecture: [
    'React frontend built with Vite for fast development and production builds',
    'Tailwind CSS used for responsive layouts, reusable UI styling, and component design',
    'Static frontend architecture with organized components, assets, and page sections'
  ],
  date: '2024'
},
  {
  id: 'whatsapp-bot',
  title: 'WhatsApp Bot - Multi-Feature Automation',
  shortDescription: 'WhatsApp automation bot with AI commands, media processing, voice interaction, and utility features.',
  fullDescription: 'A Node.js-based WhatsApp bot designed to automate conversations and provide multiple utilities directly through WhatsApp. The bot supports command-based interactions, AI responses, voice message processing, sticker generation, profile information, news retrieval, PDF conversion, and deleted message detection.',
  category: 'backend',
  image: '/ii.png',
  tags: [
    'Node.js',
    'TypeScript',
    'WhatsApp',
    'AI',
    'REST API',
    'Automation'
  ],
  metrics: [
    { label: 'Platform', value: 'WhatsApp' },
    { label: 'Commands', value: '10+' },
    { label: 'Runtime', value: 'Node.js' }
  ],
  githubUrl: 'https://github.com/fajarnas/bot-wa',
  liveUrl: '',
  featured: false,
  highlights: [
    'Built command-based WhatsApp automation for AI, jokes, stickers, profiles, news, and utility features',
    'Implemented voice message processing with automatic transcription and voice responses',
    'Added deleted message detection and multiple media-processing utilities for everyday WhatsApp interactions'
  ],
  architecture: [
    'Node.js backend handling WhatsApp events, commands, and message processing',
    'Modular command-based architecture for separating bot features and interaction handlers',
    'Environment-based configuration for tokens, admin settings, and runtime configuration'
  ],
  date: '2026'
}
];

export const SKILLS_DATA: Skill[] = [
  // Frontend
  {
    name: 'React 19 & Next.js 16',
    category: 'Frontend',
    icon: 'ReactIcon',
    popular: true,
  },
  {
    name: 'TypeScript / JavaScript',
    category: 'Frontend',
    icon: 'TypeScriptIcon',
    popular: true,
  },
  {
    name: 'Tailwind CSS v4 & Styling',
    category: 'Frontend',
    icon: 'TailwindIcon',
    popular: true,
  },
  {
    name: 'HTML5 / Modern CSS / Canvas',
    category: 'Frontend',
    icon: 'HtmlIcon',
  },
  {
    name: 'State Management (Zustand/Jotai)',
    category: 'Frontend',
    icon: 'ZapIcon',
  },

  // Backend
  {
    name: 'Node.js & Express',
    category: 'Backend',
    icon: 'NodeJsIcon',
    popular: true,
  },
  {
    name: 'Python (FastAPI / PyTorch)',
    category: 'Backend',
    icon: 'PythonIcon',
    popular: true,
  },
  {
    name: 'Go (Golang)',
    category: 'Backend',
    icon: 'GoIcon',
  },
  {
    name: 'PostgreSQL & Prisma / Drizzle',
    category: 'Backend',
    icon: 'PostgreSqlIcon',
    popular: true,
  },
  {
    name: 'GraphQL & REST API Design',
    category: 'Backend',
    icon: 'GraphQLIcon',
  },
];




export const EXPERIENCE_DATA: Experience[] = [
  {
  id: 'exp-1',
  role: 'JavaScript Algorithms & Data Structures Certification',
  company: 'freeCodeCamp',
  companyUrl: 'https://www.freecodecamp.org',
  certificateUrl:
    'https://www.freecodecamp.org/certification/fcc69131765-8173-497f-b69c-cfa96f5ce279/javascript-algorithms-and-data-structures-v8',
  period: '2026',
  location: 'Online',
  summary:
    'Completed freeCodeCamp’s JavaScript Algorithms and Data Structures certification, developing practical skills in JavaScript programming, algorithms, data structures, and modern programming paradigms.',
  accomplishments: [
    'Strengthened JavaScript fundamentals including variables, arrays, objects, functions, loops, and conditionals.',
    'Applied modern ES6 features including arrow functions, destructuring, classes, promises, and modules.',
    'Solved algorithmic problems involving strings, arrays, objects, recursion, and data manipulation.',
    'Worked with fundamental data structures and practiced algorithmic problem-solving.',
    'Applied Object-Oriented Programming and Functional Programming concepts in JavaScript.',
    'Completed hands-on JavaScript algorithm and data structure projects.'
  ],
  techStack: [
    'JavaScript',
    'ES6',
    'Algorithms',
    'Data Structures',
    'OOP',
    'Functional Programming',
    'Regular Expressions',
    'Debugging'
  ]
},
 
  {
  id: 'exp-2',
  role: 'Responsive Web Design Certification',
  company: 'freeCodeCamp',
  companyUrl: 'https://www.freecodecamp.org',
  certificateUrl:
    'https://www.freecodecamp.org/certification/fcc69131765-8173-497f-b69c-cfa96f5ce279/responsive-web-design',
  period: '2026',
  location: 'Online',
  summary:
    'Completed freeCodeCamp’s Responsive Web Design certification, demonstrating practical skills in building responsive and accessible web interfaces.',
  accomplishments: [
    'Developed responsive interfaces using semantic HTML5 and modern CSS3.',
    'Created flexible layouts using CSS Flexbox and Grid.',
    'Applied responsive design principles across desktop, tablet, and mobile devices.',
    'Built hands-on projects covering forms, accessibility, typography, and responsive layouts.',
    'Successfully earned the freeCodeCamp Responsive Web Design certification.'
  ],
  techStack: [
    'HTML5',
    'CSS3',
    'Flexbox',
    'CSS Grid',
    'Responsive Design',
    'Accessibility'
  ]
}
];


export const CODE_SNIPPETS: CodeSnippet[] = [
  {
    id: 'snip-1',
    title: 'Streaming Next.js 16 RSC Pipeline',
    language: 'typescript',
    description: 'Server component streaming pattern using Suspense & React 19 async boundaries.',
    code: `import { Suspense } from 'react';

// Next.js 16 Page with asynchronous PageProps
export default async function DashboardPage(props: PageProps<'/dashboard'>) {
  const searchParams = await props.searchParams;
  const filter = searchParams.filter ?? 'all';

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <Suspense fallback={<MetricsSkeleton />}>
        <RealtimeMetrics filter={filter} />
      </Suspense>
      <Suspense fallback={<ActivitySkeleton />}>
        <LiveStreamFeed />
      </Suspense>
    </div>
  );
}`
  },
  {
    id: 'snip-2',
    title: 'Hybrid Vector Search Engine (Python/FastAPI)',
    language: 'python',
    description: 'RAG retrieval pipeline combining dense vector embeddings with sparse keyword re-ranking.',
    code: `@router.post("/query", response_model=SearchResponse)
async def hybrid_search(
    request: QueryRequest,
    qdrant_client: QdrantClient = Depends(get_qdrant),
    reranker: CrossEncoder = Depends(get_reranker)
):
    # 1. Fetch dense vector candidates
    embeddings = await generate_embeddings(request.prompt)
    dense_hits = await qdrant_client.search(
        collection_name="enterprise_docs",
        query_vector=embeddings,
        limit=25
    )
    
    # 2. Reciprocal Rank Fusion & Re-ranking
    ranked_docs = reranker.predict([
        (request.prompt, hit.payload["text"]) for hit in dense_hits
    ])
    
    return SearchResponse(results=ranked_docs[:5])`
  }
];
