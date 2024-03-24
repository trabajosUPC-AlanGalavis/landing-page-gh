import type {Translatable} from "../models/Translatable.ts";
import type {FAQItem} from "../models/Question.ts";

interface FAQData {
  title: string;
  subtitle: string;
  additionalSupport: string;
  questions: Array<FAQItem>;
}

export const faqStrings: Translatable<FAQData> = {
  en: {
    title: "Frequently asked questions",
    subtitle: "Get a better understanding of our product with the following frequently asked questions.",
    additionalSupport: "In case you need further support, send an email to support@greenhouse.com",
    questions: [
      {
        question: "Can I cancel my suscription?",
        answer: "Yes, you can can cancel your subscription at any time."
      },
      {
        question: "What payment methods do you accept?",
        answer: "We accept all type of cards."
      },
      {
        question: "Can I delete my account?",
        answer: "Yes, whenever you want. Just send an email to support@greenhouse.com"
      },
      {
        question: "How many employees can I register?",
        answer: "The number of employees will depend on the subscription type of your account."
      }
    ]
  },
  es: {
    title: "Preguntas frecuentes",
    subtitle: "Obtén una mejor noción sobre nuestro producto con las siguientes preguntas frecuentes.",
    additionalSupport: "En caso de requerir mayor soporte, envíe un mail a soporte@greenhouse.com",
    questions: [
      {
        question: "¿Puedo cancelar mi suscripción?",
        answer: "Sí, puedes cancelar tu suscripción en cualquier momento."
      },
      {
        question: "¿Qué métodos de pago aceptan?",
        answer: "Aceptamos todos los tipos de tarjetas como métodos de pago."
      },
      {
        question: "¿Puedo eliminar mi cuenta?",
        answer: "Sí, puedes cancelar tu cuenta en cualquier momento. Simplemente envía un correo a soporte@greenhouse.com"
      },
      {
        question: "¿Cuántos empleados puedo registrar?",
        answer: "La cantidad de empleados dependerá del tipo de suscripción que cuente tu cuenta."
      }
    ]
  }
}