import Nav from '@/components/Nav';
import Hero from '@/components/Hero';
import About from '@/components/About';

export default function Home() {
  return (
    <main className="relative bg-[#fdf8f6]">
      <Nav />
      <Hero />
      <About />
    </main>
  );
}

