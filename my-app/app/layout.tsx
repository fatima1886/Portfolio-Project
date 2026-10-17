// import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google";
// import Header from "./components/header";
// import "./globals.css";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

// export const metadata: Metadata = {
//   title: "Fatima | Frontend Developer & Next.js Specialist",
//   description: "Portfolio of Fatima Noor, a Frontend Developer specialized in React, Next.js, and TypeScript. Building fast, production-ready web applications.",
//   keywords: ["Frontend Developer", "Next.js Developer", "TypeScript Engineer", "React Developer", "Web Portfolio"],
// };


// export default function RootLayout({ children }: LayoutProps<"/">) {
//   return (
//     <html
//       lang="en"  data-scroll-behavior="smooth"
//       className={`${geistSans.variable} ${geistMono.variable} h-full antialiased scroll-smooth`}    >
//       <body className="min-h-full flex flex-col bg-[#0B1020]">
//         <Header/>
//         {children}
        
//       </body>
//     </html>
//   );
// }











import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Outfit } from "next/font/google"; 
import Header from "./components/header";
import "./globals.css";
import { isFavicon } from "next/dist/lib/metadata/metadata-resolution-primitives";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit", // The keyword mapping for your stylesheet
  subsets: ["latin"],
  display: "swap",
});
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Fatima | Frontend Developer & Next.js Specialist",
  description: "Portfolio of Fatima Noor, a Frontend Developer specialized in React, Next.js, and TypeScript. Building fast, production-ready web applications.",
  keywords: ["Frontend Developer", "Next.js Developer", "TypeScript Engineer", "React Developer", "Web Portfolio"],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${geistSans.variable} ${geistMono.variable} ${outfit.variable} h-full antialiased scroll-smooth`}
    >
      {/* 🛠️ FIX: Added font-sans to default the text to your premium Geist typography */}
      <body className="min-h-full flex flex-col bg-[#0B1020] font-sans text-slate-100">
        <Header />
        {children}
      </body>
    </html>
  );
}

