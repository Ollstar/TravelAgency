import HeadMetadata from '@/components/HeadMetadata'
import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <HeadMetadata />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
