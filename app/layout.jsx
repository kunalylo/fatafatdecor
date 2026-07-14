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
  title: {
    default: 'Fatafat Decor – AI Party & Room Decoration in Ranchi',
    template: '%s · Fatafat Decor',
  },
  description:
    'Same-day party & room decoration in Ranchi for birthdays, anniversaries, proposals & surprises. Preview your décor with AI, then book a decorator in minutes.',
  applicationName: 'Fatafat Decor',
  keywords: [
    'room decoration Ranchi',
    'birthday decoration Ranchi',
    'anniversary decoration',
    'balloon decoration',
    'surprise room decor',
    'AI decoration preview',
    'party decorator near me',
    'Fatafat Decor',
  ],
  authors: [{ name: 'Fatafat Decor' }],
  creator: 'Fatafat Decor',
  publisher: 'Fatafat Decor',
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
    title: 'Fatafat Decor – AI Party & Room Decoration in Ranchi',
    description:
      'Preview your celebration décor with AI, then book a decorator for same-day setup in Ranchi — birthdays, anniversaries, proposals & surprises.',
    images: [
      { url: '/image2.jpg', width: 1200, height: 630, alt: 'Fatafat Decor room decoration' },
    ],
    url: '/',
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Fatafat Decor – AI Party & Room Decoration in Ranchi',
    description:
      'Preview your décor with AI, then book a decorator for same-day setup in Ranchi.',
    images: ['/image2.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large' },
  },
};

export const viewport = {
  themeColor: '#0d0d0d',
};

// Postal address reused across the Organization + LocalBusiness nodes.
const postalAddress = {
  '@type': 'PostalAddress',
  streetAddress:
    'YLO Workspace, 101, 1st floor, Surendra Singh compound, Anantham Apartment, Kokar Chowk, Kokar',
  addressLocality: 'Ranchi',
  addressRegion: 'Jharkhand',
  postalCode: '834001',
  addressCountry: 'IN',
};

// Official profiles Google can associate with the brand (helps the knowledge panel).
const sameAs = [
  'https://www.instagram.com/fatafatdecor',
  'https://apps.apple.com/us/app/fatafatdecor/id6763261185',
  'https://play.google.com/store/apps/details?id=in.co.ylo.fatafatdecor.twa',
];

// Single @graph so Google reads one connected entity (Organization ↔ WebSite ↔ LocalBusiness).
const structuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': 'https://fatafatdecor.com/#organization',
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
      parentOrganization: { '@type': 'Organization', name: 'Your Local Online' },
      address: postalAddress,
      sameAs,
    },
    {
      '@type': 'WebSite',
      '@id': 'https://fatafatdecor.com/#website',
      url: 'https://fatafatdecor.com/',
      name: 'Fatafat Decor',
      description:
        'Preview celebration decor with AI and book fast room decoration services in Ranchi.',
      publisher: { '@id': 'https://fatafatdecor.com/#organization' },
      inLanguage: 'en-IN',
    },
    {
      '@type': 'LocalBusiness',
      '@id': 'https://fatafatdecor.com/#business',
      name: 'Fatafat Decor',
      image: 'https://fatafatdecor.com/logo-mark.png',
      url: 'https://fatafatdecor.com/',
      telephone: '+91-62047-11205',
      priceRange: '₹₹',
      parentOrganization: { '@id': 'https://fatafatdecor.com/#organization' },
      address: postalAddress,
      areaServed: { '@type': 'City', name: 'Ranchi' },
      sameAs,
    },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={poppins.variable}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        {children}
      </body>
    </html>
  );
}
