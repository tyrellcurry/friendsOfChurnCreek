import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
        <Head>
          {/* Netlify Widget */}
          <script async src="https://identity.netlify.com/v1/netlify-identity-widget.js" />
          <link rel="icon" href="/favicon.png" />
          <meta name="description" content="Friends of Churn Creek Protected Area Society" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        
        </Head>
        <body>
          <Main />
          <NextScript />
          <script dangerouslySetInnerHTML={{
            __html: `
              if (window.netlifyIdentity) {
                window.netlifyIdentity.on("init", user => {
                  if (!user) {
                    window.netlifyIdentity.on("login", () => {
                      document.location.href = "/admin/";
                    });
                  }
                });
              }
          `}}/>
        </body>
      </Html>
  )
}
