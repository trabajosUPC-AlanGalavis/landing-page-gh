import type {Translatable} from "../models/Translatable.ts";
import type {TeamMember} from "../models/TeamMember.ts";

interface AboutUsData {
  title: string;
  project: {
    title: string;
    description: string;
  },
  team: {
    title: string;
    description: string;
  },
  carouselTitle: string,
  members: Array<TeamMember>;
}

export const aboutStrings: Translatable<AboutUsData> = {
  en: {
    title: "About",
    project: {
      title: "About the project",
      description: "Greenhouse seeks to offer an advanced technological solution to the mushroom industry in Peru."
    },
    team: {
      title: "About the team",
      description: "Integradis seeks to offer an advanced technological solutions in Peru."
    },
    carouselTitle: "Members",
    members: [
      {
        name: "Andrés Leiva",
        description: "I am a software engineering student who enjoys working within the React, Nest js and Rust ecosystem.",
        githubUrl: "https://github.com/aleiva17",
        linkedinUrl: "https://www.linkedin.com/in/aleiva17/"
      },
      {
        name: "Nicolás Espinoza",
        description: "I have been studying software engineering at the UPC since 2021, so I consider myself a creative and imaginative person.",
        githubUrl: "https://github.com/EspinozaNaer",
        linkedinUrl: "https://www.linkedin.com/in/nicol%C3%A1s-espinoza-394b84225/"
      },
      {
        name: "Andrés Soto",
        description: "I am a software engineering student at the UPC capable of working under pressure who enjoys to generate solutions using technology.",
        githubUrl: "https://github.com/asotito",
        linkedinUrl: "https://www.linkedin.com/in/andres-soto-0429a127b/"
      },
      {
        name: "Carlo Seminario",
        description: "I am pursuing a software engineering degree and I consider myself as a person who is responsible,  persevering and capable of working under pressure.",
        githubUrl: "https://github.com/CarloLSG",
        linkedinUrl: "https://www.linkedin.com/in/carlo-luca-seminario/"
      },
      {
        name: "Alan Galavis",
        description: "I am studying software engineering at UPC and I consider that I am organized, persevering and creative.",
        githubUrl: "https://github.com/alanegd",
        linkedinUrl: "https://www.linkedin.com/in/alan-galavis/"
      }
    ]
  },
  es: {
    title: "Acerca de",
    project: {
      title: "Acerca del proyecto",
      description: "Greenhouse busca ofrecer una solución tecnológica avanzada dirigidada a la industria champiñonera del Perú."
    },
    team: {
      title: "Acerca de nosotros",
      description: "Integradis busca ofrecer soluciones tecnológicas avanzadas en Peru."
    },
    carouselTitle: "Miembros",
    members: [
      {
        name: "Andrés Leiva",
        description: "Soy un estudiante de ingeniería de software que disfruta trabajar dentro del ecosistema React, Nest js y Rust.",
        githubUrl: "https://github.com/aleiva17",
        linkedinUrl: "https://www.linkedin.com/in/aleiva17/"
      },
      {
        name: "Nicolás Espinoza",
        description: "Estudio ingeniería del software en la UPC desde 2021, por lo que me considero una persona creativa e imaginativa.",
        githubUrl: "https://github.com/EspinozaNaer",
        linkedinUrl: "https://www.linkedin.com/in/nicol%C3%A1s-espinoza-394b84225/"
      },
      {
        name: "Andrés Soto",
        description: "Soy un estudiante de ingeniería de software de la UPC capaz de trabajar bajo presión que disfruta generando soluciones utilizando la tecnología.",
        githubUrl: "https://github.com/asotito",
        linkedinUrl: "https://www.linkedin.com/in/andres-soto-0429a127b/"
      },
      {
        name: "Carlo Seminario",
        description: "Estoy cursando la carrera de ingeniería de software y me considero una persona responsable, perseverante y capaz de trabajar bajo presión.",
        githubUrl: "https://github.com/CarloLSG",
        linkedinUrl: "https://www.linkedin.com/in/carlo-luca-seminario/"
      },
      {
        name: "Alan Galavis",
        description: "Estudio ingeniería del software en la UPC y considero que soy organizada, perseverante y creativa.",
        githubUrl: "https://github.com/alanegd",
        linkedinUrl: "https://www.linkedin.com/in/alan-galavis/"
      }
    ]
  }
}