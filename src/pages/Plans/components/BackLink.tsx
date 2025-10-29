import { useNavigate } from "react-router-dom";

export default function BackLink() {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate(-1)}
      className='flex items-center gap-2 text-[#4F4FFF] text-[14px] font-semibold hover:underline transition'
    >
      <span className='h-5 w-5 rounded-full border border-[#4F4FFF] grid place-items-center'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 20 20'
          fill='currentColor'
          className='h-3.5 w-3.5'
        >
          <path
            fillRule='evenodd'
            d='M12.707 15.707a1 1 0 01-1.414 0l-5-5a1 1 0 010-1.414l5-5a1 1 0 011.414 1.414L8.414 10l4.293 4.293a1 1 0 010 1.414z'
            clipRule='evenodd'
          />
        </svg>
      </span>
      Volver
    </button>
  );
}
