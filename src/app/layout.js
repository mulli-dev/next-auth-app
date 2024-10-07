import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";

export const metadata = {
  title: "Next auth App",
  description: " Next auth with clerk and mongodb",
};

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
