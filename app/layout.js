import { DM_Mono, DM_Sans, Syne } from "next/font/google";
import { QuoteProvider } from "@/components/QuoteContext";
import { MotionProvider } from "@/components/ScrollReveal";
import "./globals.css";

const syne = Syne({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-syne",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-dm-sans",
});

const dmMono = DM_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-dm-mono",
});

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#080c14",
};

export const metadata = {
  title: "BUILDROONIX — Integrated Technology, Software & Engineering Solutions",
  description:
    "BUILDROONIX is an integrated technology, software engineering, IoT, hardware engineering, and digital manufacturing company building custom software, enterprise systems, mobile apps, AI solutions, and connected prototypes.",
  icons: {
    icon: "/assets/logo.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${syne.variable} ${dmSans.variable} ${dmMono.variable}`}>
      <body>
        <MotionProvider>
          <QuoteProvider>
            {children}
          </QuoteProvider>
        </MotionProvider>
      </body>
    </html>
  );
}
