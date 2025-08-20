import Link from "next/link";
import NavMenu from "./NavMenu";


export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-gray-100 border-b border-gray-200" >
      <div className="
        w-full max-w-7xl mx-auto
        px-4 py-4 sm:px-6 sm:py-6 lg:px-8 lg:py-8
        flex flex-col sm:flex-row justify-between items-center
        gap-4 sm:gap-6"
      >
        <div className="flex gap-4 items-center">
          <Link href="/" className="font-extrabold text-2xl hover:scale-105 transition duration-300 ease-in-out font-geist-sans">Maksym Kostiv</Link>
          <span className="text-lg">Frontend Developer</span>
        </div>

        <NavMenu />
      </div>
    </header>

  );
}
