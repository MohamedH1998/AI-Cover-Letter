import Document, { Html, Head, Main, NextScript } from "next/document"

import React from "react"

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta name="twitter:card" content="summary_large_image" />
          <meta
            name="twitter:title"
            property="og:title"
            content="Free Cover Letter Generator | Covered"
          />
                    <meta
            name="name"
            content="Free Cover Letter Generator | Covered"
          />
          
          <meta name="google-site-verification" content="DcOECbkXwZCHzcJF8VX61aS9oiNbspLNsuqLFLwumLE" />
                    <link
            rel="icon"
            href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🤖</text></svg>"
          />
          <meta
            name="twitter:description"
            content="If you're looking for a hassle-free way to create a cover letter, look no further than our AI cover letter service! With our easy-to-use online platform, you'll be able to create a personalized cover letter in minutes, without having to worry about formatting or grammar mistakes."
          />
                    <meta
            name="description" property="og:description"
            content="If you're looking for a hassle-free way to create a cover letter, look no further than our AI cover letter service! With our easy-to-use online platform, you'll be able to create a personalized cover letter in minutes, without having to worry about formatting or grammar mistakes."
          />
          <meta
            name="twitter:image"
            content="https://res.cloudinary.com/dw9t4raq4/image/upload/v1668977051/Covered_cup7vq.png"
          />
                    <meta
            name="image" property="og:image"
            content="https://res.cloudinary.com/dw9t4raq4/image/upload/v1668977051/Covered_cup7vq.png"
          />
          <meta name="author" content="Mohamed Hassan"/>
          <link rel="icon" type="image/x-icon" href="/favicon/favicon.ico" />
          <link
            rel="shortcut icon"
            type="image/x-icon"
            href="/favicon/favicon.ico?"
          />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/favicon/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/favicon/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/favicon/favicon-16x16.png"
          />
          <link rel="manifest" href="/favicon/site.webmanifest" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
