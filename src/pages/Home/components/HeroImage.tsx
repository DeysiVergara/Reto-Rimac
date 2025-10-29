type Props = { src: string; alt: string };

export default function HeroImage({ src, alt }: Props) {
  return (
    <div className='rounded-2xl overflow-hidden shadow bg-white/60'>
      {/* mancha violeta de desktop detrás de la imagen */}
      <div
        style={{
          backgroundImage: "url('/blur-asset-left.png')",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "left bottom",
          backgroundSize: "cover",
        }}
      >
        <img src={src} alt={alt} className='w-full h-auto' loading='lazy' />
      </div>
    </div>
  );
}
