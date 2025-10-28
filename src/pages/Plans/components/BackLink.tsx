import { useNavigate } from "react-router-dom";

export default function BackLink() {
  const navigate = useNavigate();
  return (
    <button
      onClick={() => navigate(-1)}
      className='flex items-center gap-2 text-[#3F3F8C] text-[14px] hover:underline'
    >
      <span className='inline-block h-5 w-5 rounded-full border border-current grid place-items-center'>
        ⟵
      </span>
      Volver
    </button>
  );
}
