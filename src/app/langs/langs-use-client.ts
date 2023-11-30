"use client";

import { Locale, i18n } from "@app/config/i18n.config";

import langs from "./";

export const getLangsUseClient = (locale: Locale) => {
  return langs[locale] ?? langs[i18n.defaultLocale as Locale];
};
