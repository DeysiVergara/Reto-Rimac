import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Stepper from "../Plans/components/Stepper";
import BackLink from "../Plans/components/BackLink";
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
        <BackLink />

        <h1 className='mt-4 text-[40px] font-[700] text-[#141938] leading-[48px] tracking-[-0.6px]'>
          Resumen del seguro
        </h1>

        <div className='mt-6 rounded-2xl bg-white shadow-[0_10px_30px_rgba(63,63,140,0.15)] border border-[#F0F2FF] p-6'>
          <p className='text-[10px] font-[900] uppercase tracking-[0.8px] text-[#141938] leading-[16px]'>
            Precios calculados para:
          </p>

          <div className='mt-2 flex items-center gap-2 text-[#0B0B0B]'>
            <span className='text-lg'>
              <img src='/ic_family.png' />
            </span>
            <span className='text-[20px] font-[700] tracking-[-0.2px] text-[#141938] leading-[28px]'>
              {fullName}
            </span>
          </div>

          <hr className='my-4 border-t border-[#EDEFFC]' />

          <div className='space-y-1 text-[14px] text-[#0B0B0B]'>
            <p className='text-[16px] font-[700] tracking-[0.2px] text-[#141938] leading-6'>
              Responsable de pago
            </p>
            <p className='text-[14px] font-[400] tracking-[0.1px] text-[#141938] leading-6'>
              DNI: {dni}
            </p>
            <p className='text-[14px] font-[400] tracking-[0.1px] text-[#141938] leading-6'>
              Celular: {phone}
            </p>
          </div>

          <div className='mt-4 space-y-1 text-[14px] text-[#0B0B0B]'>
            <p className='text-[16px] font-[700] tracking-[0.2px] text-[#141938] leading-6'>
              Plan elegido
            </p>
            <p className='text-[14px] font-[400] tracking-[0.1px] text-[#141938] leading-6'>
              {planName}
            </p>
            <p className='text-[14px] font-[400] tracking-[0.1px] text-[#141938] leading-6'>
              Costo del Plan: {planPrice}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
