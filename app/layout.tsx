import './globals.css'
import { Inter } from 'next/font/google'
import Script from 'next/script'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'John Crestani: Affiliate Marketing Expert & Course Creator',
  description: 'Learn affiliate marketing from John Crestani, a successful entrepreneur earning $500k+ monthly. Discover his Super Affiliate System, Internet Jetset course, and more.',
  keywords: 'john crestani, john crestani review, john crestani net worth, john crestani affiliate program, john crestani course, john crestani affiliate marketing, john crestani internet jetset, john crestani super affiliate system',
  icons: {
    icon: '/icon.svg',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <Script id="schema-script" type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "John Crestani",
              "url": "https://johncrestani.me",
              "sameAs": [
                "https://www.forbes.com/sites/jrose/2017/08/22/how-john-crestani-went-from-fired-to-earning-250-an-hour-with-affiliate-marketing/",
                "https://www.reddit.com/r/JohnCrestani/",
                "https://www.youtube.com/user/johncrestani"
              ],
              "jobTitle": "Affiliate Marketing Expert",
              "worksFor": {
                "@type": "Organization",
                "name": "Super Affiliate System"
              },
              "description": "John Crestani is a renowned affiliate marketing expert and course creator, known for his Super Affiliate System and Internet Jetset programs.",
              "mainEntityOfPage": {
                "@type": "WebPage",
                "@id": "https://johncrestani.me"
              }
            }
          `}
        </Script>
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
