// app/layout.tsx
import { fonts } from './font'
import { Providers } from './providers'

export default function RootLayout({
  children,
}) {
  return (
    <html lang='en' className={fonts.rubik.variable}>
      <link href='https://fonts.googleapis.com/css?family=Rubik' rel='stylesheet'></link>
      <title>Church of Christ, Gbagi Ibadan Youth Lectureship</title>
      <meta property="og:title" content={'Church of CHrist, Gbagi Ibadan Youth Lectureship'} key="title" />
      <body  >

        <Providers>

          {children}
        </Providers>
      </body>
    </html>
  )
}