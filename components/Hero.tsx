import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative h-[100dvh] flex items-center justify-center overflow-hidden">
      {/* Background Gradient with Mask */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(251deg, #30CFD0 -15.86%, #330867 111.27%)',
          WebkitMaskImage: `url('/images/hero-bg.svg')`,
          maskImage: `url('/images/hero-bg.svg')`,
          WebkitMaskSize: 'cover',
          maskSize: 'cover',
          WebkitMaskPosition: 'center',
          maskPosition: 'center',
          WebkitMaskRepeat: 'no-repeat',
          maskRepeat: 'no-repeat',
        }}
      />

      {/* Content Container */}
      <div className="relative z-10 container flex flex-col lg:flex-row items-center w-full max-w-[85%] pt-32 pb-40" style={{ gap: 0 }}>
        {/* Left Side - Text */}
        <div className="hero-left mb-8 lg:mb-0">
          <h1 className="text-display-hero text-white">
            Front-end Engineer
            <br />
            & Creative Technologist
          </h1>
        </div>

        {/* Right Side - Character */}
        <div className="hero-right flex justify-center items-center pt-8 lg:pt-0">
          <div className="character-container relative flex flex-col items-center">
            <div className="relative aspect-square">
              <Image
                src="/images/characters-07-04.png"
                alt="3D Character"
                fill
                className="object-contain"
                priority
              />
            </div>
            {/* Ellipses under character */}
            <div className="ellipse-container relative mt-[-60px]">
              <Image
                src="/images/ellipse-4.svg"
                alt=""
                width={690}
                height={27}
                className="opacity-60 w-full"
                style={{ aspectRatio: '690/27' }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Floor */}
      <div className="absolute bottom-0 left-0 right-0 h-32">
        <div className="relative w-full h-full">
          <Image
            src="/images/hero-floor.svg"
            alt=""
            fill
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}

