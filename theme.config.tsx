import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

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
}

export default {
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta property="og:title" content="Documentation | ZKON Network" />
      <meta property="og:description" content="Provable Data Transfers. Verify to the world your Data Integrity." />
    </>
  )
}