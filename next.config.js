const withNextra = require('nextra')({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.tsx',
})

module.exports = withNextra({
  async rewrites() {
    return [
      {
        source: '/documentation/:path*',
        destination: '/:path*', // could be '/docs/:path*' if your documentation is in a 'docs' directory
      },
    ];
  },
});