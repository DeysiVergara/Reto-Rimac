type Props = {
  name: string;
  price: number;
  description: string[];
  recommended?: boolean;
  icon?: React.ReactNode;
  onSelect?: () => void;
};

export default function PlanCard({
  name,
  price,
  description,
  recommended,
  icon,
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
      {/* Badge */}
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
        <h3 className='text-[20px] leading-6 font-extrabold text-[#0B0B0B]'>
          {name}
        </h3>
        <div className='ml-4 shrink-0 h-8 w-8 grid place-items-center'>
          {icon ?? <span className='text-2xl'>🏠</span>}
        </div>
      </div>

      <div className='mt-3 text-left'>
        <p className='text-[12px] uppercase font-extrabold tracking-[0.2px] text-[#6E6FA7]'>
          Costo del plan
        </p>
        <p className='mt-1 text-[20px] leading-6 font-extrabold text-[#0B0B0B]'>
          S/{price} <span className='font-bold text-[#0B0B0B]'>al mes</span>
        </p>
      </div>

      <hr className='my-4 border-t border-[#EDEFFC]' />

      <ul className='space-y-3 text-[14px] leading-6 text-[#0B1F3B] list-disc pl-5 marker:text-[#0B1F8F] flex-1'>
        {description.map((line, i) => (
          <li key={i}>{line}</li>
        ))}
      </ul>

      <button
        onClick={onSelect}
        className='
          mt-6 w-full rounded-full
          bg-[#FF3B5C] hover:bg-[#e93553]
          text-white font-extrabold text-[14px] leading-5 tracking-[0.2px]
          py-3
        '
      >
        Seleccionar Plan
      </button>
    </div>
  );
}
