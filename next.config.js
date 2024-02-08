/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
    serverActions: true,
  },
  i18n: {
    locales: ["en", "fr", "es"],
    defaultLocale: "en",
  },
};

module.exports = nextConfig;
