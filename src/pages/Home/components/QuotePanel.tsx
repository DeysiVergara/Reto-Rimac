import ProductBadge from "./ProductBadge";
import QuoteForm from "../components/QuoteForm";

export default function QuotePanel() {
  return (
    <div className='max-w-xl'>
      <ProductBadge text='Seguro Salud Flexible' />
      <h1 className='mt-4 font-bold text-[32px] text-[#03050F] leading-8 '>
        Creado para ti y tu familia
      </h1>

      <p className='mt-3 font-semibold text-[14px] text-[#03050F] leading-5 tracking-[0.2px]'>
        Tú eliges cuánto pagar. Ingresa tus datos, cotiza y recibe nuestra
        asesoría. 100% online.
      </p>

      <QuoteForm />
    </div>
  );
}
