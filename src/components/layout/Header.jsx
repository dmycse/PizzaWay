import Link from "next/link";
import { navBar } from "@/data";

export default function Header() {
  return (
    <header className="w-full border-b fixed top-0 left-0 bg-white">
      <div className="wrapper flex justify-between items-center overflow-hidden">
        <Link href="/" className="text-primary font-semibold text-4xl">
          Pizza<span className="text-secondary">Way</span>
        </Link>
        <nav className="sm:flex items-center gap-8 text-gray-500 font-semibold text-2xl">
          {navBar.map(item => (
            <Link 
              key={item.id} 
              href={item.url}
              className="hover:text-orange-500"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <nav className="flex items-center gap-6 text-xl">
          <Link href="/login" className="text-gray-500 font-semibold hover:text-orange-500">
            Login
          </Link>
          <Link href="/signup" className="custom__btn">
            Sign Up
          </Link>
        </nav>
      </div>
    </header>
  )
}
