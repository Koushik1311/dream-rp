import { NavItems } from "@/constants/nav-item";
import Link from "next/link";

export default function NavBar() {
  return (
    <header className="sticky top-0 z-50 bg-white border-b py-3">
      <nav className="container flex items-center justify-between">
        <ul className="flex items-center justify-center gap-8">
          {/* Logo or brand name */}
          {/* <Logo /> */}

          {/* Nav links */}
          <h1>DreamRP</h1>
          <ul></ul>
          {NavItems.map((item, index) => (
            <li key={index}>
              <Link href={item.uri} className="font-medium hover:text-color1">
                {item.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* dashboard | account | portal | login/signup */}
        <Link
          href="/register"
          className="font-medium border border-stone-900 bg-stone-900 py-1 px-6 rounded-full text-white"
        >
          Sign Up
        </Link>
      </nav>
    </header>
  );
}
