import type { Metadata } from "next";
// import localFont from "next/font/local";
import {Poppins} from "next/font/google";
import "./globals.css";
import ResNav from "@/components/Home/Navbar/ResNav";
import Footer from '@/components/Home/Footer/Footer'

// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

const font = Poppins({
  weight:['100','200','300','400','500','600','700','800','900'],
  subsets:['latin'],
})

export const metadata: Metadata = {
  title: "KATEC Vancouver  | 벤쿠버 카텍",
  description: "KATEC Vancouver  | 벤쿠버 카텍",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${font.className}} antialiased`}
      >
        <ResNav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
