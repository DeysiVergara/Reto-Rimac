type Props = { left: React.ReactNode; right: React.ReactNode };

export default function HeroLayout({ left, right }: Props) {
  return (
    <section className='max-w-7xl mx-[14%] px-4 py-10 grid lg:grid-cols-2'>
      <div className='pr-px'>{left}</div>
      <div className='px-[14%]'>{right}</div>
    </section>
  );
}
