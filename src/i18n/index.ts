import { en } from "./en";
import { es } from "./es";
import type { Language } from "./types";

/** All copy for every supported language, keyed by locale. */
export const translations: Record<Language, typeof en> = { en, es };

export type Translations = typeof en;
export type { Language };
