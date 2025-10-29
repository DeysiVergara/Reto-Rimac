type StepperProps = { current: 1 | 2 };

export default function Stepper({ current }: StepperProps) {
  console.log(current);
  return (
    <div className='w-full bg-[#EEF0FF] text-[#141938] flex justify-center'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-12 flex items-center gap-4 text-sm'>
        <span className='flex items-center gap-2'>
          <span className='font-lato h-6 w-6 rounded-full bg-[#4F4FFF] text-white grid place-items-center text-xs font-bold text-[16px]  leading-6 tracking-[0.2px]'>
            1
          </span>
          Planes y coberturas
        </span>
        <span className='opacity-50'>···</span>
        <span className='flex items-center gap-2 opacity-60'>
          <span className='h-6 w-6 rounded-full border border-[#4F4FFF] grid place-items-center text-xs'>
            2
          </span>
          Resumen
        </span>
      </div>
    </div>
  );
}
