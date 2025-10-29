import QuoteForm from "../components/QuoteForm";
import ProductBadge from "../components/ProductBadge";

export default function QuotePanel() {
  return (
    <div className='relative max-w-xl'>
      {/* Badge */}
      <ProductBadge text='Seguro Salud Flexible' />

      {/* Título + mini imagen */}
      <div className='mt-4 flex items-start justify-between'>
        <h1 className='font-lato text-[32px] leading-[36px] font-extrabold text-[#03050F] max-w-[70%]'>
          Creado para ti y tu familia
        </h1>

        {/* mini-foto SOLO en mobile */}
        <div className='lg:hidden ml-4'>
          <div className='rounded-2xl overflow-hidden shadow ring-1 ring-black/5'>
            <img
              src='/Family.png'
              alt='Familia'
              className='w-[120px] h-auto'
              loading='lazy'
            />
          </div>
        </div>
      </div>

      {/* divisor fino */}
      <hr className='mt-4 mb-3 border-t border-[#E6E8F2]' />

      <p className='text-[14px] leading-5 text-[#03050F] tracking-[0.2px]'>
        Tú eliges cuánto pagar. Ingresa tus datos, cotiza y recibe nuestra
        asesoría. 100% online.
      </p>

      {/* Form */}
      <div className='mt-4'>
        <QuoteForm />
      </div>
    </div>
  );
}
