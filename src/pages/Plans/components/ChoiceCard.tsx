type Props = {
  title: string;
  desc: string;
  selected: boolean;
  onSelect: () => void;
  icon?: React.ReactNode;
};

export default function ChoiceCard({
  title,
  desc,
  selected,
  onSelect,
  icon,
}: Props) {
  return (
    <button
      type='button'
      onClick={onSelect}
      className={`text-left rounded-2xl p-6 bg-white shadow-sm border transition
        ${
          selected
            ? "border-[#3F3F8C] shadow-[0_6px_24px_rgba(63,63,140,0.2)]"
            : "border-transparent"
        }
      `}
    >
      <div className='flex items-start justify-between'>
        <div className='grid gap-2'>
          <div className='h-8 w-8'>{icon ?? "🛡️"}</div>
          <h3 className='text-[18px] font-semibold'> {title} </h3>
          <p className='text-[12px] text-[#6B7280] leading-5'>{desc}</p>
        </div>
        <span
          className={`h-5 w-5 rounded-full border grid place-items-center mt-1
            ${selected ? "border-[#3F3F8C]" : "border-gray-300"}
          `}
        >
          <span
            className={`h-3 w-3 rounded-full ${selected ? "bg-[#3F3F8C]" : ""}`}
          />
        </span>
      </div>
    </button>
  );
}
