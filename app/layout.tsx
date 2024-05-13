import type { Metadata } from 'next';
import { Rubik } from "next/font/google";

import 'bootstrap/dist/css/bootstrap.css';
import './globals.css';
import 'boundless-commerce-components/dist/styles.css';
import 'boundless-checkout-react/dist/index.css';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import WrapperForCartContext from '@/components/wrapperForCartContext';
import {ReactNode} from 'react';
import Header from '@/components/header';
import CategoriesMenu from '@/components/categoriesMenu';
import Footer from '@/components/footer';

const play = Rubik({ 
  subsets: ["latin"], 
  display: 'swap', 
  weight: ['400', '700'], 
});

export const metadata: Metadata = {
  title: 'eco-K E-commerce',
  description: 'eco-k an e-commerce site build using Next.js 14',
  icons:{
    icon:['/favicon.ico?v=2'],
    apple:['/apple-touch-icon.png?var=2'],
    shortcut:['/apple-touch-icon.png'] 
  }
};


export default function RootLayout({children}: {children: ReactNode}) {
  return (
    <html lang="en">
      <body className={play.className}>
        <WrapperForCartContext>
          <>
            <Header />
            <CategoriesMenu />
            {children}
            <Footer />
          </>
        </WrapperForCartContext>
      </body>
    </html>
  );
}
