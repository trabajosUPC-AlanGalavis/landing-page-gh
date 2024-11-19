import type {PricingPlan} from "../models/PricingPlan.ts";
import type {Translatable} from "../models/Translatable.ts";

interface PricingData {
  title: string;
  subtitle: string;
  plans: Array<PricingPlan>;
}

export const pricingStrings: Translatable<PricingData> = {
  en: {
    title: "Choose your plan",
    subtitle: "Choose according to your needs",
    plans: [
      {
        title: "Basic",
        monthlyPrice: "0",
        features: ["Register up to 5 employees.", "Record up to 365 monthly crops."]
      },
      {
        title: "Regular",
        monthlyPrice: "10",
        features: ["Register up to 15.", "Record up to unlimited crops."]
      },
      {
        title: "Premium",
        monthlyPrice: "20",
        features: ["Register unlimited employees.", "Record unlimited crops."]
      }
    ]
  },
  es: {
    title: "Elige tu plan",
    subtitle: "Escoge de acuerdo a tus necesidades",
    plans: [
      {
        title: "Básico",
        monthlyPrice: "12.90",
        features: ["Registra hasta 5 empleados.", "Registra hasta 30 cosechas al mes."]
      },
      {
        title: "Regular",
        monthlyPrice: "32.90",
        features: ["Registra hasta 30 empleados.", "Registra hasta 60 cosechas al mes."]
      },
      {
        title: "Premium",
        monthlyPrice: "64.90",
        features: ["Registros ilimitados de empleados.", "Registros ilimitados de cosechas."]
      }
    ]
  }
}