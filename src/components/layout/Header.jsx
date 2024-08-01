import Link from "next/link";
import { navBar } from "@/data";

export default function Header() {
  return (
    <header className="border-b sticky top-0 bg-white">
      <div className="wrapper flex justify-between items-center overflow-hidden">
        <Link href="/" className="text-primary font-semibold text-3xl">
          Pizza<span className="text-secondary">Way</span>
        </Link>
        <nav className="sm:flex items-center gap-8 text-gray-500 font-semibold">
          {navBar.map(item => (
            <Link key={item.id} href={item.url}>{item.title}</Link>
          ))}
          <Link href="" className="custom__btn">
            Login
          </Link>
        </nav>
      </div>
    </header>
  )
}
