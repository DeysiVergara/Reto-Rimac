import HeroLayout from "./components/HeroLayout";
import HeroImage from "./components/HeroImage";
import QuotePanel from "./components/QuotePanel";

export default function Home() {
  return (
    <div className='relative'>
      <HeroLayout
        left={<HeroImage src='/Family.png' alt='Familia sonriendo' />}
        right={<QuotePanel />}
      />
    </div>
  );
}
