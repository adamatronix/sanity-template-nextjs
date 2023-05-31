import Document, {Head, Html, Main, NextScript} from 'next/document'
import { ServerStyleSheet } from 'styled-components'

export default class MyDocument extends Document {

  static async getInitialProps(ctx:any) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App:any) => (props:any) =>
            sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }

  render(): JSX.Element {
    return (
      <Html lang="en">
        <Head>
          <link rel="apple-touch-icon" sizes="180x180" href="/Handl_Meta_01_appleicon_180.png"/>
          <link rel="icon" type="image/png" sizes="192x192" href="/Handl_Meta_01_png_192.png"/>
          <link rel="icon" type="image/png" sizes="128x128" href="/Handl_Meta_01_png_128.png"/>
          <link rel="icon" type="image/png" sizes="32x32" href="/Handl_Meta_01_png_32.png"/>
          <link rel="icon" type="image/png" sizes="16x16" href="/Handl_Meta_01_png_16.png"/>
          <meta name="theme-color" content="#F4E9D9" />
          <meta property="og:type" content="website" key="type"/>
          <meta property="og:image" content="/og_image.jpg" />
          <meta property="og:url" content="https://handl.media" />
          <meta property="og:description" content={'As a creative agency led by digitally empowered people, we pride ourselves on our ability to help brands connect audiences with engaging content. We focus on creating trending, up-to-date content optimised for the ever-changing media landscape.'}  key="description"/>
          <meta property="twitter:title" content={`Handl Media`} key="twittertitle" />
          <meta property="twitter:image" content="/og_image.jpg" />
          <meta property="twitter:image:alt" content="As a creative agency led by digitally empowered people, we pride ourselves on our ability to help brands connect audiences with engaging content. We focus on creating trending, up-to-date content optimised for the ever-changing media landscape." />
          <meta property="twitter:description" content='As a creative agency led by digitally empowered people, we pride ourselves on our ability to help brands connect audiences with engaging content. We focus on creating trending, up-to-date content optimised for the ever-changing media landscape.' key="twitterdescription" />
        </Head>
        <body className="bg-white text-black dark:bg-black dark:text-white">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
