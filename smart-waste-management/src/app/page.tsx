import Header from "../components/Header";
import Footer from "../components/Footer";
import Link from "next/link";


export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex flex-col items-center justify-center flex-grow text-center p-8">
        <h1 className="text-4xl font-bold mb-4">Welcome to Smart Waste Management</h1>
        <p className="text-lg text-gray-600 mb-6">
          Monitor waste levels, track bin locations, and ensure cleaner environments with our smart waste system.
        </p>
        <div className="flex gap-4">
          <Link href="/signup" className="bg-blue-500 text-white px-6 py-2 rounded-lg">Get Started</Link>
          <Link href="/login" className="bg-gray-700 text-white px-6 py-2 rounded-lg">Login</Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}
