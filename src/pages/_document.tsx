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
          <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon_180.png"/>
          <link rel="icon" type="image/png" sizes="192x192" href="/icon-192.png"/>
          <link rel="icon" type="image/png" sizes="128x128" href="/icon-128.png"/>
          <link rel="icon" type="image/png" sizes="32x32" href="/icon-32.png"/>
          <link rel="icon" type="image/png" sizes="16x16" href="/icon-16.png"/>
          <meta name="theme-color" content="#FD593D" />
          <meta property="og:type" content="website" key="type"/>
          <meta property="og:image" content="/og_image.jpg" />
          <meta property="og:url" content="https://starter.automaticengineering.com" />
          <meta property="og:description" content={'Automatic Engineering is a digital product design and engineering agency based in Hong Kong. We partner with ambitious companies to create websites, digital experiences, and native apps that unlock your next stage of growth.'}  key="description"/>
          <meta property="twitter:title" content={'@automaticengineering'} key="twittertitle" />
          <meta property="twitter:image" content="/og_image.jpg" />
          <meta property="twitter:image:alt" content="Automatic Engineering is a digital product design and engineering agency based in Hong Kong. We partner with ambitious companies to create websites, digital experiences, and native apps that unlock your next stage of growth." />
          <meta property="twitter:description" content='Automatic Engineering is a digital product design and engineering agency based in Hong Kong. We partner with ambitious companies to create websites, digital experiences, and native apps that unlock your next stage of growth.' key="twitterdescription" />
        </Head>
        <body className="bg-white text-black dark:bg-black dark:text-white">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
