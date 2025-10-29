type Props = { src: string; alt: string };

export default function HeroImage({ src, alt }: Props) {
  return (
    <div>
      <div
        style={{
          backgroundImage: "url('/blur-asset-left.png')",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "left bottom",
          backgroundSize: "cover",
        }}
      ></div>
      <div className='rounded-2xl overflow-hidden shadow bg-hero- login__left'>
        <img src={src} alt={alt} className='w-[100%] h-auto' loading='lazy' />
      </div>
    </div>
  );
}
