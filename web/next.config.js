const createNextIntlPlugin = require('next-intl/plugin');
const { withContentlayer } = require('next-contentlayer');

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,
  swcMinify: true,
  experimental: {
    optimizeCss: true,
    optimizePackageImports: [
      '@nextui-org/react',
      '@nextui-org/button',
      '@nextui-org/modal',
      '@nextui-org/card',
      '@nextui-org/input',
      '@nextui-org/navbar',
      '@nextui-org/link',
      '@nextui-org/switch',
      '@nextui-org/spinner',
      '@nextui-org/progress'
    ],
    scrollRestoration: true
  }
};

module.exports = withContentlayer(withNextIntl(nextConfig));
