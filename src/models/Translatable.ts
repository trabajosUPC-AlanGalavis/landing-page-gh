
export interface Translatable<T> {
  en: T;
  es: T;
}

export type Language = keyof Translatable<any>;