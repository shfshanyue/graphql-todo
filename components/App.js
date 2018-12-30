import Head from 'next/head'
import Header from './Header'
import Footer from './Footer'

export default ({ children, title='', description='' }) => (
  <div>
    <style jsx global>{`
      * {
        font-family: Menlo, Monaco, 'Lucida Console', 'Liberation Mono',
          'DejaVu Sans Mono', 'Bitstream Vera Sans Mono', 'Courier New',
          monospace, serif;
      }
      body {
        margin: 0;
        background-color: #f6f6f6;
        color: rgba(0,0,0,0.8);
        font-size: 16px;
      }
      a {
        text-decoration: none;
      }
      a.active,
      a:hover {
      }
      p {
        font-size: 16px;
        line-height: 1.8em;
        margin: .8em 0;
      }
      .ant-skeleton-paragraph {
        padding: 0; 
      }
      .ant-input-search {
        width: 280px; 
      }
      article {
        margin: 0 auto;
        max-width: 650px;
      }
      button {
        align-items: center;
        background-color: #22bad9;
        border: 0;
        color: white;
        display: flex;
        padding: 5px 7px;
      }
      button:active {
        background-color: #1b9db7;
        transition: background-color 0.3s;
      }
      button:focus {
        outline: none;
      }

      .container {
        margin: 0 auto;
        padding: 0 15px;
      }

      .highlight {
        color: #f60; 
      }

      main {
        padding-top: 73px; 
      }

      @media (max-width: 575px) {
        aside {
          display: none; 
        }
        .container {
          padding: 0; 
        }
        ul {
          padding-left: 20px; 
        }
        main {
          padding-top: 54px; 
        }
        .ant-input-search {
          width: 200px; 
        }
      }

      @media (min-width: 576px) {
        .container {
          max-width: 540px;
        }
      }

      @media (min-width: 768px) {
        .container {
          max-width: 720px;
        }
      }

      @media (min-width: 992px) {
        .container {
          max-width: 980px;
        }
      }
    `}</style>
    <Head>
      <title>{ `${title} - 诗词学习网` }</title>
      <meta charSet="utf-8" />
      <meta name="description" content={description} />
      <meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1" />
      <meta name="google-site-verification" content="2H9Cp-hVZdcskG17TqEvZp8zOzY2WA1rX8-m2q2YHLQ" />
    </Head>
    <Header />
    <main>{ children }</main>
    <Footer />
  </div>
)
