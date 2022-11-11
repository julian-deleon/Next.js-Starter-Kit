import Document, { Head, Html, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(context) {
    const initialProps = await Document.getInitialProps(context);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang={this.props.locale}>
        <Head>
            <meta name="description" content="Get help hiring the right developer for your project with Dev Lounge."/>
            <link rel="icon" href='coding-svgrepo-com.svg' type="image/svg+xml"/>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;