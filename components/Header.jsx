import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-slate-900 text-white p-6">
      <nav className="flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold">
          Laurus Studio
        </Link>

        <div className="flex gap-6">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
        </div>
      </nav>
    </header>
  );
}