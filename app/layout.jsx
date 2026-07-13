import { Poppins } from 'next/font/google';
import './globals.css';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-poppins',
  display: 'swap',
});

export const metadata = {
  metadataBase: new URL('https://fatafatdecor.com'),
  title: 'Fatafat Decor – Instant Décor. Beautiful Spaces. Effortless Celebrations.',
  description:
    'Fatafat Decor helps you preview celebration decor with AI and book fast room decoration services for birthdays, anniversaries, proposals, and more.',
  alternates: { canonical: '/' },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/logo-mark.png', type: 'image/png', sizes: '512x512' },
    ],
    shortcut: '/favicon.ico',
    apple: '/logo-mark.png',
  },
  openGraph: {
    type: 'website',
    siteName: 'Fatafat Decor',
    title: 'Fatafat Decor – Instant Décor. Beautiful Spaces. Effortless Celebrations.',
    description:
      'Preview celebration decor with AI and book fast room decoration services in Ranchi for birthdays, anniversaries, proposals, and more.',
    images: ['/logo-mark.png'],
    url: '/',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Fatafat Decor – Instant Décor. Beautiful Spaces.',
    description: 'Preview celebration decor with AI and book fast room decoration in Ranchi.',
    images: ['/logo-mark.png'],
  },
};

export const viewport = {
  themeColor: '#0d0d0d',
};

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Fatafat Decor',
  legalName: 'Fatafat Decor — A unit of Your Local Online',
  url: 'https://fatafatdecor.com/',
  logo: 'https://fatafatdecor.com/logo-mark.png',
  image: 'https://fatafatdecor.com/logo-mark.png',
  description:
    'Same-day room decoration service in Ranchi for birthdays, anniversaries, proposals and surprise celebrations, with AI decor previews before setup.',
  telephone: '+91-62047-11205',
  contactPoint: [
    {
      '@type': 'ContactPoint',
      telephone: '+91-62047-11205',
      contactType: 'customer service',
      areaServed: 'IN',
      availableLanguage: ['en', 'hi'],
    },
    {
      '@type': 'ContactPoint',
      telephone: '+91-80022-66606',
      contactType: 'customer service',
      areaServed: 'IN',
      availableLanguage: ['en', 'hi'],
    },
  ],
  parentOrganization: {
    '@type': 'Organization',
    name: 'Your Local Online',
  },
  address: {
    '@type': 'PostalAddress',
    streetAddress:
      'YLO Workspace, 101, 1st floor, Surendra Singh compound, Anantham Apartment, Kokar Chowk, Kokar',
    addressLocality: 'Ranchi',
    addressRegion: 'Jharkhand',
    postalCode: '834001',
    addressCountry: 'IN',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={poppins.variable}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        {children}
      </body>
    </html>
  );
}
