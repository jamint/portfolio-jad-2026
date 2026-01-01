export default function About() {
  return (
    <section 
      id="about"
      className="relative min-h-screen flex items-center justify-center py-32 px-8"
      style={{
        background: 'linear-gradient(100.57deg, rgba(184, 203, 184, 1) 3.11%, rgba(226, 197, 139, 1) 31.42%, rgba(194, 206, 156, 1) 63.50%, rgba(126, 219, 220, 1) 97.47%)'
      }}
    >
      <div className="container mx-auto max-w-5xl px-4">
        <p className="text-3xl lg:text-6xl font-light text-[#1f1f1f] text-center leading-tight tracking-tight font-spectral">
          I build <span className="font-semibold">thoughtful</span> web experiences where{' '}
          <span className="font-semibold">engineering rigor</span> meets{' '}
          <span className="font-semibold">interaction</span> and{' '}
          <span className="font-semibold">experimentation</span>.
        </p>
      </div>
    </section>
  );
}

