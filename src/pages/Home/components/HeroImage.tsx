type Props = { src: string; alt: string };

export default function HeroImage({ src, alt }: Props) {
  return (
    <div className='rounded-2xl overflow-hidden shadow bg-hero-gradient'>
      <img src={src} alt={alt} className='w-full h-auto' loading='lazy' />
    </div>
  );
}
