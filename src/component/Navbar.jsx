import { Link } from "wouter";

const links = [
  { to: "/", name: "Home" },
  { to: "/login", name: "Login" },
  { to: "/register", name: "Register" },
  { to: "/settings", name: "Settings" },
  { to: "/search", name: "Search" },
];

export default function Navbar() {
  return (
    <nav className="flex justify-between w-full p-4 bg-red-300">
      <Link href="/">
        <h1 className="cursor-pointer font-normal text-2xl">COMPANY_LOGO</h1>
      </Link>
      <div>
        {links.map((link) => {
          return (
            <Link href={link.to} key={link.to}>
              <a className="mx-2">{link.name}</a>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
