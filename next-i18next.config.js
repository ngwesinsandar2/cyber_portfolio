const LanguageDetector = require('i18next-browser-languagedetector').default;
const HttpBackend = require('i18next-http-backend/cjs');
// const ChainedBackend = require('i18next-chained-backend').default;
// const LocalStorageBackend = require('i18next-localstorage-backend').default;
const isBrowser = typeof window !== 'undefined';

/** @type {import('next-i18next').UserConfig} */
module.exports = {
  debug: process.env.MODE === 'Development',
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'mm'],
  },
  ns: ['common', 'validation'],
  defaultNs: 'common',
//   backend: {
//     backendOptions: [
//       {
//         expirationTime: 60 * 60 * 1000, // 1 hour
//       },
//     ],
//     backends: isBrowser ? [LocalStorageBackend, HttpBackend] : [],
//   },
  load: 'languageOnly',
  localePath: isBrowser
    ? '/locales'
    : require('path').resolve('./public/locales'),
  use: isBrowser ? [LanguageDetector] : [],
  order: ['localStorage'],
  partialBundledLanguages: isBrowser && true,
};
