export default {
    useNextSeoProps() {
      return {
        titleTemplate: '%s – ZKON Network',
        defaultTitle: 'Documentation',
        description: 'Provable Data Records',
        openGraph: {
          type: 'website',
          locale: 'en_US',
          url: 'https://www.zkon.xyz/',
          site_name: 'ZKON Network',
        },
        twitter: {
          handle: '@zkon_network',
          site: '@zkon_network',
          cardType: 'summary_large_image',
        },
      };
    },
    head: (
      <>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:title" content="YourSite" />
        <meta property="og:description" content="Your site description" />
      </>
    ),
    dynamicTags: () => {
      const { asPath, defaultLocale, locale } = useRouter();
      const { frontMatter } = useConfig();
      const url = `https://www.yoursite.com${defaultLocale === locale ? asPath : `/${locale}${asPath}`}`;
  
      return (
        <>
          <meta property="og:url" content={url} />
          <meta property="og:title" content={frontMatter.title || 'YourSite'} />
          <meta property="og:description" content={frontMatter.description || 'Your site description'} />
        </>
      );
    },
  };
  