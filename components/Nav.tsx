import Link from 'next/link';

export default function Nav() {
  return (
    <nav className="fixed top-4 left-4 right-4 z-50 flex items-center justify-between py-4">
      <div className="spectral-h1 font-extrabold text-white">
        Jad Mintun
      </div>
      <div className="flex items-center gap-4 md:gap-8">
        <Link href="#work" className="hidden md:block text-white text-base font-google-sans tracking-tight hover:opacity-80 transition-opacity">
          Work
        </Link>
        <Link href="#play" className="hidden md:block text-white text-base font-google-sans tracking-tight hover:opacity-80 transition-opacity">
          Play
        </Link>
        <Link href="#about" className="text-white text-base font-google-sans tracking-tight hover:opacity-80 transition-opacity">
          About
        </Link>
        <button className="bg-white/40 backdrop-blur-sm px-4 md:px-6 py-2 rounded-2xl text-white text-sm md:text-base font-google-sans tracking-tight hover:bg-white/50 transition-colors">
          Say Hi
        </button>
      </div>
    </nav>
  );
}

