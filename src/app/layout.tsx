import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "./Components/navbar";
import Footer from "./Components/footer";
import { Great_Vibes, Nosifer, Satisfy, Oleo_Script } from "next/font/google";


const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});
const greatVibes = Great_Vibes({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-great-vibes",
  display: "swap",
});

const nosifer = Nosifer({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-nosifer",
  display: "swap",
});

const satisfy = Satisfy({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-satisfy",
  display: "swap",
});

const oleoScript = Oleo_Script({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-oleo-script",
  display: "swap",
});


export const metadata: Metadata = {
  title: "Portfolio",
  description: "My Personal Portfolio",
    icons: {
    icon: "/favicon.ico", // Path inside public folder
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en"
    >


      <body
        className={`${geistSans.variable} ${geistMono.variable} ${greatVibes.variable} ${nosifer.variable} ${satisfy.variable} ${oleoScript.variable} antialiased`}
      >
           
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
