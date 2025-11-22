import React, { useState, useEffect } from 'react';
import { 
  Github, 
  Linkedin, 
  Mail, 
  ExternalLink, 
  Code, 
  Server, 
  Database, 
  Cloud, 
  Terminal,
  Cpu,
  ChevronDown,
  Award,
  X
} from 'lucide-react';

// --- Components ---

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMenuOpen(false);
    }
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-slate-900/90 backdrop-blur-md border-b border-slate-800 py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
        <div className="text-2xl font-bold tracking-tighter text-white cursor-pointer group" onClick={() => scrollTo('hero')}>
          SR<span className="text-teal-400">.</span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex space-x-8 text-sm font-medium text-slate-300">
          {['Experience', 'Projects', 'Skills', 'About', 'Contact'].map((item) => (
            <button 
              key={item} 
              onClick={() => scrollTo(item.toLowerCase())}
              className="hover:text-teal-400 transition-colors relative group"
            >
              {item}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-teal-400 transition-all group-hover:w-full"></span>
            </button>
          ))}
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)} className="text-white">
            {menuOpen ? <X /> : <Code />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {menuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-slate-900 border-b border-slate-800 p-6 flex flex-col space-y-4 shadow-2xl">
          {['Experience', 'Projects', 'Skills', 'About', 'Contact'].map((item) => (
            <button 
              key={item} 
              onClick={() => scrollTo(item.toLowerCase())}
              className="text-left text-slate-300 hover:text-teal-400 py-2"
            >
              {item}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
};

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Background Elements */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 left-0 w-72 h-72 bg-blue-600/10 rounded-full blur-3xl animate-pulse delay-1000"></div>

      <div className="max-w-6xl mx-auto px-6 z-10 w-full">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 space-y-6 animate-fade-in-up">
            <div className="inline-flex items-center px-3 py-1 rounded-full border border-teal-500/30 bg-teal-500/10 text-teal-300 text-xs font-medium tracking-wide">
              <span className="w-2 h-2 rounded-full bg-teal-400 mr-2 animate-ping"></span>
              SDE at Razorpay
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight leading-tight">
              Hello, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-500">Sreyas.</span>
              <br />
              <span className="text-slate-400 text-4xl md:text-6xl">I build scalable systems.</span>
            </h1>
            
            <p className="text-lg text-slate-400 max-w-xl leading-relaxed">
              Software Development Engineer specializing in backend infrastructure, high-throughput distributed systems, and fintech security. 
            </p>
            
            <div className="pt-4 flex flex-wrap gap-4">
              <a 
                href="#contact" 
                className="px-8 py-3 bg-teal-500 hover:bg-teal-400 text-slate-900 font-bold rounded-lg transition-all transform hover:-translate-y-1 shadow-lg shadow-teal-500/20"
              >
                Get in Touch
              </a>
              <a 
                href="https://github.com/sreyas02" 
                target="_blank" 
                rel="noreferrer"
                className="px-8 py-3 border border-slate-700 text-slate-300 hover:text-white hover:border-slate-500 rounded-lg transition-all flex items-center gap-2"
              >
                <Github size={20} />
                GitHub
              </a>
            </div>
          </div>
          
          {/* Interactive Card/Graphic */}
          <div className="flex-1 w-full max-w-md relative group cursor-default">
            <div className="absolute -inset-1 bg-gradient-to-r from-teal-500 to-blue-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
            <div className="relative bg-slate-900 border border-slate-800 rounded-xl p-6 shadow-2xl">
              <div className="flex items-center justify-between mb-6 border-b border-slate-800 pb-4">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <span className="text-xs text-slate-500 font-mono">system_status.log</span>
              </div>
              
              <div className="space-y-3 font-mono text-sm">
                <div className="flex items-center text-slate-300">
                  <span className="text-teal-500 mr-2">➜</span>
                  <span>Checking ACS Gateway...</span>
                </div>
                <div className="flex items-center text-green-400 pl-6">
                  <span className="mr-2">✔</span>
                  <span>Biometric Auth Active</span>
                </div>
                <div className="flex items-center text-slate-300">
                  <span className="text-teal-500 mr-2">➜</span>
                  <span>Loading Experience...</span>
                </div>
                 <div className="flex items-center text-blue-400 pl-6">
                  <span className="mr-2">ℹ</span>
                  <span>FactSet Alumni</span>
                </div>
                <div className="flex items-center text-slate-300">
                  <span className="text-teal-500 mr-2">➜</span>
                  <span>Current Status...</span>
                </div>
                <div className="pl-6 animate-pulse text-teal-400">
                  _Ready for new challenges
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-slate-500">
          <ChevronDown size={24} />
        </div>
      </div>
    </section>
  );
};

const FeaturedHighlight = () => {
  return (
    <section className="py-20 bg-slate-900">
      <div className="max-w-6xl mx-auto px-6">
        <div className="relative bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl border border-slate-700/50 overflow-hidden p-8 md:p-12 flex flex-col md:flex-row items-center gap-10">
          {/* Background Pattern */}
          <div className="absolute top-0 right-0 p-4 opacity-5">
             <Cpu size={300} />
          </div>

          <div className="flex-1 z-10">
            <div className="inline-flex items-center gap-2 text-teal-400 font-bold tracking-wider text-sm uppercase mb-4">
              <Award size={16} />
              Featured Contribution
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              India's First Biometric Card Authentication
            </h2>
            <p className="text-slate-300 leading-relaxed mb-6 text-lg">
              As a key member of the <strong className="text-white">Razorpay ACS team</strong>, I helped architect and build the infrastructure that powers India's first biometric card authentication system. This innovation redesigns critical 3DS flows to ensure seamless, secure, and high-speed transaction processing for millions of users.
            </p>
            <ul className="space-y-3 text-slate-400 mb-8">
              <li className="flex items-start">
                <span className="text-teal-500 mr-3 mt-1">▹</span>
                Redesigned 3DS authentication flows ensuring EMVCo compliance.
              </li>
              <li className="flex items-start">
                <span className="text-teal-500 mr-3 mt-1">▹</span>
                Onboarded Amex network for seamless 3DS authentication.
              </li>
              <li className="flex items-start">
                <span className="text-teal-500 mr-3 mt-1">▹</span>
                Built real-time Prometheus observability reducing resolution time by 20%.
              </li>
            </ul>
          </div>

          <div className="flex-1 flex justify-center z-10 w-full">
             {/* Abstract Visual Representation of Biometric Auth */}
             <div className="relative w-full max-w-sm aspect-square bg-slate-800/50 rounded-full border border-teal-500/20 flex items-center justify-center group">
                <div className="absolute inset-0 rounded-full border-2 border-dashed border-teal-500/20 animate-spin-slow"></div>
                <div className="w-48 h-48 bg-teal-500/10 rounded-full flex items-center justify-center backdrop-blur-sm border border-teal-500/30 transition-all duration-500 group-hover:scale-110 group-hover:bg-teal-500/20 shadow-glow">
                    <div className="text-teal-400">
                        <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12Z" className="opacity-20"/>
                          <path d="M12 7V7.01" strokeWidth="3"/>
                          <path d="M12 11V11.01" strokeWidth="3"/>
                          <path d="M12 15V15.01" strokeWidth="3"/>
                          <path d="M8 9V9.01" strokeWidth="3"/>
                          <path d="M16 9V9.01" strokeWidth="3"/>
                          <path d="M8 13V13.01" strokeWidth="3"/>
                          <path d="M16 13V13.01" strokeWidth="3"/>
                        </svg>
                    </div>
                </div>
                <div className="absolute -bottom-6 bg-slate-800 px-4 py-2 rounded text-xs font-mono text-teal-400 border border-teal-500/30">
                    Auth_Success: 99.99%
                </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Experience = () => {
  const jobs = [
    {
      company: "Razorpay",
      role: "Software Development Engineer",
      period: "Jan 2025 - Present",
      location: "Bangalore, Karnataka",
      description: "Core member of the ACS team. Focused on scalability, compliance, and high-volume payment infrastructure.",
      achievements: [
        "Leading ACS EMVCo recertification for Visa & Mastercard.",
        "Implemented SBI OTP Page integration improving success rates.",
        "Introduced asynchronous processing with AWS SQS to improve throughput by 25%.",
        "Optimized Cards Authentication schema reducing latency by 30%."
      ],
      tech: ["Go", "Kubernetes", "AWS", "Prometheus", "MySQL"]
    },
    {
      company: "FactSet",
      role: "Software Engineer II",
      period: "Jan 2023 - Dec 2024",
      location: "Hyderabad, Telangana",
      description: "Designed APIs and automation systems for financial data services.",
      achievements: [
        "Designed GraphQL APIs reducing over-fetching by 40%.",
        "Built Backfill automation system cutting manual intervention by 90%.",
        "Optimized AWS resource usage saving $800+ annually.",
        "Received Blue Ribbon Award for exceptional performance."
      ],
      tech: ["Python", "Flask", "GraphQL", "AWS S3", "SQLite"]
    }
  ];

  return (
    <section id="experience" className="py-24 bg-slate-950">
      <div className="max-w-4xl mx-auto px-6">
        <div className="flex items-center mb-16">
          <div className="w-12 h-1 bg-teal-500 mr-4"></div>
          <h2 className="text-3xl md:text-4xl font-bold text-white">Experience</h2>
        </div>

        <div className="space-y-12">
          {jobs.map((job, idx) => (
            <div key={idx} className="relative pl-8 border-l-2 border-slate-800 hover:border-teal-500 transition-colors group">
              <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-slate-800 group-hover:bg-teal-500 transition-colors border-2 border-slate-950"></div>
              
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-white group-hover:text-teal-400 transition-colors">{job.role}</h3>
                  <div className="text-xl text-slate-400 font-medium">{job.company}</div>
                </div>
                <div className="mt-2 md:mt-0 text-right md:text-right">
                  <div className="text-sm text-slate-500 font-mono">{job.period}</div>
                  <div className="text-sm text-slate-600">{job.location}</div>
                </div>
              </div>

              <p className="text-slate-400 mb-4 italic">{job.description}</p>

              <ul className="space-y-2 mb-6">
                {job.achievements.map((item, i) => (
                  <li key={i} className="flex items-start text-slate-300 text-sm leading-relaxed">
                    <span className="text-teal-500 mr-2 mt-1.5 text-xs">●</span>
                    {item}
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2">
                {job.tech.map((t) => (
                  <span key={t} className="px-3 py-1 text-xs font-medium text-slate-400 bg-slate-900 border border-slate-800 rounded-full">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Projects = () => {
  const projects = [
    {
      title: "Cluster Orchestration Service",
      date: "May 2023",
      tech: ["FastAPI", "PostgreSQL", "Docker", "Algorithms"],
      description: "A multi-tenant backend for secure deployment management.",
      details: [
        "Implemented JWT authentication and RBAC for org-level security.",
        "Developed a resource scheduler with priority-based preemption and fair queuing.",
        "Improved cluster utilization through multi-dimensional resource packing algorithms."
      ],
      icon: <Server className="text-teal-400" size={32} />
    },
    {
      title: "SUMMIFY (Chrome Extension)",
      date: "Side Project",
      tech: ["Javascript", "Hugging Face", "Transformers", "NLP"],
      description: "Real-time generative text summarization tool for web content.",
      details: [
        "Leverages Hugging Face Transformers for AI-driven summaries.",
        "Enhances user experience by tailoring summaries to page structure.",
        "Lightweight integration directly into the browser."
      ],
      icon: <Terminal className="text-blue-400" size={32} />
    }
  ];

  return (
    <section id="projects" className="py-24 bg-slate-900">
      <div className="max-w-6xl mx-auto px-6">
         <div className="flex items-center mb-16">
          <div className="w-12 h-1 bg-blue-500 mr-4"></div>
          <h2 className="text-3xl md:text-4xl font-bold text-white">Selected Projects</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <div key={idx} className="group bg-slate-950 border border-slate-800 p-8 rounded-2xl hover:-translate-y-2 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10 hover:border-slate-700">
              <div className="flex justify-between items-start mb-6">
                <div className="p-3 bg-slate-900 rounded-lg border border-slate-800 group-hover:border-slate-700 transition-colors">
                  {project.icon}
                </div>
                <div className="flex gap-2">
                  <ExternalLink size={20} className="text-slate-500 hover:text-white cursor-pointer" />
                </div>
              </div>

              <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">{project.title}</h3>
              <p className="text-slate-400 mb-6">{project.description}</p>

              <div className="space-y-3 mb-6 border-t border-slate-900 pt-4">
                {project.details.map((detail, i) => (
                  <div key={i} className="flex items-start text-sm text-slate-400">
                    <span className="text-blue-500 mr-2">→</span>
                    {detail}
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tech.map((t) => (
                  <span key={t} className="text-xs font-mono text-blue-300 bg-blue-500/10 px-2 py-1 rounded">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Skills = () => {
  const skillCategories = [
    {
      name: "Languages",
      skills: ["Python", "Java", "Go", "SQL", "JavaScript", "HTML/CSS"]
    },
    {
      name: "Frameworks",
      skills: ["SpringBoot", "FastAPI", "Flask", "React", "Tailwind"]
    },
    {
      name: "Infrastructure",
      skills: ["Docker", "Kubernetes", "AWS (EC2, S3, SQS)", "Prometheus", "Git"]
    },
    {
      name: "Databases",
      skills: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "ElasticSearch"]
    }
  ];

  return (
    <section id="skills" className="py-24 bg-slate-950">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-16">
          <div className="md:w-1/3">
            <div className="sticky top-32">
               <div className="flex items-center mb-6">
                <div className="w-12 h-1 bg-teal-500 mr-4"></div>
                <h2 className="text-3xl md:text-4xl font-bold text-white">Technical Arsenal</h2>
              </div>
              <p className="text-slate-400 text-lg leading-relaxed">
                I have a strong foundation in backend engineering, cloud architecture, and system design. 
                My toolbox is optimized for building high-performance, scalable distributed systems.
              </p>
              
              <div className="mt-8 p-6 bg-slate-900 rounded-xl border border-slate-800">
                 <div className="flex items-center gap-3 mb-2">
                    <Award className="text-yellow-500" size={24} />
                    <h4 className="text-white font-bold">Achievements</h4>
                 </div>
                 <ul className="space-y-2 text-sm text-slate-300">
                    <li>• Top 10% LeetCode (Rating 1755)</li>
                    <li>• Blue Ribbon Award @ FactSet</li>
                 </ul>
              </div>
            </div>
          </div>

          <div className="md:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6">
            {skillCategories.map((category, idx) => (
              <div key={idx} className="bg-slate-900 p-6 rounded-xl border border-slate-800 hover:border-teal-500/30 transition-colors">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  {idx === 0 && <Code size={20} className="text-teal-400"/>}
                  {idx === 1 && <Server size={20} className="text-blue-400"/>}
                  {idx === 2 && <Cloud size={20} className="text-purple-400"/>}
                  {idx === 3 && <Database size={20} className="text-orange-400"/>}
                  {category.name}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span key={skill} className="px-3 py-2 bg-slate-950 text-slate-300 rounded-lg text-sm font-medium border border-slate-800">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const About = () => {
  return (
    <section id="about" className="py-24 bg-slate-900">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-white mb-8">About Me</h2>
        <div className="bg-slate-950 p-8 rounded-2xl border border-slate-800 shadow-2xl inline-block text-left">
            <p className="text-slate-300 text-lg leading-relaxed mb-6">
                I am a Software Development Engineer based in <span className="text-white">Bangalore</span>. 
                Graduated from <span className="text-white">Gokaraju Rangaraju Institute of Engineering and Technology</span> with a GPA of 8.8.
            </p>
            <p className="text-slate-300 text-lg leading-relaxed">
                My journey in tech has been driven by a curiosity for how large-scale systems operate. From optimizing GraphQL APIs at FactSet to architecting Biometric Authentication at Razorpay, I thrive on solving complex engineering problems. When I'm not coding, you can find me optimizing my LeetCode rating or exploring new tech stacks.
            </p>
        </div>
      </div>
    </section>
  )
}

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-slate-950 relative overflow-hidden">
       {/* Decorative bg */}
       <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-full bg-gradient-to-b from-teal-900/10 to-transparent pointer-events-none"></div>

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <h2 className="text-4xl font-bold text-white mb-6">Let's Build Something Great</h2>
        <p className="text-slate-400 mb-12 max-w-xl mx-auto">
          Whether you have a question, a job opportunity, or just want to connect, feel free to reach out.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <a href="mailto:molugusreyas02@gmail.com" className="group p-8 bg-slate-900 rounded-2xl border border-slate-800 hover:border-teal-500 transition-all flex flex-col items-center justify-center">
                <div className="w-16 h-16 bg-teal-500/10 rounded-full flex items-center justify-center text-teal-400 mb-4 group-hover:scale-110 transition-transform">
                    <Mail size={32} />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Email Me</h3>
                <p className="text-slate-400">molugusreyas02@gmail.com</p>
            </a>

            <a href="https://linkedin.com/in/molugu-sreyas-reddy" target="_blank" rel="noreferrer" className="group p-8 bg-slate-900 rounded-2xl border border-slate-800 hover:border-blue-500 transition-all flex flex-col items-center justify-center">
                <div className="w-16 h-16 bg-blue-500/10 rounded-full flex items-center justify-center text-blue-400 mb-4 group-hover:scale-110 transition-transform">
                    <Linkedin size={32} />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">LinkedIn</h3>
                <p className="text-slate-400">Connect professionally</p>
            </a>
        </div>

        <div className="flex justify-center gap-8">
            <a href="https://github.com/sreyas02" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white transition-colors">
                <Github size={24} />
            </a>
            <a href="https://leetcode.com/sreyas_02" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white transition-colors flex items-center gap-2 text-sm font-medium">
               <Code size={24} /> LeetCode
            </a>
        </div>

        <footer className="mt-20 pt-8 border-t border-slate-900 text-slate-600 text-sm">
            <p>© 2025 Sreyas Reddy Molugu. Built with React & Tailwind.</p>
        </footer>
      </div>
    </section>
  );
};

// --- Main App Component ---

const App = () => {
  return (
    <div className="bg-slate-950 min-h-screen text-slate-200 font-sans selection:bg-teal-500/30">
      <Navigation />
      <main>
        <Hero />
        <FeaturedHighlight />
        <Experience />
        <Projects />
        <Skills />
        <About />
        <Contact />
      </main>
    </div>
  );
};

export default App;

