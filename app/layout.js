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
  themeColor: "#f8fafc",
};

export const metadata = {
  title: "Buildroonix — Custom 3D Lithophane Lamps, IoT Prototypes & Business Software (India)",
  description:
    "Buildroonix is an integrated engineering studio in Varanasi, India crafting personalized 3D lithophane lamps, final-year student IoT prototypes, and role-based business software (Library OS, Gym OS).",
  keywords: [
    "3D lithophane lamps India",
    "custom 3D printing Varanasi",
    "Library Management System software",
    "Gym Management Software India",
    "student IoT projects BTech",
    "ESP32 embedded hardware prototypes",
    "Buildroonix",
  ],
  metadataBase: new URL("https://buildroonix.com"),
  alternates: {
    canonical: "https://buildroonix.com",
  },
  openGraph: {
    title: "Buildroonix — Custom 3D Lithophane Lamps, IoT Prototypes & Business Software (India)",
    description:
      "Crafting personalized 3D lithophane lamps, final-year student IoT prototypes, and role-based business software (Library OS, Gym OS). Based in Varanasi, delivering pan-India.",
    url: "https://buildroonix.com",
    siteName: "BUILDROONIX",
    images: [
      {
        url: "/assets/logo.png",
        width: 800,
        height: 600,
        alt: "Buildroonix Studio Logo",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
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
