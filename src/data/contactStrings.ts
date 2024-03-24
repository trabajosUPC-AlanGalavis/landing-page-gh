import type {Translatable} from "../models/Translatable.ts";
import type {FormData} from "../models/FormData.ts";

interface ContactData {
  formTitle: string;
  description: string;
  name: FormData;
  email: FormData;
  message: FormData;
  submitBtn: string;
}

export const contactStrings: Translatable<ContactData> = {
  en: {
    formTitle: "Contact",
    description: "Do you need to contact us? Please fill in the following form",
    name: {
      label: "Your name",
      placeholder: "Name"
    },
    email: {
      label: "Your email",
      placeholder: "example@greenhouse.com"
    },
    message: {
      label: "Message",
      placeholder: "Write your message here"
    },
    submitBtn: "Submit"
  },
  es: {
    formTitle: "Contacto",
    description: "¿Necesitas ponerte en contacto con nosotros? Por favor, rellena el siguiente formulario",
    name: {
      label: "Tu nombre",
      placeholder: "Nombre"
    },
    email: {
      label: "Tu correo",
      placeholder: "ejemplo@greenhouse.com"
    },
    message: {
      label: "Tu mensaje",
      placeholder: "Escribe tu mensaje aquí"
    },
    submitBtn: "Enviar"
  }
}