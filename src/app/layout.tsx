import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/c/global/Header';
import Footer from '@/components/global/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: "Mickey D's: Burgers, Fries & More. Quality Ingredients.",
  description:
    "McDonalds.com is your hub for everything McDonald's. Find out more about our menu items and promotions today!",
  keywords: `McDonalds, Mickey D's Burgers, Fries`,
  // openGraph: {
  //     title: "McDonald's: Burgers, Fries & More. Quality Ingredients.",
  //     description: "McDonalds.com is your hub for everything McDonald's. Find out more about our menu items and promotions today!",
  //     images: {
  //       url: '/M192x.png',
  //         width: 192,
  //         height: 192,
  //     },
  // },
  // twitter: {
  //     title: "McDonald's: Burgers, Fries & More. Quality Ingredients.",
  //     description: "McDonalds.com is your hub for everything McDonald's. Find out more about our menu items and promotions today!",
  //     creator: '@DigitalAlchemyst',

  //     images: {
  //       url: '/M192x.png',
  //     },
  //   },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={`${inter.className} scrollbar-hide`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
