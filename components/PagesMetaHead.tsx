import Head from 'next/head';

function PagesMetaHead({ 
  title = 'EVOP (Easy Virtualization Of Products) Tech',
  keywords = 'EVOP TECH | Easy Virtualization Of Products | Software House | Software Company | Startup',
  description = 'EVOP Tech is Software Company that serve website or application for your startup, where it has lot of good benefits for the user. We Offering Cyber Security Assistant in other hands..',
  published = '2025-02-01T00:00:00Z'
}) {
  return (
    <Head>
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1"
      />
      <meta name="keywords" content={keywords} />
      <meta name="description" content={description} />
      <meta name="author" content="evop tech" />
      <meta name="published_time" content={published} />
      <meta name="updated_time" content={published} />
      
      <meta name="robots" content="index, follow" />
      <meta name="googlebot" content="index, follow" />
      <meta name="bingbot" content="index, follow" />
      <meta name="apple-mobile-web-app-title" content="evop tech" />
      <meta name="application-name" content="evop tech" />
      <meta name="msapplication-TileColor" content="#000000" />
      <meta name="theme-color" content="#000000" />
      <meta name="og:locale" content="en_US" />
      
      <meta name="article:author" content="evop tech" />
      <meta name="article:published" content={published} />
      <meta name="article:updated" content={published} />
      <meta name="og:published_time" content={published} />
      <meta name="og:updated_time" content={published} />
      <meta name="og:site_name" content="evop tech" />
      
      <meta name="og:title" content={title} />
      <meta name="og:description" content={description} />
      <meta name="og:url" content="https://evop.tech" />
      <meta name="og:type" content="website" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title}/>
      <meta name="twitter:description" content={description} />
      <meta name="twitter:url" content="https://evop.tech" />
      
      <meta charSet="utf-8" />
      <link rel="icon" href="/favicon.ico" />
      <title>{title}</title>
      <script
        dangerouslySetInnerHTML={{
          __html: `
            var _paq = window._paq = window._paq || [];
            _paq.push(["setDocumentTitle", document.domain + "/" + document.title]);
            _paq.push(['trackPageView']);
            _paq.push(['enableLinkTracking']);
            (function() {
              var u="https://dis25y.stackhero-network.com/";
              _paq.push(['setTrackerUrl', u+'matomo.php']);
              _paq.push(['setSiteId', '1']);
              var d=document, g=d.createElement('script'), s=d.getElementsByTagName('script')[0];
              g.async=true; g.src=u+'matomo.js'; s.parentNode.insertBefore(g,s);
            })();
          `,
        }}
      />
    </Head>
  );
}

export default PagesMetaHead;

