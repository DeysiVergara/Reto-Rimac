type Props = { left: React.ReactNode; right: React.ReactNode };

export default function HeroLayout({ left, right }: Props) {
  return (
    <section className='max-w-7xl mx-auto px-4 py-10 grid gap-10 lg:grid-cols-2'>
      <div>{left}</div>
      <div>{right}</div>
    </section>
  );
}
