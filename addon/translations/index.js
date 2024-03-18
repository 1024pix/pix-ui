import { createIntl } from '@formatjs/intl';
import en from './en';
import fr from './fr';
import nl from './nl';

export function formatMessage(locale, message, values) {
  const intl = locales[locale] || locales.en;
  return intl.formatMessage({ id: message }, values);
}

const locales = {
  fr: createIntl({
    locale: 'fr',
    messages: flattenObject(fr),
  }),
  en: createIntl({
    locale: 'en',
    messages: flattenObject(en),
  }),
  nl: createIntl({
    locale: 'nl',
    messages: flattenObject(nl),
  }),
};

export function flattenObject(object) {
  const entries = Object.entries(object);

  const flatEntries = entries.flatMap(([key, value]) => {
    if (typeof value !== 'object') return [[key, value]];

    const childEntries = Object.entries(flattenObject(value));

    return childEntries.map(([childKey, childValue]) => [`${key}.${childKey}`, childValue]);
  });

  return Object.fromEntries(flatEntries);
}
