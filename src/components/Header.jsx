import Link from "next/link";
import Image from "next/image";
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

export default function Header() {
  return (
    //<header className="shadow-lg bg-gradient-to-r from-blue-300 to-purple-400">
    <header className="shadow-lg bg-gradient-to-r from-white to-white">
      <div className="flex items-center justify-between max-w-6xl p-3 mx-auto">
        {/* logo */}

        <Link href="/" className="text-2xl font-extrabold cursor-pointer group">
          <img
            src="https://i0.wp.com/worldfair-project.eu/wp-content/uploads/2022/10/kalro-logo.webp?fit=598%2C422&ssl=1"
            alt="KALRO Logo"
            className="w-auto h-10 drop-shadow-md group-hover:opacity-80"
          />
        </Link>

        {/* add a navigation menu */}
        <nav>
          <ul className="flex gap-4">
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <SignedIn>
              <UserButton />
            </SignedIn>
            <SignedOut>
              <SignInButton />
            </SignedOut>
          </ul>
        </nav>
      </div>
    </header>
  );
}
