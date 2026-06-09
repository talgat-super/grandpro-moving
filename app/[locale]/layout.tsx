import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { NextIntlClientProvider } from 'next-intl'
import { getMessages } from 'next-intl/server'
import { ThemeProvider } from 'next-themes'
import Script from 'next/script'
import './globals.css'

export const metadata: Metadata = {
  title: 'GrandPro Moving Almaty | Премиальные переезды и логистические решения',
  description: 'Профессиональный квартирный, офисный и международный переезд в Алматы. 100% материальная ответственность, фиксированные цены без скрытых доплат.',
  keywords: 'переезд алматы, грузчики алматы, офисный переезд, квартирный переезд, такелаж, мувинг казахстан',
  openGraph: {
    title: 'GrandPro Moving Almaty | Логистика и переезды высшего класса',
    description: 'Высокотехнологичный мувинг для частных лиц и бизнеса. 100% материальная ответственность.',
    url: 'https://grandpro.kz',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GrandPro Moving Almaty',
    description: 'Высокотехнологичный мувинг для частных лиц и бизнеса.',
  },
}

const locales = ['ru', 'kz', 'en']

const schemaOrg = {
  '@context': 'https://schema.org',
  '@type': 'MovingCompany',
  name: 'GrandPro Moving Almaty',
  url: 'https://grandpro.kz',
  telephone: '+77001234567',
  priceRange: '$$',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'пр. Аль-Фараби, 77/7, БЦ Esentai Tower',
    addressLocality: 'Алматы',
    postalCode: '050040',
    addressCountry: 'KZ',
  },
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'],
    opens: '00:00',
    closes: '23:59',
  },
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  if (!locales.includes(locale)) notFound()

  const messages = await getMessages()

  return (
    <html lang={locale} suppressHydrationWarning>
      <head>
        <Script
          id="schema-org"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrg) }}
        />
      </head>
      <body>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          <NextIntlClientProvider messages={messages}>
            {children}
          </NextIntlClientProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
