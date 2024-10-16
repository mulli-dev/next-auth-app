import "./globals.css";
import Header from "@/components/Header";
import { ClerkProvider, ClerkLoaded, ClerkLoading } from "@clerk/nextjs";
import Loader from "@/components/Loader";
import { Carlito } from "next/font/google";
import Footer from "@/components/Footer";

// Initialize Carlito font
const carlito_init = Carlito({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-carlito",
});

export const metadata = {
  title: "Next auth App",
  description: "Next auth with clerk and mongodb",
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
          </ClerkLoaded>
          <Footer />
        </body>
      </html>
    </ClerkProvider>
  );
}
