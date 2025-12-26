import { PortfolioData } from '../../types';

export const INITIAL_DATA: PortfolioData = {
  userInfo: {
    name: "Yousif SABTI", // [cite: 3]
    title: "Développeur Full-Stack & Étudiant UHA 4.0", // [cite: 5]
    bio: "Étudiant passionné en informatique à l'UHA 4.0, je maîtrise le développement Java, C# ainsi que l'architecture Full-Stack. Actuellement à la recherche d'une alternance pour septembre 2025.", // [cite: 5, 6]
    location: "Thann, 68800, France", // [cite: 4]
    email: "alih47@gmail.com", // [cite: 4]
    photoUrl: "./profile.jpg",
    cvUrl: "/cv.alter.pdf", // Nom du fichier PDF uploadé
    socials: {
      github: "https://github.com/yousiffalih",
      linkedin: "https://www.linkedin.com/in/yousif-falih", // [cite: 4]
      twitter: "#"
    }
  },
  projects: [
    {
      id: "eventease",
      title: "EventEase", // [cite: 20]
      description: "Application de gestion d'événements facilitant l'organisation et la participation. Utilisation de SQLite pour le local et MongoDB pour le distant.", // [cite: 20, 21]
      tags: ["React Native", "TypeScript", "Expo", "MongoDB", "SQLite"], // [cite: 21, 22]
      imageUrl: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&q=80&w=800",
      category: "mobile"
    },
    {
      id: "voyage-groupe",
      title: "Voyage en Groupe", // [cite: 12]
      description: "Réseau social pour organiser des voyages en groupe, facilitant la mise en relation des voyageurs.", // [cite: 13]
      tags: ["React", "Node.js (OOP)", "PostgreSQL", "ORM"], // [cite: 14]
      imageUrl: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&q=80&w=800",
      category: "web"
    },
    {
      id: "hoplacup",
      title: "HoplaCup Mulhouse", // 
      description: "Système de gestion des compétitions et des matchs de water-polo.", // [cite: 15, 16]
      tags: ["JavaScript", "Node.js", "PostgreSQL"], // [cite: 17]
      imageUrl: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=800",
      category: "web"
    },
    {
      id: "hehewatt",
      title: "HEHEWATT", // [cite: 23]
      description: "Application de covoiturage collaborative utilisant PHP/MySQL, Docker pour le déploiement.", // [cite: 23]
      tags: ["PHP", "MySQL", "JavaScript", "Docker"], // [cite: 23]
      imageUrl: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&q=80&w=800",
      category: "web"
    },
    {
      id: "pacman",
      title: "Pacman Game",
      description: "Jeu classique Pacman revisité.",
      tags: ["Java", "React"],
      imageUrl: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=800",
      category: "web"
    },
    {
      id: "taxi-brousse",
      title: "Taxi-Brousse",
      description: "Application web de gestion de réservations de transport.",
      tags: ["Web"],
      imageUrl: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&q=80&w=800",
      category: "web"
    }
  ],
  skills: [
    { name: "JavaScript / TypeScript", level: 90, category: "Frontend" }, // [cite: 25]
    { name: "Java / Spring Boot", level: 85, category: "Backend" }, // [cite: 25, 26]
    { name: "React / React Native", level: 90, category: "Mobile/Frontend" }, // [cite: 26]
    { name: "Node.js", level: 80, category: "Backend" }, // [cite: 26]
    { name: "C#", level: 75, category: "Backend" }, // [cite: 25]
    { name: "Docker", level: 70, category: "DevOps" } // [cite: 26]
  ],
  education: [
    {
      school: "Université de Haute-Alsace, UHA 4.0",
      degree: "Étudiant en développement web",
      period: "2024 – 2026",
      location: "Mulhouse, France"
    },
    {
      school: "Afpa Colmar",
      degree: "Formation MPI",
      period: "2022 – 2023"
    },
    {
      school: "AFPA Mulhouse",
      degree: "Formation",
      period: "2021 – 2022"
    },
    {
      school: "Lycée",
      degree: "Bac en informatique",
      period: "2017"
    }
  ],
  experiences: [
    {
      company: "UHA 4.0",
      role: "Étudiant",
      period: "2024 – 2026",
      description: "Développement web, architecture Full-Stack, projets académiques et professionnels."
    },
    {
      company: "Bagdad",
      role: "Réparateur de téléphones",
      period: "2018",
      description: "Réparation et maintenance de smartphones."
    },
    {
      company: "Bagdad",
      role: "Technicien Internet",
      period: "2017",
      description: "Installation et maintenance de réseaux internet."
    }
  ],
  languages: [
    { name: "Arabe", level: "Langue maternelle" },
    { name: "Anglais", level: "Courant" },
    { name: "Français", level: "Niveau avancé" }
  ],
  interests: ["Sports", "Voyages", "Photographie", "Programmation"]
};