type StepperProps = { current: 1 | 2 };

export default function Stepper({ current }: StepperProps) {
  const step1Circle =
    current === 1
      ? "h-6 w-6 rounded-full bg-[#4F4FFF] text-white grid place-items-center text-xs font-bold"
      : "h-6 w-6 rounded-full border border-[#4F4FFF] text-[#4F4FFF] grid place-items-center text-xs font-bold";

  const step1Text = current === 1 ? "text-[#141938]" : "text-[#6E6FA7]";

  const step2Wrap =
    current === 2
      ? "flex items-center gap-2"
      : "flex items-center gap-2 opacity-60";

  const step2Circle =
    current === 2
      ? "h-6 w-6 rounded-full bg-[#4F4FFF] text-white grid place-items-center text-xs font-bold"
      : "h-6 w-6 rounded-full border border-[#4F4FFF] text-[#4F4FFF] grid place-items-center text-xs";

  return (
    <div className='w-full bg-[#EEF0FF] text-[#141938] flex justify-center'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-12 flex items-center gap-4 text-sm'>
        <span className={`flex items-center gap-2 ${step1Text}`}>
          <span className={step1Circle}>1</span>
          Planes y coberturas
        </span>

        <span className='opacity-50'>···</span>

        <span className={step2Wrap}>
          <span className={step2Circle}>2</span>
          <span className={current === 2 ? "text-[#141938]" : "text-[#6E6FA7]"}>
            Resumen
          </span>
        </span>
      </div>
    </div>
  );
}
