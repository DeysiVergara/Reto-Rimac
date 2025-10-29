type Props = { left: React.ReactNode; right: React.ReactNode };

export default function HeroLayout({ left, right }: Props) {
  return (
    <section className='max-w-7xl mx-auto px-6 sm:px-8 lg:px-[18%] py-10 lg:py-14 grid lg:grid-cols-2 gap-10 lg:gap-14'>
      <div className='hidden lg:block'>{left}</div>

      {/* Panel de la derecha (en mobile ocupa todo) */}
      <div>{right}</div>
    </section>
  );
}
