import Head from 'next/head';

const config: DocsThemeConfig = {
  logo: <span>ZKON Network</span>,
  project: {
    link: 'https://github.com/ZKON-Network',
  },
  chat: {
    link: 'https://discord.gg/AnmcW4HY2M',
  },
  docsRepositoryBase: 'https://github.com/ZKON-Network',
  footer: {
    text: 'ZKON Network 2024',
  },
  head: () => (
    <Head>
      <meta property="og:title" content="ZKON Network Documentation" />
      <meta property="og:description" content="Learn about ZKON Network" />
      <meta property="og:image" content="/path-to-your-image.png" />
      <meta property="og:url" content="https://zkon.network/docs" />
    </Head>
  ),
};

export default config;