import HeadMetadata from '@/components/HeadMetadata'
import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" />

      </Head>
      <HeadMetadata />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
