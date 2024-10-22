import "./globals.css";
import dynamic from "next/dynamic";
import { ClerkProvider, ClerkLoaded, ClerkLoading } from "@clerk/nextjs";
import { Carlito } from "next/font/google";

// Lazy load Header and Footer components to reduce the initial bundle size
const Header = dynamic(() => import("@/components/Header"), { ssr: false });
const Footer = dynamic(() => import("@/components/Footer"), { ssr: false });
const Loader = dynamic(() => import("@/components/Loader"), { ssr: false });

// Initialize Carlito font
const carlito_init = Carlito({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-carlito",
});

export const metadata = {
  title: "Next Auth App",
  description: "Next auth with Clerk and MongoDB",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <head>
          {/* Meta tag for mobile responsiveness */}
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, maximum-scale=1"
          />
        </head>
        {/* Apply the Carlito font class to the body */}
        <body className={carlito_init.variable}>
          <ClerkLoading>
            <Loader />
          </ClerkLoading>
          <ClerkLoaded>
            <Header />
            <main>{children}</main>
            <Footer />
          </ClerkLoaded>
        </body>
      </html>
    </ClerkProvider>
  );
}
