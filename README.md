# Bike Lounge 

>Click this [LINK](https://next-js-starter-kit-topaz.vercel.app/) to view my live website deployed with Vercel!

![category](https://user-images.githubusercontent.com/77114985/208198673-a73ee960-94be-4849-b126-a462915fb3ab.png)

![single-item](https://user-images.githubusercontent.com/77114985/208198686-21395af8-8f72-4268-99cf-c0a8cf7d19f9.png)

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
