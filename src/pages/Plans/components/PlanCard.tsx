type Props = {
  name: string;
  price: number;
  description: string[];
  recommended?: boolean;
  originalPrice?: number;
  src: string;
  onSelect?: () => void;
};

export default function PlanCard({
  name,
  price,
  description,
  recommended,
  originalPrice,
  src,
  onSelect,
}: Props) {
  return (
    <div
      className={`
        relative rounded-2xl bg-white p-6 transition
        border shadow-sm border-[#E6E9F5] hover:shadow-md
        flex flex-col h-full
      `}
    >
      {recommended && (
        <div className='-mx-6 mb-2 px-6 flex justify-start'>
          <span
            className='
              inline-block rounded-md bg-[#7DF0BA]
              text-[#141938] text-[12px] leading-[14px] font-bold tracking-[0.2px]
              px-3 py-[2px]
            '
          >
            Plan recomendado
          </span>
        </div>
      )}

      <div className='flex items-start justify-between'>
        <h3 className='text-[24px] leading-8 font-[900] text-[#141938] tracking-[0.2px]'>
          {name}
        </h3>
        <img
          className='ml-4 shrink-0 h-8 w-8 grid place-items-center'
          src={src}
        />
      </div>

      <div className='mt-3 text-left'>
        <p className='text-[12px] uppercase font-[900] tracking-[0.6px] text-[#7981B2] leading-[16px]'>
          Costo del plan
        </p>
        {typeof originalPrice === "number" && (
          <p className='-mb-1 text-[14px] font-[400] tracking-[0.2px] text-[#7981B2] leading-[20px]'>
            <span className='line-through'>S/{originalPrice}</span>
            <span className='ml-1 align-middle'>antes</span>
          </p>
        )}

        <p className='mt-1 text-[20px] text-[#141938] font-[900] leading-[28px] tracking-[0.2px]'>
          S/{price} <span className='font-bold text-[#0B0B0B]'>al mes</span>
        </p>
      </div>

      <hr className='my-4 border-t border-[#EDEFFC]' />

      <ul className='space-y-3 text-[16px] leading-[28px] text-[#141938] list-disc pl-5 marker:text-[#0B1F8F] flex-1 tracking-[0.1px]'>
        {description.map((line, i) => (
          <li key={i}>{line}</li>
        ))}
      </ul>

      <button
        onClick={onSelect}
        className='
          mt-6 w-full rounded-full
          bg-[#FF1C44] hover:bg-[#e93553]
          text-white font-extrabold text-[14px] leading-5 tracking-[0.2px]
          py-3
        '
      >
        Seleccionar Plan
      </button>
    </div>
  );
}
