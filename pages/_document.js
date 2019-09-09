import Document, { Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <html lang="en-IN">
        <Head>
          <meta charSet="utf-8" />
          <meta content="IE=edge,chrome=1" httpEquiv="X-UA-Compatible" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta content="text/html; charset=UTF-8" httpEquiv="Content-Type" />
          <meta
            httpEquiv="Cache-Control"
            content="no-cache, no-store, must-revalidate"
          />
          <meta httpEquiv="Pragma" content="no-cache" />
          <meta httpEquiv="Expires" content="0" />
          <meta name="fragment" content="!" />
          <link
            async
            defer
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/antd/3.8.4/antd.min.css"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
          <noscript>This site need Javsscript to work correctly!</noscript>
        </body>
      </html>
    );
  }
}

export default MyDocument;
