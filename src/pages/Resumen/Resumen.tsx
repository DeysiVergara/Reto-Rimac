import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Stepper from "../Plans/components/Stepper";
import { useQuote } from "../../features/quote/QuoteContext";
import { useUser } from "../../features/user/useUser";

export default function Resumen() {
  const navigate = useNavigate();

  const { data: user, loading } = useUser();

  const { data } = useQuote();

  useEffect(() => {
    if (!data?.selectedPlan) navigate("/planes", { replace: true });
  }, [data?.selectedPlan, navigate]);

  const fullName = !loading && user ? `${user.name} ${user.lastName}` : "—";
  const dni = data?.docNumber ?? "—";
  const phone = data?.phone ?? "—";
  const planName = data?.selectedPlan?.name ?? "—";
  const planPrice = data?.selectedPlan
    ? `S/${data.selectedPlan.price} al mes`
    : "—";

  return (
    <div className='min-h-screen bg-[#F7F8FC] font-lato'>
      <Stepper current={2} />

      <div className='max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8'>
        <button
          onClick={() => navigate(-1)}
          className='flex items-center gap-2 text-[#3F3F8C] text-[14px] hover:underline'
        >
          <span className='inline-block h-5 w-5 rounded-full border border-current grid place-items-center'>
            ⟵
          </span>
          Volver
        </button>

        <h1 className='mt-4 text-[32px] font-extrabold text-[#0B0B0B]'>
          Resumen del seguro
        </h1>

        {/* Card */}
        <div className='mt-6 rounded-2xl bg-white shadow-[0_10px_30px_rgba(63,63,140,0.15)] border border-[#F0F2FF] p-6'>
          <p className='text-[11px] font-extrabold uppercase tracking-[0.2px] text-[#7C7EA3]'>
            Precios calculados para:
          </p>

          <div className='mt-2 flex items-center gap-2 text-[#0B0B0B]'>
            <span className='text-lg'>👤</span>
            <span className='font-extrabold'>{fullName}</span>
          </div>

          <hr className='my-4 border-t border-[#EDEFFC]' />

          <div className='space-y-1 text-[14px] text-[#0B0B0B]'>
            <p className='font-extrabold'>Responsable de pago</p>
            <p>DNI: {dni}</p>
            <p>Celular: {phone}</p>
          </div>

          <div className='mt-4 space-y-1 text-[14px] text-[#0B0B0B]'>
            <p className='font-extrabold'>Plan elegido</p>
            <p>{planName}</p>
            <p className='text-[12px] text-[#4B5563]'>
              Costo del Plan: {planPrice}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
