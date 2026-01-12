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
} from "lucide-react";

// Importer les images
import attestationExcellence from "./assets/certifications/attestation-excellence.jpg";
import ieeeExtreme from "./assets/certifications/ieee-extreme.jpg";
import azureAI from "./assets/certifications/azure-ai.jpg";

export default function Portfolio() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

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

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setMobileMenuOpen(false);
    }
  };

  const projects = [
    {
      title: "HealthyfiTN",
      period: "Oct. 2025 - Déc. 2025",
      description:
        "Solution complète de santé numérique avec application mobile (Kotlin) et plateforme web (Angular), alimentée par un backend Spring Boot avec microservices. Intègre l'IA pour l'analyse de santé, suivi biométrique en temps réel avec avatar 3D, et chatbot intelligent Gemini.",
      tech: ["Angular", "Spring Boot", "Kotlin", "Keycloak", "AI", "Python"],
      gradient: "from-emerald-500 to-teal-600",
    },
    {
      title: "Smart-Learn",
      period: "Nov. 2025 - Déc. 2025",
      description:
        "Plateforme éducative révolutionnaire combinant quiz interactifs, contenu vidéo YouTube et personnalisation IA. Propose des évaluations intelligentes, parcours d'apprentissage adaptatifs et gamification de la progression.",
      tech: ["Flutter", "Spring Boot", "MySQL", "Gemini API"],
      gradient: "from-blue-500 to-indigo-600",
    },
    {
      title: "SITE Conference",
      period: "Juin 2025",
      description:
        "Plateforme web pour l'événement SITE avec aperçu des éditions précédentes, inscription en ligne, système de paiement, badges numériques et génération automatique de certificats.",
      tech: ["TypeScript", "Laravel", "MySQL"],
      gradient: "from-purple-500 to-pink-600",
    },
    {
      title: "ChbebiWin",
      period: "Fév. 2025 - Mai 2025",
      description:
        "Application dédiée aux jeunes Tunisiens offrant des tests de personnalité et exploration de la culture, traditions et religion tunisiennes pour promouvoir l'identité nationale.",
      tech: ["Laravel", "Vue.js", "MySQL"],
      gradient: "from-red-500 to-orange-600",
    },
    {
      title: "LawReserve",
      period: "Nov. 2024",
      description:
        "Plateforme connectant clients et avocats avec navigation des services juridiques, prise de rendez-vous et gestion des consultations.",
      tech: ["Vue.js", "PHP", "Firebase", "MySQL"],
      gradient: "from-amber-500 to-yellow-600",
    },
    {
      title: "BusGameSimulator",
      period: "Fév. 2024 - Avr. 2025",
      description:
        "Système de simulation en C modélisant le transport public urbain en mode graphique avec SDL1.2, permettant l'évaluation de l'efficacité des activités de transport.",
      tech: ["C", "SDL 1.2"],
      gradient: "from-cyan-500 to-blue-600",
    },
    {
      title: "Library-Project",
      period: "Oct. 2024 - Nov. 2024",
      description:
        "Système de gestion de bibliothèque simplifiant les opérations avec suivi des emprunts, gestion d'inventaire et contrôle d'accès utilisateurs.",
      tech: ["PHP", "MySQL", "HTML/CSS"],
      gradient: "from-violet-500 to-purple-600",
    },
  ];

  const certifications = [
    {
      title: "Attestation d'Excellence",
      issuer: "PeP - Pédagogie et Technologies",
      date: "Juillet 2025",
      image: attestationExcellence,
    },
    {
      title: "IEEEXtreme 18.0 Programming Competition",
      issuer: "IEEE",
      date: "Octobre 2024",
      skill: "Compétition de programmation - 19,000 participants",
      image: ieeeExtreme,
    },
    {
      title: "Microsoft Certified: Azure AI Fundamentals",
      issuer: "Microsoft",
      date: "Octobre 2024",
      skill: "NLP, Computer Vision, Azure AI",
      image: azureAI,
    },
    {
      title: "Bizerte Tcodi 2.0",
      issuer: "IEEE ISET Bizerte",
      date: "Sept. 2025",
      skill: "Résolution de problèmes",
    },
  ];

  const skills = [
    "Java",
    "C/C++",
    "Python",
    "Laravel",
    "Vue.js",
    "Angular",
    "Spring Boot",
    "MySQL",
    "Flutter",
    "TypeScript",
    "PHP",
    "Firebase",
    "Kotlin",
    "React",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Navigation */}
      <nav
        className={`fixed w-full z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/90 backdrop-blur-lg shadow-lg"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              AA
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              {[
                "home",
                "about",
                "experience",
                "projects",
                "certifications",
                "contact",
              ].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`capitalize font-medium transition-all ${
                    activeSection === item
                      ? "text-blue-600"
                      : "text-gray-600 hover:text-blue-600"
                  }`}
                >
                  {item === "home"
                    ? "Accueil"
                    : item === "about"
                    ? "À propos"
                    : item === "experience"
                    ? "Expérience"
                    : item === "projects"
                    ? "Projets"
                    : item === "certifications"
                    ? "Certifications"
                    : "Contact"}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-gray-600"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {[
                "home",
                "about",
                "experience",
                "projects",
                "certifications",
                "contact",
              ].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="block w-full text-left px-3 py-2 capitalize text-gray-600 hover:bg-blue-50 hover:text-blue-600 rounded-lg"
                >
                  {item === "home"
                    ? "Accueil"
                    : item === "about"
                    ? "À propos"
                    : item === "experience"
                    ? "Expérience"
                    : item === "projects"
                    ? "Projets"
                    : item === "certifications"
                    ? "Certifications"
                    : "Contact"}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16"
      >
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-1/2 -right-1/2 w-full h-full bg-gradient-to-br from-blue-400/20 to-indigo-600/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-1/2 -left-1/2 w-full h-full bg-gradient-to-tr from-purple-400/20 to-pink-600/20 rounded-full blur-3xl animate-pulse delay-700"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-block mb-4 px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-sm font-medium">
            🚀 Étudiant en Informatique
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent animate-fade-in">
            Amine Added
          </h1>

          <p className="text-xl md:text-2xl text-gray-600 mb-4 font-light">
            Développeur Full Stack Passionné
          </p>

          <p className="text-lg text-gray-500 mb-8 max-w-2xl mx-auto">
            ISET Bizerte • Java, C, Laravel, Vue.js • Membre à IEEE ISET Bizerte
          </p>

          <div className="flex flex-wrap gap-4 justify-center mb-12">
            <button
              onClick={() => scrollToSection("projects")}
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-full font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all"
            >
              Voir mes projets
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="px-8 py-4 bg-white text-blue-600 rounded-full font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all border-2 border-blue-600"
            >
              Me contacter
            </button>
          </div>

          <div className="flex justify-center gap-6">
            <a
              href="https://www.linkedin.com/in/amine-added-b9aa59322/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all"
            >
              <Linkedin className="text-blue-600" size={24} />
            </a>
            <a
              href="mailto:amineadded3@gmail.com"
              className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all"
            >
              <Mail className="text-blue-600" size={24} />
            </a>
          </div>

          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ChevronDown className="text-gray-400" size={32} />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              À propos de moi
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="w-full aspect-square rounded-3xl bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center text-white text-9xl shadow-2xl">
                👨‍💻
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-purple-600 to-pink-600 rounded-3xl opacity-20 -z-10"></div>
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-gradient-to-br from-emerald-600 to-teal-600 rounded-3xl opacity-20 -z-10"></div>
            </div>

            <div className="space-y-6">
              <p className="text-lg text-gray-600 leading-relaxed">
                Je suis un étudiant en informatique à l'
                <span className="font-semibold text-blue-600">
                  ISET Bizerte
                </span>{" "}
                avec de solides compétences en résolution de problèmes et une
                expérience pratique dans le développement full stack.
              </p>

              <p className="text-lg text-gray-600 leading-relaxed">
                Durant mes stages chez{" "}
                <span className="font-semibold text-indigo-600">
                  OneTech Group
                </span>
                , j'ai développé des solutions web modernes utilisant Vue.js et
                Laravel pour la gestion d'entreprise.
              </p>

              <p className="text-lg text-gray-600 leading-relaxed">
                Actuellement{" "}
                <span className="font-semibold text-purple-600">
                  Vice Chairman
                </span>{" "}
                de l'IEEE ISET Bizerte Student Branch, je suis déterminé à
                poursuivre en cycle d'ingénieur avec une spécialisation en
                Intelligence Artificielle.
              </p>

              <div className="pt-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Compétences Techniques
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill, idx) => (
                    <span
                      key={idx}
                      className="px-4 py-2 bg-gradient-to-r from-blue-50 to-indigo-50 text-blue-600 rounded-full text-sm font-medium border border-blue-200 hover:shadow-md transition-shadow"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section
        id="experience"
        className="py-20 bg-gradient-to-br from-slate-50 to-blue-50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 mb-4">
              <Briefcase className="text-blue-600" size={32} />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Expérience Professionnelle
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto rounded-full"></div>
          </div>

          <div className="max-w-4xl mx-auto relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-600 to-indigo-600 hidden md:block"></div>

            <div className="space-y-12">
              <div className="relative pl-0 md:pl-20 group">
                <div className="hidden md:block absolute left-6 top-8 w-5 h-5 rounded-full bg-blue-600 border-4 border-white shadow-lg group-hover:scale-125 transition-transform"></div>
                <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all p-8 border border-gray-100">
                  <div className="flex flex-wrap justify-between items-start mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">
                        Stagiaire Développeur
                      </h3>
                      <p className="text-blue-600 font-semibold text-lg">
                        OneTech Group
                      </p>
                    </div>
                    <span className="px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-sm font-medium">
                      Janvier 2025
                    </span>
                  </div>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    Développement d'une application web complète pour la gestion
                    des salariés, tâches, évaluations et formateurs utilisant
                    les technologies modernes Vue.js 3 et Laravel 9.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-emerald-50 text-emerald-600 rounded-lg text-sm font-medium">
                      Vue.js 3
                    </span>
                    <span className="px-3 py-1 bg-red-50 text-red-600 rounded-lg text-sm font-medium">
                      Laravel 9
                    </span>
                  </div>
                </div>
              </div>

              <div className="relative pl-0 md:pl-20 group">
                <div className="hidden md:block absolute left-6 top-8 w-5 h-5 rounded-full bg-indigo-600 border-4 border-white shadow-lg group-hover:scale-125 transition-transform"></div>
                <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all p-8 border border-gray-100">
                  <div className="flex flex-wrap justify-between items-start mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">
                        Stagiaire d'Observation
                      </h3>
                      <p className="text-indigo-600 font-semibold text-lg">
                        OneTech Group
                      </p>
                    </div>
                    <span className="px-4 py-2 bg-indigo-100 text-indigo-600 rounded-full text-sm font-medium">
                      Janvier 2024
                    </span>
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    Stage d'observation pour découvrir le monde professionnel et
                    apprentissage de la fabrication des composants
                    électroniques.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 mb-4">
              <Code className="text-blue-600" size={32} />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Projets Réalisés
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, idx) => (
              <div
                key={idx}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all overflow-hidden border border-gray-100 hover:-translate-y-2"
              >
                <div
                  className={`h-3 bg-gradient-to-r ${project.gradient}`}
                ></div>
                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                      {project.title}
                    </h3>
                    <ExternalLink
                      className="text-gray-400 group-hover:text-blue-600 transition-colors flex-shrink-0 ml-2"
                      size={20}
                    />
                  </div>
                  <p className="text-sm text-gray-500 mb-4">{project.period}</p>
                  <p className="text-gray-600 leading-relaxed mb-4 text-sm">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="px-2 py-1 bg-gray-100 text-gray-600 rounded-md text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section
        id="certifications"
        className="py-20 bg-gradient-to-br from-slate-50 to-blue-50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 mb-4">
              <Award className="text-blue-600" size={32} />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Certifications & Prix
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all border-l-4 border-blue-600 hover:-translate-y-1 overflow-hidden"
              >
                {/* Si l'image existe, l'afficher */}
                {cert.image && (
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={cert.image}
                      alt={cert.title}
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  </div>
                )}

                <div className="p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    {cert.title}
                  </h3>
                  <p className="text-blue-600 font-semibold text-sm mb-2">
                    {cert.issuer}
                  </p>
                  <p className="text-gray-500 text-sm mb-2">{cert.date}</p>
                  {cert.skill && (
                    <span className="inline-block px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-xs font-medium">
                      {cert.skill}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Reste du code (Bénévolat) */}
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="py-20 bg-gradient-to-br from-blue-600 to-indigo-600"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Travaillons Ensemble
          </h2>
          <p className="text-xl text-blue-100 mb-12 max-w-2xl mx-auto">
            Je suis toujours ouvert aux opportunités de collaboration et aux
            projets innovants. N'hésitez pas à me contacter !
          </p>

          <div className="flex flex-wrap gap-4 justify-center mb-12">
            <a
              href="https://www.linkedin.com/in/amine-added-b9aa59322/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-8 py-4 bg-white text-blue-600 rounded-full font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all"
            >
              <Linkedin size={20} />
              LinkedIn
            </a>
            <a
              href="mailto:amineadded3@gmail.com"
              className="flex items-center gap-2 px-8 py-4 bg-white text-blue-600 rounded-full font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all"
            >
              <Mail size={20} />
              Email
            </a>
          </div>

          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 max-w-2xl mx-auto">
            <div className="grid md:grid-cols-2 gap-6 text-left">
              <div>
                <h3 className="text-white font-semibold mb-2 flex items-center gap-2">
                  <GraduationCap size={20} />
                  Formation
                </h3>
                <p className="text-blue-100">ISET Bizerte</p>
                <p className="text-blue-200 text-sm">
                  Technologie Informatique
                </p>
              </div>
              <div>
                <h3 className="text-white font-semibold mb-2 flex items-center gap-2">
                  <Briefcase size={20} />
                  Statut
                </h3>
                <p className="text-blue-100">Ouvert aux opportunités</p>
                <p className="text-blue-200 text-sm">
                  Stage • Projet • Freelance
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-400">
            © 2026 Amine Added. Tous droits réservés. Conçu avec ❤️ et React +
            Tailwind
          </p>
        </div>
      </footer>
    </div>
  );
}
