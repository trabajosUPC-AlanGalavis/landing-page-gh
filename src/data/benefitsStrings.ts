import type {Translatable} from "../models/Translatable.ts";
import type {Benefit} from "../models/Benefit.ts";

interface BenefitData {
  title: string;
  subtitle: string;
  features: Array<Benefit>;
}

export const benefitsStrings: Translatable<BenefitData> = {
  en: {
    title: "Our benefits",
    subtitle: "Explore what Greenhouse has to offer",
    features: [
      {
        title: "Process log",
        description: "Records the progress and status of the processes.",
        imageUrl: "writing.webp"
      },
      {
        title: "Documentation",
        description: "Store all your information quickly and safely.",
        imageUrl: "documentation.webp"
      },
      {
        title: "Remote monitoring",
        description: "Receive complete information about the performance of your processes.",
        imageUrl: "remote-monitoring.webp"
      },
      {
        title: "Statistics analysis",
        description: "Analyze and process the information collected.",
        imageUrl: "stats.webp"
      },
      {
        title: "Easy understanding",
        description: "Anyone is capable of understanding how our application works.",
        imageUrl: "easy.webp"
      },
      {
        title: "Flexible plans",
        description: "You can choose the plan that best suits your needs.",
        imageUrl: "money.webp"
      },
    ]
  },
  es: {
    title: "Nuestros beneficios",
    subtitle: "Explora todo lo que Greenhouse tiene para ofrecer",
    features: [
      {
        title: "Registro de procesos",
        description: "Registra el avance y estado de los procesos.",
        imageUrl: "writing.webp"
      },
      {
        title: "Documentación",
        description: "Almacena toda tu información de manera rápida y segura.",
        imageUrl: "documentation.webp"
      },
      {
        title: "Supervisión a distancia",
        description: "Recibe información completa sobre el rendimiento de tus procesos.",
        imageUrl: "remote-monitoring.webp"
      },
      {
        title: "Análisis de estadísticas",
        description: "Analiza y procesa la información recolectada.",
        imageUrl: "stats.webp"
      },
      {
        title: "Fácil entendimiento",
        description: "Cualquier persona es capaz de entender como funciona nuestra aplicación.",
        imageUrl: "easy.webp"
      },
      {
        title: "Planes flexibles",
        description: "Puedes elegir el plan que mejor se acomode a tus necesidades.",
        imageUrl: "money.webp"
      },
    ]
  }
}