"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Header = () => {
  const pathname = usePathname();

  return (
    <header className="bg-gray-900 text-white p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">Smart Waste Management</h1>
      <nav>
        <ul className="flex gap-4">
          <li>
            <Link href="/" className={`hover:underline ${pathname === "/" ? "text-blue-400" : ""}`}>Home</Link>
          </li>
          <li>
            <Link href="/login" className={`hover:underline ${pathname === "/login" ? "text-blue-400" : ""}`}>Login</Link>
          </li>
          <li>
            <Link href="/signup" className={`hover:underline ${pathname === "/signup" ? "text-blue-400" : ""}`}>Sign Up</Link>
          </li>
          <li>
            <Link href="/dashboard" className={`hover:underline ${pathname === "/dashboard" ? "text-blue-400" : ""}`}>Dashboard</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
