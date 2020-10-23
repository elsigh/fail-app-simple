import '../styles/globals.css'
import Head from 'next/head'
import Link from 'next/link'

function MyApp({ Component, pageProps, err }) {
  return (
    <div className="container">
      <Head>
        <title>Next Fail App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="header">
        <h2>Sentry Simple Example 🚨</h2>
        <p>
          This example demonstrates how to record unhandled exceptions in your
          code with Sentry. There are several test pages below that result in
          various kinds of unhandled exceptions.
        </p>
        <p>
          <strong>Important:</strong> exceptions in development mode take a
          different path than in production. These tests should be run on a
          production build (i.e. 'next build').{' '}
          <a href="https://nextjs.org/docs/advanced-features/custom-error-page#customizing-the-error-page">
            Read more
          </a>
        </p>
      </header>

      <main className="main">
        {/*Workaround for https://github.com/vercel/next.js/issues/8592*/}
        <Component {...pageProps} err={err} />
      </main>

      <footer className="footer">
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className="logo" />
        </a>
      </footer>
    </div>
  )
}

export default MyApp
