// app/layout.tsx
import { fonts } from './font'
import { Providers } from './providers'

export default function RootLayout({
  children,
}) {
  return (
    <html lang='en' className={fonts.rubik.variable}>
      <link href='https://fonts.googleapis.com/css?family=Rubik' rel='stylesheet'></link>
      
      <body  >
        
        <Providers>
       
          {children}
        </Providers>
      </body>
    </html>
  )
}