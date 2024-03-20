// app/layout.tsx
import Header from "./component/header";
import { fonts } from "./font";
import { Providers } from "./providers";
import './globals.css'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="A one-day Youth Bible Lectureship event focused on maintaining godly disposition in today’s digital and social media world."
        />
        <meta
          name="keywords"
          content="coc gbagi, Church of Christ, Youth Bible Lectureship, Christian Youth, Godly Disposition, Digital, Social Media, 2Tim 2:22, Proverbs 4:23, 1 Corinthians 6:18"
        />
        <meta
          name="author"
          content="Church of Christ Gbagi, Ibadan, Oyo State."
        />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://cocgbagi.com" />
        <meta
          property="og:title"
          content="Church of Christ Gbagi, Ibadan- Youth Bible Lectureship"
        />
        <meta
          property="og:description"
          content="A one-day event focused on maintaining godly disposition in today’s digital and social media world."
        />
        <meta
          property="og:image"
          content="https://api.cocgbagi.com/images/youth_lectureship4by3.jpg"
        />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://cocgbagi.com" />
        <meta
          property="twitter:title"
          content="Church of Christ Gbagi, Ibadan- Youth Bible Lectureship"
        />
        <meta
          property="twitter:description"
          content="A one-day event focused on maintaining godly disposition in today’s digital and social media world."
        />
        <meta
          property="twitter:image"
          content="https://api.cocgbagi.com/images/youth_lectureship4by3.jpg"
        />

        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Rubik"
        />
        <title>Church of Christ, Gbagi Ibadan Youth Lectureship</title>
      </head>
      <body className={fonts.rubik.variable}>
        <Providers>
          <Header />
          {children}
        </Providers>
      </body>
    </html>
  );
}
