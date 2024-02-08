import en from "../../public/locales/en/translation.json";
import mm from "../../public/locales/mm/translation.json";

export enum Locale {
  en = "en",
  mm = "mm",
}

export const DEFAULT_LOCALE = Locale.en;

export const translations = {
  [Locale.en]: en,
  [Locale.mm]: mm,
};

export type TranslationKey = keyof (typeof translations)[Locale];
