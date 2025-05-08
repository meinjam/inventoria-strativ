import type { Metadata } from 'next';
import { Nunito } from 'next/font/google';
import '@/assets/css/style.css';
import Navbar from '@/components/Navbar.Component';
import Footer from '@/components/Footer.Component';
import { Toaster } from 'react-hot-toast';

const nunito = Nunito({
  variable: '--font-nunito',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
});

export const metadata: Metadata = {
  title: 'Inventoria - Product Inventory',
  description: 'Product Inventory application using Next.js, TypeScript, Tailwind CSS and etc',
};

type RootLayoutProps = {
  children: React.ReactNode;
};

function RootLayout({ children }: Readonly<RootLayoutProps>) {
  return (
    <html lang='en'>
      <body className={`${nunito.className} leading-[22px] antialiased`}>
        <Navbar />
        {children}
        <Footer />
        <Toaster position='top-right' toastOptions={{ duration: 3000 }} />
      </body>
    </html>
  );
}

export default RootLayout;
