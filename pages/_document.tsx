import Document, { Head, Html, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  render() {
    const setThemeMode = `
        if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
          document.documentElement.classList.add('dark')
        } else {
          document.documentElement.classList.remove('dark')
        }
      `;

    return (
      <Html className='over-flow-x-hidden max-w-full dark:bg-black' lang='ko'>
        <Head />
        <body className='over-flow-x-hidden h-full max-w-full dark:bg-black dark:text-white'>
          <script dangerouslySetInnerHTML={{ __html: setThemeMode }} />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
