import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
// import localFont from "next/font/local";

// const poppins = localFont({
//   src: [
//     { path: "/fonts/Poppins-Regular.ttf", weight: "400", style: "normal" },
//     { path: "/fonts/Poppins-Italic.ttf", weight: "400", style: "italic" },
//     { path: "/fonts/Poppins-Bold.ttf", weight: "700", style: "normal" },
//     { path: "/fonts/Poppins-BoldItalic.ttf", weight: "700", style: "italic" },
//     { path: "/fonts/Poppins-Light.ttf", weight: "300", style: "normal" },
//     { path: "/fonts/Poppins-LightItalic.ttf", weight: "300", style: "italic" },
//     { path: "/fonts/Poppins-Medium.ttf", weight: "500", style: "normal" },
//     { path: "/fonts/Poppins-MediumItalic.ttf", weight: "500", style: "italic" },
//     { path: "/fonts/Poppins-SemiBold.ttf", weight: "600", style: "normal" },
//     {
//       path: "/fonts/Poppins-SemiBoldItalic.ttf",
//       weight: "600",
//       style: "italic",
//     },
//     { path: "/fonts/Poppins-Black.ttf", weight: "900", style: "normal" },
//     { path: "/fonts/Poppins-BlackItalic.ttf", weight: "900", style: "italic" },
//     { path: "/fonts/Poppins-ExtraLight.ttf", weight: "200", style: "normal" },
//     {
//       path: "/fonts/Poppins-ExtraLightItalic.ttf",
//       weight: "200",
//       style: "italic",
//     },
//     { path: "/fonts/Poppins-Thin.ttf", weight: "100", style: "normal" },
//     { path: "/fonts/Poppins-ThinItalic.ttf", weight: "100", style: "italic" },
//   ],
//   variable: "--font-poppins",
//   display: "swap",
// });

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Giga City | Modern Urban Living & Premier Real Estate Development",
  description:
    "Explore Giga City, a state-of-the-art real estate project offering luxury residential and commercial spaces with world-class amenities, designed for modern urban living.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
