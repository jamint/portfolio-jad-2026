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
      <div className="relative z-10 container mx-auto px-4 md:px-8 flex flex-col md:flex-row items-center justify-between w-full max-w-7xl pt-32 pb-40">
        {/* Left Side - Text */}
        <div className="flex-1 max-w-2xl mb-8 md:mb-0">
          <h1 className="spectral-h1  text-white">
            Front-end Engineer
            <br />
            & Creative Technologist
          </h1>
        </div>

        {/* Right Side - Character */}
        <div className="flex-1 flex justify-end items-start w-full md:w-auto pt-8 md:pt-0">
          <div className="relative flex flex-col items-center">
            <div className="relative w-[50%] sm:w-[45%] md:w-[40%] lg:w-[500px] xl:w-[717px] max-w-[717px] aspect-square">
              <Image
                src="/images/characters-07-04.png"
                alt="3D Character"
                fill
                className="object-contain"
                priority
              />
            </div>
            {/* Ellipses under character */}
            <div className="relative mt-[-60px]">
              <Image
                src="/images/ellipse-4.svg"
                alt=""
                width={690}
                height={27}
                className="opacity-60 w-full max-w-[690px]"
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

