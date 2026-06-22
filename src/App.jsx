import React, { useState, useEffect } from "react";
import {
  Github,
  Linkedin,
  Mail,
  Award,
  Code,
  Briefcase,
  GraduationCap,
  ChevronDown,
  ExternalLink,
  Menu,
  X,
  Sparkles,
  Zap,
  Target,
  Trophy,
  Users,
  ArrowRight,
  Download,
  Star,
  Globe,
} from "lucide-react";

// Import certification images
import attestationExcellence from "./assets/certifications/attestation-excellence.jpg";
import azureAi from "./assets/certifications/azure-ai.jpg";
import ieeeExtreme from "./assets/certifications/ieee-extreme.jpg";
import codeItUp from "./assets/certifications/code it up 6.0.png";

export default function Portfolio() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [language, setLanguage] = useState("fr");
  const [certModalImg, setCertModalImg] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const sections = [
        "home",
        "about",
        "experience",
        "projects",
        "certifications",
        "contact",
      ];
      const current = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setMobileMenuOpen(false);
    }
  };

  const content = {
    fr: {
      nav: ["Accueil", "À propos", "Expérience", "Projets", "Certifications", "Contact"],
      hero: {
        badge: "Diplômé en Licence Appliquée — Technologie de l'Information",
        name: "Amine Added",
        title: "Développeur Full Stack",
        description: "Passionné par la création d'expériences numériques exceptionnelles",
        education: "ISET Bizerte",
        role: "Membre",
        cta1: "Voir mes projets",
        cta2: "Me contacter",
        downloadCV: "Télécharger CV"
      },
      stats: [
        { label: "Projets Réalisés", value: "15+" },
        { label: "Technologies", value: "20+" },
        { label: "Certifications", value: "4" },
        { label: "Années d'Expérience", value: "2+" }
      ],
      about: {
        title: "À propos",
        intro: "Diplômé en Licence Appliquée en Technologie de l'Information à ISET Bizerte, je me spécialise dans le développement full stack avec une expertise particulière en résolution de problèmes complexes, vision par ordinateur et intelligence artificielle.",
        experience: "Mon expérience chez AsteelFlash Tunisie (stage PFE, 4 mois) m'a permis de développer des solutions modernes et d'approfondir mes compétences en développement logiciel industriel.",
        role: "En tant que Membre IEEE de l'IEEE ISET Bizerte Student Branch, je suis déterminé à poursuivre un cycle d'ingénieur avec une spécialisation en Intelligence Artificielle.",
        skillsTitle: "Compétences Techniques"
      },
      experience: {
        title: "Expérience",
        job1: {
          date: "02/02/2026 à 23/05/2026 — Stage PFE (4 mois)",
          title: "Stagiaire PFE",
          company: "AsteelFlash Tunisie",
          description: "Réalisation du projet de fin d'études avec développement d'une solution complète de gestion des actifs (AssetFlow) intégrant ASP.NET, Blazor, SQL Server et des fonctionnalités avancées de traitement d'images."
        },
        job2: {
          date: "Janvier 2025",
          title: "Stagiaire Développeur",
          company: "OneTech Group",
          description: "Développement d'une application web complète pour la gestion des salariés, tâches, évaluations et formateurs utilisant Vue.js 3 et Laravel 9."
        },
        job3: {
          date: "Janvier 2024",
          title: "Stagiaire d'Observation",
          company: "OneTech Group",
          description: "Découverte du monde professionnel et apprentissage de la fabrication des composants électroniques."
        },
        timeline: "Début du parcours"
      },
      projects: {
        title: "Projets"
      },
      certifications: {
        title: "Certifications",
        clickToView: "Cliquer pour voir"
      },
      contact: {
        title: "Travaillons Ensemble",
        subtitle: "Je suis à la recherche d'un cycle d'ingénieur et ouvert aux opportunités de collaboration. N'hésitez pas à me contacter !",
        formation: "Formation",
        status: "Statut",
        statusText: "Cherchant un cycle d'ingénieur",
        statusDesc: "Ingénierie • Intelligence Artificielle • Informatique"
      },
      footer: {
        designed: "Conçu avec ❤️ • React + Tailwind"
      }
    },
    en: {
      nav: ["Home", "About", "Experience", "Projects", "Certifications", "Contact"],
      hero: {
        badge: "Bachelor's Graduate — Information Technology",
        name: "Amine Added",
        title: "Full Stack Developer",
        description: "Passionate about creating exceptional digital experiences",
        education: "ISET Bizerte",
        role: "Member",
        cta1: "View my projects",
        cta2: "Contact me",
        downloadCV: "Download CV"
      },
      stats: [
        { label: "Completed Projects", value: "15+" },
        { label: "Technologies", value: "20+" },
        { label: "Certifications", value: "4" },
        { label: "Years of Experience", value: "2+" }
      ],
      about: {
        title: "About Me",
        intro: "Bachelor's graduate in Information Technology from ISET Bizerte, I specialize in full stack development with particular expertise in solving complex problems, computer vision and artificial intelligence.",
        experience: "My experience at AsteelFlash Tunisia (4-month final year internship) allowed me to develop modern solutions and deepen my skills in industrial software development.",
        role: "As IEEE member of the IEEE ISET Bizerte Student Branch, I am determined to pursue an engineering degree with a specialization in Artificial Intelligence.",
        skillsTitle: "Technical Skills"
      },
      experience: {
        title: "Experience",
        job1: {
          date: "02/02/2026 to 23/05/2026 — Final Year Internship (4 months)",
          title: "Final Year Intern",
          company: "AsteelFlash Tunisia",
          description: "Completed final year project developing a comprehensive asset management solution (AssetFlow) integrating ASP.NET, Blazor, SQL Server and advanced image processing features."
        },
        job2: {
          date: "January 2025",
          title: "Developer Intern",
          company: "OneTech Group",
          description: "Development of a complete web application for managing employees, tasks, evaluations and trainers using Vue.js 3 and Laravel 9."
        },
        job3: {
          date: "January 2024",
          title: "Observation Intern",
          company: "OneTech Group",
          description: "Discovery of the professional world and learning about electronic component manufacturing."
        },
        timeline: "Journey begins"
      },
      projects: {
        title: "Projects"
      },
      certifications: {
        title: "Certifications",
        clickToView: "Click to view"
      },
      contact: {
        title: "Let's Work Together",
        subtitle: "I'm looking for an engineering degree program and open to collaboration opportunities. Feel free to contact me!",
        formation: "Education",
        status: "Status",
        statusText: "Seeking an Engineering Degree",
        statusDesc: "Engineering • Artificial Intelligence • Computer Science"
      },
      footer: {
        designed: "Designed with ❤️ • React + Tailwind"
      }
    }
  };

  const t = content[language];

  const projectsData = {
    fr: [
      {
        title: "AssetFlow",
        period: "2025 — Stage PFE",
        description: "Solution complète de gestion des actifs industriels développée chez AsteelFlash Tunisie. Intègre la reconnaissance optique de caractères (OCR), la vision par ordinateur, et une interface Blazor avec ASP.NET Core et SQL Server.",
        tech: ["ASP.NET", "Blazor", "SQL Server", "C#", "OCR", "PostgreSQL"],
        gradient: "from-violet-500 via-purple-500 to-indigo-500",
        icon: "🏭",
        github: "https://github.com/AmineAdded/AssetFlow-Deployed",
      },
      {
        title: "HealthyfiTN",
        period: "Oct. 2025 - Déc. 2025",
        description: "Solution complète de santé numérique avec application mobile (Kotlin) et plateforme web (Angular), alimentée par un backend Spring Boot avec microservices. Intègre l'IA pour l'analyse de santé, suivi biométrique en temps réel avec avatar 3D, et chatbot intelligent Gemini.",
        tech: ["Angular", "Spring Boot", "Kotlin", "Keycloak", "AI", "Python"],
        gradient: "from-emerald-500 via-teal-500 to-cyan-500",
        icon: "🏥",
        github: "https://github.com/AbdouBenHatttab/healthyfitn",
      },
      {
        title: "Smart-Learn",
        period: "Nov. 2025 - Déc. 2025",
        description: "Plateforme éducative révolutionnaire combinant quiz interactifs, contenu vidéo YouTube et personnalisation IA. Propose des évaluations intelligentes, parcours d'apprentissage adaptatifs et gamification de la progression.",
        tech: ["Flutter", "Spring Boot", "MySQL", "Gemini API"],
        gradient: "from-blue-500 via-indigo-500 to-purple-500",
        icon: "🎓",
        github: "https://github.com/AmineAdded/Smart-Learn.git",
      },
      {
        title: "SITE Conference",
        period: "Juin 2025",
        description: "Plateforme web pour l'événement SITE avec aperçu des éditions précédentes, inscription en ligne, système de paiement, badges numériques et génération automatique de certificats.",
        tech: ["TypeScript", "Laravel", "MySQL"],
        gradient: "from-purple-500 via-pink-500 to-rose-500",
        icon: "🎪",
        github: "https://github.com/AmineAdded/SITE_Conference.git",
      },
      {
        title: "ChbebiWin",
        period: "Fév. 2025 - Mai 2025",
        description: "Application dédiée aux jeunes Tunisiens offrant des tests de personnalité et exploration de la culture, traditions et religion tunisiennes pour promouvoir l'identité nationale.",
        tech: ["Laravel", "Vue.js", "MySQL"],
        gradient: "from-red-500 via-orange-500 to-amber-500",
        icon: "🇹🇳",
        github: "https://github.com/AmineAdded/Chbebi-win-Projet-integration.git",
      },
      {
        title: "LawReserve",
        period: "Nov. 2024",
        description: "Plateforme connectant clients et avocats avec navigation des services juridiques, prise de rendez-vous et gestion des consultations.",
        tech: ["Vue.js", "PHP", "Firebase", "MySQL"],
        gradient: "from-amber-500 via-yellow-500 to-lime-500",
        icon: "⚖️",
        github: "https://github.com/AmineAdded/LawReserve-Project.git",
      },
      {
        title: "BusGameSimulator",
        period: "Fév. 2024 - Avr. 2025",
        description: "Système de simulation en C modélisant le transport public urbain en mode graphique avec SDL1.2, permettant l'évaluation de l'efficacité des activités de transport.",
        tech: ["C", "SDL 1.2"],
        gradient: "from-cyan-500 via-blue-500 to-indigo-500",
        icon: "🚌",
        github: "https://github.com/AmineAdded/BusGame.git",
      },
    ],
    en: [
      {
        title: "AssetFlow",
        period: "2025 — Final Year Internship",
        description: "Comprehensive industrial asset management solution developed at AsteelFlash Tunisia. Integrates optical character recognition (OCR), computer vision, and a Blazor interface with ASP.NET Core and SQL Server.",
        tech: ["ASP.NET", "Blazor", "SQL Server", "C#", "OCR", "PostgreSQL"],
        gradient: "from-violet-500 via-purple-500 to-indigo-500",
        icon: "🏭",
        github: "https://github.com/AmineAdded/AssetFlow-Deployed",
      },
      {
        title: "HealthyfiTN",
        period: "Oct. 2025 - Dec. 2025",
        description: "Complete digital health solution with mobile app (Kotlin) and web platform (Angular), powered by Spring Boot backend with microservices. Integrates AI for health analysis, real-time biometric tracking with 3D avatar, and Gemini intelligent chatbot.",
        tech: ["Angular", "Spring Boot", "Kotlin", "Keycloak", "AI", "Python"],
        gradient: "from-emerald-500 via-teal-500 to-cyan-500",
        icon: "🏥",
        github: "https://github.com/AbdouBenHatttab/healthyfitn",
      },
      {
        title: "Smart-Learn",
        period: "Nov. 2025 - Dec. 2025",
        description: "Revolutionary educational platform combining interactive quizzes, YouTube video content and AI personalization. Offers intelligent assessments, adaptive learning paths and gamified progress.",
        tech: ["Flutter", "Spring Boot", "MySQL", "Gemini API"],
        gradient: "from-blue-500 via-indigo-500 to-purple-500",
        icon: "🎓",
        github: "https://github.com/AmineAdded/Smart-Learn.git",
      },
      {
        title: "SITE Conference",
        period: "June 2025",
        description: "Web platform for SITE event with overview of previous editions, online registration, payment system, digital badges and automatic certificate generation.",
        tech: ["TypeScript", "Laravel", "MySQL"],
        gradient: "from-purple-500 via-pink-500 to-rose-500",
        icon: "🎪",
        github: "https://github.com/AmineAdded/SITE_Conference.git",
      },
      {
        title: "ChbebiWin",
        period: "Feb. 2025 - May 2025",
        description: "Application dedicated to young Tunisians offering personality tests and exploration of Tunisian culture, traditions and religion to promote national identity.",
        tech: ["Laravel", "Vue.js", "MySQL"],
        gradient: "from-red-500 via-orange-500 to-amber-500",
        icon: "🇹🇳",
        github: "https://github.com/AmineAdded/Chbebi-win-Projet-integration.git",
      },
      {
        title: "LawReserve",
        period: "Nov. 2024",
        description: "Platform connecting clients and lawyers with legal services navigation, appointment booking and consultation management.",
        tech: ["Vue.js", "PHP", "Firebase", "MySQL"],
        gradient: "from-amber-500 via-yellow-500 to-lime-500",
        icon: "⚖️",
        github: "https://github.com/AmineAdded/LawReserve-Project.git",
      },
      {
        title: "BusGameSimulator",
        period: "Feb. 2024 - Apr. 2025",
        description: "C-based simulation system modeling urban public transportation in graphics mode with SDL1.2, enabling evaluation of transport activity efficiency.",
        tech: ["C", "SDL 1.2"],
        gradient: "from-cyan-500 via-blue-500 to-indigo-500",
        icon: "🚌",
        github: "https://github.com/AmineAdded/BusGame.git",
      },
    ]
  };

  const certificationsData = {
    fr: [
      {
        title: "Attestation d'Excellence",
        issuer: "PeP - Pédagogie et Technologies",
        date: "Juillet 2025",
        icon: "🏆",
        color: "from-yellow-400 to-orange-500",
        image: attestationExcellence,
      },
      {
        title: "IEEEXtreme 18.0 Programming Competition",
        issuer: "IEEE",
        date: "Octobre 2024",
        skill: "19,000 participants",
        icon: "⚡",
        color: "from-blue-400 to-indigo-500",
        image: ieeeExtreme,
      },
      {
        title: "Microsoft Certified: Azure AI Fundamentals",
        issuer: "Microsoft",
        date: "Octobre 2024",
        skill: "NLP, Computer Vision, Azure AI",
        icon: "☁️",
        color: "from-cyan-400 to-blue-500",
        image: azureAi,
      },
      {
        title: "Code It Up 6.0 — 2ème Place",
        issuer: "IEEE ISET Bizerte",
        date: "Avril. 2026",
        skill: "Développement web avce AI",
        icon: "🥈",
        color: "from-purple-400 to-pink-500",
        image: codeItUp,
      },
    ],
    en: [
      {
        title: "Certificate of Excellence",
        issuer: "PeP - Pedagogy and Technologies",
        date: "July 2025",
        icon: "🏆",
        color: "from-yellow-400 to-orange-500",
        image: attestationExcellence,
      },
      {
        title: "IEEEXtreme 18.0 Programming Competition",
        issuer: "IEEE",
        date: "October 2024",
        skill: "19,000 participants",
        icon: "⚡",
        color: "from-blue-400 to-indigo-500",
        image: ieeeExtreme,
      },
      {
        title: "Microsoft Certified: Azure AI Fundamentals",
        issuer: "Microsoft",
        date: "October 2024",
        skill: "NLP, Computer Vision, Azure AI",
        icon: "☁️",
        color: "from-cyan-400 to-blue-500",
        image: azureAi,
      },
      {
        title: "Code It Up 6.0 — 2nd Place",
        issuer: "IEEE ISET Bizerte",
        date: "April. 2026",
        skill: "Web Development with AI",
        icon: "🥈",
        color: "from-purple-400 to-pink-500",
        image: codeItUp,
      },
    ]
  };

  const projects = projectsData[language];
  const certifications = certificationsData[language];

  const skills = [
    { name: "Java", level: 90, color: "bg-red-500" },
    { name: "C/C++", level: 85, color: "bg-blue-500" },
    { name: "C# / ASP.NET", level: 82, color: "bg-violet-500" },
    { name: "Python", level: 80, color: "bg-yellow-500" },
    { name: "Laravel", level: 90, color: "bg-red-600" },
    { name: "Vue.js", level: 88, color: "bg-emerald-500" },
    { name: "Angular", level: 85, color: "bg-red-500" },
    { name: "Blazor", level: 78, color: "bg-purple-500" },
    { name: "Spring Boot", level: 87, color: "bg-green-600" },
    { name: "MySQL / SQL Server / PostgreSQL", level: 85, color: "bg-blue-600" },
    { name: "Flutter", level: 82, color: "bg-cyan-500" },
    { name: "TypeScript", level: 83, color: "bg-blue-500" },
    { name: "OCR / Vision par ordinateur", level: 75, color: "bg-teal-500" },
    { name: "Redis / Power Automate", level: 70, color: "bg-orange-500" },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white overflow-hidden">
      {/* Custom Cursor Effect */}
      <div
        className="hidden lg:block fixed w-6 h-6 rounded-full border-2 border-cyan-400 pointer-events-none z-50 transition-all duration-100"
        style={{
          left: `${mousePosition.x}px`,
          top: `${mousePosition.y}px`,
          transform: "translate(-50%, -50%)",
          opacity: 0.8,
        }}
      />

      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-500" />
      </div>

      {/* Certification Image Modal */}
      {certModalImg && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
          onClick={() => setCertModalImg(null)}
        >
          <div className="relative max-w-3xl w-full" onClick={(e) => e.stopPropagation()}>
            <button
              className="absolute -top-10 right-0 text-white hover:text-cyan-400 transition-colors font-bold text-lg"
              onClick={() => setCertModalImg(null)}
            >
              ✕ Fermer
            </button>
            <img
              src={certModalImg}
              alt="Certification"
              className="w-full rounded-2xl shadow-2xl border border-slate-700"
            />
          </div>
        </div>
      )}

      {/* Navigation */}
      <nav
        className={`fixed w-full z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-slate-900/80 backdrop-blur-xl border-b border-slate-800 shadow-2xl"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="text-2xl font-bold">
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
                &lt;AA /&gt;
              </span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-1">
              {t.nav.map((label, idx) => {
                const id = ["home", "about", "experience", "projects", "certifications", "contact"][idx];
                return (
                  <button
                    key={id}
                    onClick={() => scrollToSection(id)}
                    className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                      activeSection === id
                        ? "bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg shadow-cyan-500/50"
                        : "text-slate-300 hover:text-white hover:bg-slate-800"
                    }`}
                  >
                    {label}
                  </button>
                );
              })}
             
              {/* Language Switcher */}
              <button
                onClick={() => setLanguage(language === "fr" ? "en" : "fr")}
                className="ml-2 px-4 py-2 bg-purple-500/20 hover:bg-purple-500/30 rounded-lg transition-colors border border-purple-500/30 flex items-center gap-2"
              >
                <Globe size={16} />
                <span className="font-semibold">{language === "fr" ? "EN" : "FR"}</span>
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 rounded-lg hover:bg-slate-800 transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-slate-900/95 backdrop-blur-xl border-t border-slate-800">
            <div className="px-4 py-6 space-y-2">
              {t.nav.map((label, idx) => {
                const id = ["home", "about", "experience", "projects", "certifications", "contact"][idx];
                return (
                  <button
                    key={id}
                    onClick={() => scrollToSection(id)}
                    className="block w-full text-left px-4 py-3 rounded-lg text-slate-300 hover:bg-slate-800 hover:text-white transition-all"
                  >
                    {label}
                  </button>
                );
              })}
              <button
                onClick={() => setLanguage(language === "fr" ? "en" : "fr")}
                className="w-full px-4 py-3 bg-purple-500/20 hover:bg-purple-500/30 rounded-lg transition-colors border border-purple-500/30 flex items-center justify-center gap-2"
              >
                <Globe size={16} />
                <span className="font-semibold">{language === "fr" ? "English" : "Français"}</span>
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="min-h-screen flex items-center justify-center relative pt-20"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-500/10 border border-cyan-500/30 rounded-full text-cyan-400 text-sm font-medium backdrop-blur-sm animate-fade-in">
              <Sparkles size={16} className="animate-pulse" />
              {t.hero.badge}
            </div>

            <h1 className="text-6xl md:text-8xl font-black mb-6 animate-fade-in">
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
                {t.hero.name}
              </span>
            </h1>

            <div className="space-y-4 animate-fade-in delay-100">
              <p className="text-2xl md:text-4xl font-bold text-slate-200">
                {t.hero.title}
              </p>
              <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto">
                {t.hero.description}
                <br />
                <span className="text-cyan-400">{t.hero.education}</span> • {t.hero.role}{" "}
                <span className="text-blue-400">IEEE</span>
              </p>
            </div>

            <div className="flex flex-wrap gap-4 justify-center pt-8 animate-fade-in delay-200">
              <button
                onClick={() => scrollToSection("projects")}
                className="group px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full font-bold shadow-lg shadow-cyan-500/50 hover:shadow-xl hover:shadow-cyan-500/60 transform hover:scale-105 transition-all duration-300 flex items-center gap-2"
              >
                {t.hero.cta1}
                <ArrowRight
                  size={20}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="px-8 py-4 bg-slate-800 border-2 border-cyan-500 rounded-full font-bold hover:bg-slate-700 transform hover:scale-105 transition-all duration-300"
              >
                {t.hero.cta2}
              </button>
              <a
                href={language === "fr" ? "/cv-amine-fr.pdf" : "/cv-amine-en.pdf"}
                download={language === "fr" ? "CV_Amine_Added_FR.pdf" : "CV_Amine_Added_EN.pdf"}
                target="_blank"
                rel="noopener noreferrer"
                className="group px-8 py-4 bg-slate-800 border-2 border-purple-500 rounded-full font-bold hover:bg-slate-700 transform hover:scale-105 transition-all duration-300 flex items-center gap-2"
              >
                <Download size={20} />
                {t.hero.downloadCV}
              </a>
            </div>

            <div className="flex justify-center gap-4 pt-8 animate-fade-in delay-300">
              <a
                href="https://www.linkedin.com/in/amine-added-b9aa59322/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 bg-slate-800 rounded-full hover:bg-gradient-to-r hover:from-cyan-500 hover:to-blue-500 transform hover:scale-110 transition-all duration-300 shadow-lg"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="mailto:amineadded3@gmail.com"
                className="p-4 bg-slate-800 rounded-full hover:bg-gradient-to-r hover:from-cyan-500 hover:to-blue-500 transform hover:scale-110 transition-all duration-300 shadow-lg"
              >
                <Mail size={24} />
              </a>
            </div>
          </div>

          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ChevronDown className="text-slate-400" size={32} />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {t.stats.map((stat, idx) => {
              const icons = [Code, Zap, Award, Target];
              const Icon = icons[idx];
              return (
                <div
                  key={idx}
                  className="text-center p-6 bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-slate-700 hover:border-cyan-500 transition-all duration-300 hover:transform hover:scale-105"
                >
                  <Icon className="w-12 h-12 mx-auto mb-4 text-cyan-400" />
                  <div className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-2">
                    {stat.value}
                  </div>
                  <div className="text-slate-400 text-sm">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-black mb-4">
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                {t.about.title}
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto rounded-full" />
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-3xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity" />
              <div className="relative aspect-square rounded-3xl bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 flex items-center justify-center text-9xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-blue-500/10" />
                👨‍💻
              </div>
            </div>

            <div className="space-y-6">
              <p className="text-lg text-slate-300 leading-relaxed">
                {t.about.intro}
              </p>

              <p className="text-lg text-slate-300 leading-relaxed">
                {t.about.experience}
              </p>

              <p className="text-lg text-slate-300 leading-relaxed">
                {t.about.role}
              </p>

              <div className="pt-8">
                <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                  <Zap className="text-cyan-400" />
                  {t.about.skillsTitle}
                </h3>
                <div className="space-y-4">
                  {skills.map((skill, idx) => (
                    <div key={idx} className="group">
                      <div className="flex justify-between mb-2">
                        <span className="text-slate-300 font-medium">
                          {skill.name}
                        </span>
                        <span className="text-cyan-400 font-bold">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
                        <div
                          className={`h-full ${skill.color} rounded-full transition-all duration-1000 ease-out`}
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-black mb-4">
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                {t.experience.title}
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto rounded-full" />
          </div>

          <div className="max-w-5xl mx-auto relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-cyan-500 via-blue-500 to-purple-500 hidden md:block" />

            <div className="space-y-12">
              {/* Job 1 — AsteelFlash */}
              <div className="relative grid md:grid-cols-2 gap-8 items-center">
                <div className="hidden md:block" />

                <div className="hidden md:block absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
                  <div className="relative">
                    <div className="w-6 h-6 bg-violet-500 rounded-full border-4 border-slate-900 shadow-lg shadow-violet-500/50 animate-pulse" />
                    <div className="absolute inset-0 w-6 h-6 bg-violet-500 rounded-full animate-ping opacity-75" />
                  </div>
                </div>

                <div className="group relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-violet-500 to-purple-500 rounded-2xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity" />
                  <div className="relative bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-8 hover:border-violet-500 transition-all ml-0 md:ml-8">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <span className="inline-block px-3 py-1 bg-violet-500/20 border border-violet-500/30 text-violet-400 rounded-full text-sm font-medium mb-3">
                          {t.experience.job1.date}
                        </span>
                        <h3 className="text-2xl font-bold mb-2 text-white">
                          {t.experience.job1.title}
                        </h3>
                        <p className="text-violet-400 font-semibold text-lg flex items-center gap-2 mb-4">
                          <Briefcase size={20} />
                          {t.experience.job1.company}
                        </p>
                      </div>
                    </div>
                    <p className="text-slate-300 leading-relaxed mb-4">
                      {t.experience.job1.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {["ASP.NET", "Blazor", "C#", "SQL Server", "OCR"].map(tech => (
                        <span key={tech} className="px-3 py-1 bg-violet-500/20 border border-violet-500/30 text-violet-400 rounded-lg text-sm font-medium">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Job 2 — OneTech Developer */}
              <div className="relative grid md:grid-cols-2 gap-8 items-center">
                <div className="group relative md:col-start-1">
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity" />
                  <div className="relative bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-8 hover:border-cyan-500 transition-all mr-0 md:mr-8">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <span className="inline-block px-3 py-1 bg-cyan-500/20 border border-cyan-500/30 text-cyan-400 rounded-full text-sm font-medium mb-3">
                          {t.experience.job2.date}
                        </span>
                        <h3 className="text-2xl font-bold mb-2 text-white">
                          {t.experience.job2.title}
                        </h3>
                        <p className="text-cyan-400 font-semibold text-lg flex items-center gap-2 mb-4">
                          <Briefcase size={20} />
                          {t.experience.job2.company}
                        </p>
                      </div>
                    </div>
                    <p className="text-slate-300 leading-relaxed mb-4">
                      {t.experience.job2.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-emerald-500/20 border border-emerald-500/30 text-emerald-400 rounded-lg text-sm font-medium">Vue.js 3</span>
                      <span className="px-3 py-1 bg-red-500/20 border border-red-500/30 text-red-400 rounded-lg text-sm font-medium">Laravel 9</span>
                    </div>
                  </div>
                </div>

                <div className="hidden md:block absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
                  <div className="relative">
                    <div className="w-6 h-6 bg-cyan-500 rounded-full border-4 border-slate-900 shadow-lg shadow-cyan-500/50 animate-pulse" />
                    <div className="absolute inset-0 w-6 h-6 bg-cyan-500 rounded-full animate-ping opacity-75" />
                  </div>
                </div>

                <div className="hidden md:block" />
              </div>

              {/* Job 3 — OneTech Observation */}
              <div className="relative grid md:grid-cols-2 gap-8 items-center">
                <div className="hidden md:block" />

                <div className="hidden md:block absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
                  <div className="relative">
                    <div className="w-6 h-6 bg-blue-500 rounded-full border-4 border-slate-900 shadow-lg shadow-blue-500/50 animate-pulse" />
                    <div className="absolute inset-0 w-6 h-6 bg-blue-500 rounded-full animate-ping opacity-75" />
                  </div>
                </div>

                <div className="group relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity" />
                  <div className="relative bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-8 hover:border-blue-500 transition-all ml-0 md:ml-8">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <span className="inline-block px-3 py-1 bg-blue-500/20 border border-blue-500/30 text-blue-400 rounded-full text-sm font-medium mb-3">
                          {t.experience.job3.date}
                        </span>
                        <h3 className="text-2xl font-bold mb-2 text-white">
                          {t.experience.job3.title}
                        </h3>
                        <p className="text-blue-400 font-semibold text-lg flex items-center gap-2 mb-4">
                          <Briefcase size={20} />
                          {t.experience.job3.company}
                        </p>
                      </div>
                    </div>
                    <p className="text-slate-300 leading-relaxed">
                      {t.experience.job3.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="hidden md:flex justify-center mt-12">
              <div className="flex flex-col items-center">
                <div className="w-4 h-4 bg-purple-500 rounded-full border-4 border-slate-900 shadow-lg shadow-purple-500/50" />
                <div className="mt-2 px-4 py-1 bg-purple-500/20 border border-purple-500/30 text-purple-400 rounded-full text-sm font-medium">
                  {t.experience.timeline}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-black mb-4">
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                {t.projects.title}
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto rounded-full" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, idx) => (
              <a
                key={idx}
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl overflow-hidden hover:border-cyan-500 transition-all duration-300 hover:transform hover:scale-105 block"
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-10 transition-opacity`}
                />
                <div className="relative p-6">
                  <div className="flex items-start justify-between mb-4">
                    <span className="text-4xl">{project.icon}</span>
                    <div className="flex items-center gap-1 text-slate-400 group-hover:text-cyan-400 transition-colors">
                      <Github size={18} />
                      <ExternalLink size={16} />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-white group-hover:text-cyan-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-slate-400 mb-3">{project.period}</p>
                  <p className="text-slate-300 text-sm leading-relaxed mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="px-2 py-1 bg-slate-700/50 text-slate-300 rounded-md text-xs font-medium border border-slate-600"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-black mb-4">
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                {t.certifications.title}
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto rounded-full" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert, idx) => (
              <div
                key={idx}
                className={`group relative bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl overflow-hidden hover:border-cyan-500 transition-all duration-300 hover:transform hover:scale-105 flex flex-col ${cert.image ? "cursor-pointer" : ""}`}
                onClick={() => cert.image && setCertModalImg(cert.image)}
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${cert.color} opacity-0 group-hover:opacity-10 transition-opacity rounded-2xl`}
                />

                {/* Certificate image preview */}
                {cert.image && (
                  <div className="relative w-full h-40 overflow-hidden">
                    <img
                      src={cert.image}
                      alt={cert.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent flex items-end justify-end p-2">
                      <span className="text-xs text-cyan-400 font-medium flex items-center gap-1 bg-slate-900/60 px-2 py-1 rounded-full">
                        <ExternalLink size={12} />
                        {t.certifications.clickToView}
                      </span>
                    </div>
                  </div>
                )}

                <div className="relative p-6 flex-1">
                  <div className="text-4xl mb-3">{cert.icon}</div>
                  <h3 className="text-base font-bold mb-2 text-white leading-tight">
                    {cert.title}
                  </h3>
                  <p className="text-cyan-400 font-semibold text-sm mb-1">
                    {cert.issuer}
                  </p>
                  <p className="text-slate-400 text-sm mb-2">{cert.date}</p>
                  {cert.skill && (
                    <span className="inline-block px-3 py-1 bg-cyan-500/20 border border-cyan-500/30 text-cyan-400 rounded-full text-xs font-medium">
                      {cert.skill}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-5xl md:text-6xl font-black mb-6">
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                {t.contact.title}
              </span>
            </h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              {t.contact.subtitle}
            </p>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-3xl blur-2xl opacity-20" />
            <div className="relative bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-3xl p-12">
              <div className="flex flex-wrap gap-4 justify-center mb-12">
                <a
                  href="https://www.linkedin.com/in/amine-added-b9aa59322/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full font-bold shadow-lg shadow-cyan-500/50 hover:shadow-xl hover:shadow-cyan-500/60 transform hover:scale-105 transition-all"
                >
                  <Linkedin size={20} />
                  LinkedIn
                  <ArrowRight
                    size={20}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </a>
                <a
                  href="mailto:amineadded3@gmail.com"
                  className="group flex items-center gap-3 px-8 py-4 bg-slate-700 border-2 border-cyan-500 rounded-full font-bold hover:bg-slate-600 transform hover:scale-105 transition-all"
                >
                  <Mail size={20} />
                  Email
                  <ArrowRight
                    size={20}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </a>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-slate-900/50 rounded-2xl p-6 border border-slate-700">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-3 bg-cyan-500/20 rounded-lg">
                      <GraduationCap className="text-cyan-400" size={24} />
                    </div>
                    <h3 className="text-white font-bold text-lg">{t.contact.formation}</h3>
                  </div>
                  <p className="text-slate-300 font-semibold">ISET Bizerte</p>
                  <p className="text-slate-400 text-sm">
                    {language === "fr"
                      ? "Licence Appliquée — Technologie de l'Information"
                      : "Applied Bachelor's — Information Technology"}
                  </p>
                </div>

                <div className="bg-slate-900/50 rounded-2xl p-6 border border-slate-700">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-3 bg-blue-500/20 rounded-lg">
                      <Briefcase className="text-blue-400" size={24} />
                    </div>
                    <h3 className="text-white font-bold text-lg">{t.contact.status}</h3>
                  </div>
                  <p className="text-slate-300 font-semibold">
                    {t.contact.statusText}
                  </p>
                  <p className="text-slate-400 text-sm">
                    {t.contact.statusDesc}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 relative border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-2xl font-bold">
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
                &lt;AA /&gt;
              </span>
            </div>

            <div className="flex gap-6">
              <a
                href="https://www.linkedin.com/in/amine-added-b9aa59322/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-slate-800 rounded-lg hover:bg-gradient-to-r hover:from-cyan-500 hover:to-blue-500 transform hover:scale-110 transition-all"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="mailto:amineadded3@gmail.com"
                className="p-3 bg-slate-800 rounded-lg hover:bg-gradient-to-r hover:from-cyan-500 hover:to-blue-500 transform hover:scale-110 transition-all"
              >
                <Mail size={20} />
              </a>
            </div>

            <p className="text-slate-400 text-sm text-center md:text-right">
              © 2026 Amine Added
              <br />
              <span className="text-slate-500">
                {t.footer.designed}
              </span>
            </p>
          </div>
        </div>
      </footer>

      {/* Scroll to top button */}
      <button
        onClick={() => scrollToSection("home")}
        className={`fixed bottom-8 right-8 p-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full shadow-lg shadow-cyan-500/50 hover:shadow-xl hover:shadow-cyan-500/60 transform transition-all duration-300 z-40 ${
          isScrolled
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-16 pointer-events-none"
        }`}
      >
        <ChevronDown className="rotate-180" size={24} />
      </button>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.6s ease-out forwards;
        }

        .delay-100 {
          animation-delay: 0.1s;
        }

        .delay-200 {
          animation-delay: 0.2s;
        }

        .delay-300 {
          animation-delay: 0.3s;
        }

        .delay-500 {
          animation-delay: 0.5s;
        }

        .delay-700 {
          animation-delay: 0.7s;
        }

        .delay-1000 {
          animation-delay: 1s;
        }
      `}</style>
    </div>
  );
}