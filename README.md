# Bike Lounge 

![bike-lounge-collage](https://user-images.githubusercontent.com/77114985/208198497-99ccb656-70f5-4d99-8328-cc74d4a138d9.png)

Click this [link](https://next-js-starter-kit-topaz.vercel.app/) to view my live website deployed with Vercel!

My Webpage displays different motorcycle categories and helps you choose your next ride!

## Next.js Webpage (*Styled with Tailwind CSS*)

This project is a starting point for learing how to use components with NEXT.js. I am using Tailwind CSS as a styling solution in this starter kit, but there are other options available. Check out the link below:

[LogRocket - The best styling options for Next.js](https://blog.logrocket.com/best-styling-options-nextjs/)

## Pre-flight Checklist
1. Install Tailwind CSS - [How to install](https://tailwindcss.com/docs/installation)
2. Add configuration code to *_app.js*, *_document.js*, and *next.config.js* files as shown below.
----
### _app.js
```javascript
import '../styles/global.css'

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
```

 ### _document.js file
This file enables NEXT.js to render styles on the server and keep your styles in sync.

 ```jsx
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

 ```

 ### next.config.js
 ```javascript
i18n: {
    locales: ['en'],
    defaultLocale: 'en',
  },
 ```
