type ProductBadgeProps = {
  text: string;
};

export default function ProductBadge({ text }: ProductBadgeProps) {
  return (
    <span
      className='
        inline-flex items-center justify-center font-bold text-[14px] leading-4 tracking-[0.4px]
        text-[#03050F]
        h-6 min-w-[172px] px-2 rounded
        bg-gradient-to-r from-[#00F4E2] to-[#00FF7F]
      '
    >
      {text}
    </span>
  );
}
