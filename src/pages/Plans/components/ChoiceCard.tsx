type Props = {
  title: string;
  desc: string;
  selected: boolean;
  onSelect: () => void;
  src: string;
};

export default function ChoiceCard({
  title,
  desc,
  selected,
  onSelect,
  src,
}: Props) {
  return (
    <button
      type='button'
      onClick={onSelect}
      aria-pressed={selected}
      className={`relative text-left rounded-2xl bg-white transition flex flex-col justify-between h-[180px] w-full p-6
        ${
          selected
            ? "border-2 border-[#141938] shadow-[0_6px_24px_rgba(63,63,140,0.20)]"
            : "border border-transparent shadow-sm hover:border-[#E6E9F5]"
        }
      `}
    >
      <span
        className={` absolute top-3 right-3 grid place-items-center rounded-full
          ${
            selected
              ? "h-6 w-6 bg-[#389E0D] text-white ring-4 ring-white"
              : "h-6 w-6 bg-white border-2 border-gray-300"
          }
        `}
        aria-hidden='true'
      >
        {selected && (
          <svg
            viewBox='0 0 20 20'
            className='h-3.5 w-3.5'
            fill='none'
            stroke='currentColor'
            strokeWidth='3'
            strokeLinecap='round'
            strokeLinejoin='round'
          >
            <polyline points='4 10 8 14 16 6' />
          </svg>
        )}
      </span>

      <div className='flex items-start gap-3'>
        <div className='shrink-0'>
          <img className='h-8 w-8' src={src} alt='' />
        </div>

        <div className='grid gap-1'>
          <h3 className='text-[20px] font-[900] text-[#141938] leading-[28px] tracking-[-0.2px]'>
            {title}
          </h3>
          <p className='text-[12px] text-[#141938] font-[400] leading-5 tracking-[0.2px]'>
            {desc}
          </p>
        </div>
      </div>
    </button>
  );
}
