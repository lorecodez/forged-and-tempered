import type { Metadata } from "next";
import { Inter, Newsreader, Source_Sans_3} from "next/font/google";
import "./globals.css";
import { Suspense, lazy } from "react";
import { sourceMapsEnabled } from "process";

const Head = lazy(() => import('@/app/components/Head').then(module => {
    return {default: module.default}
  })
);

const Foot = lazy(() => import('@/app/components/Foot').then(module => {
    return {default: module.default}
  })
);

const inter = Inter({ subsets: ["latin"] });

const newsreader = Newsreader({
  subsets: ["latin"],
  weight: ['200','300','400','500','600','700','800'],
  style: ['normal', 'italic']
});

const sourceSans3 = Source_Sans_3({
  subsets: ["latin"],
  weight: ['200','300','400','500','600','700','800'],
  style: ['normal', 'italic']
});

export const metadata: Metadata = {
  title: "Forged & Tempered",
  description: "Hand crafted jewelry",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`bg-white m-0 w-full h-full flex flex-col items-center justify-center ${inter.className} ${newsreader.className} font-newsreader overflow-x-hidden over`}>
        <header className=" bg-transparent w-full h-fit">
          <Suspense fallback={<p>Loading...</p>}>
            <Head/>
          </Suspense>
        </header>
        <main className="h-full border-b">
          {children}
        </main>
        <footer className="w-screen h-fit bg-white">
          <Suspense fallback={<p>Loading...</p>}>
            <Foot/>
          </Suspense>
        </footer>
      </body>
    </html>
  );
}
