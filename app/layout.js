// import { Providers } from 'components/providers';
import './globals.css';
import { Inter, Poppins } from 'next/font/google';
import Navbar from '@/components/navbar';
import { Footer } from '@/components/footer';
import { Providers } from '@/components/providers';
import ChatBotIcon from '@/components/ChatBotIcon';


const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const poppins = Poppins({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-poppins'
});

export const metadata = {
  title: 'Hiren Khut | Software Developer',
  description: 'Portfolio of Hiren Khut, an Software developer specializing in Generative AI, Agentic AI, LLMs, and cloud-based AI solutions.',
};

export default function RootLayout({
  children,
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="../public/favicon_ico.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content="React, Angular, Node JS, Nest JS, Web Development, Portfolio, Cloud" />
        <meta name="author" content="Hiren Khut" />
        <meta property="og:title" content={metadata.title} />
        <meta property="og:description" content={metadata.description} />
        {/* <meta property="og:image" content="/og-image.png" /> */}
        <meta property="og:url" content="https://apihirenkhut.me" />
        {/* <meta property="og:type" content="website" /> */}
        <meta property="og:site_name" content="Hiren Khut" />
      </head>
      <body className={`${inter.variable} ${poppins.variable} font-sans`}>
        <Providers>
          <div className="flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-1 pt-16">{children}</main>
            <ChatBotIcon />
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}