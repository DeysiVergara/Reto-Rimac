import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  QuoteSchema,
  type QuoteData,
} from "../../../features/quote/quote.schema";
import { useQuote } from "../../../features/quote/QuoteContext";
import { useNavigate } from "react-router-dom";

export default function QuoteForm() {
  const navigate = useNavigate();
  const { data, setData } = useQuote();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    watch,
    trigger,
  } = useForm<QuoteData>({
    resolver: zodResolver(QuoteSchema),
    defaultValues: {
      /* ... */
    },
    mode: "onChange", // <- clave para limpiar el error al marcar
  });

  const privacyChecked = watch("privacy");
  const commsChecked = watch("comms");

  const onSubmit = async (values: QuoteData) => {
    setData(values);
    navigate("/planes");
  };

  const onlyDigits = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.target.value = e.target.value.replace(/\D+/g, "");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className='mt-6 space-y-3'>
      {/* Tipo y número de documento */}
      <div className='grid grid-cols-3 gap-3'>
        {/* Tipo */}
        <div className='col-span-1'>
          <select
            {...register("docType")}
            className={`w-full rounded-md border p-3 text-[16px] leading-5 font-normal tracking-[0.1px] ${
              errors.docType ? "border-red-500" : "border-gray-300"
            }`}
          >
            <option value='DNI'>DNI</option>
            <option value='RUC'>RUC</option>
          </select>
          {errors.docType && (
            <p className='mt-1 text-[12px] text-red-600'>
              {errors.docType.message}
            </p>
          )}
        </div>

        {/* Número */}
        <div className='col-span-2'>
          <input
            {...register("docNumber")}
            onInput={onlyDigits}
            placeholder='Nro. de documento'
            className={`w-full rounded-md border p-3 text-[16px] leading-5 font-normal tracking-[0.1px] ${
              errors.docNumber ? "border-red-500" : "border-gray-300"
            }`}
          />
          {errors.docNumber && (
            <p className='mt-1 text-[12px] text-red-600'>
              {errors.docNumber.message}
            </p>
          )}
        </div>
      </div>

      {/* Celular */}
      <div>
        <input
          {...register("phone")}
          onInput={onlyDigits}
          placeholder='Celular'
          className={`w-full rounded-md border p-3 text-[16px] leading-5 font-normal tracking-[0.1px] ${
            errors.phone ? "border-red-500" : "border-gray-300"
          }`}
        />
        {errors.phone && (
          <p className='mt-1 text-[12px] text-red-600'>
            {errors.phone.message}
          </p>
        )}
      </div>
      <div className='space-y-3'>
        <label
          className={`flex items-center gap-2 cursor-pointer select-none transition-colors text-[12px] leading-5 tracking-[0.1px] font-normal
      ${!privacyChecked && errors.privacy ? "text-red-600" : "text-[#0A0A0A]"}
    `}
        >
          <input
            type='checkbox'
            {...register("privacy", { onChange: () => trigger("privacy") })}
            className='sr-only peer' // el input sigue siendo accesible y clickeable
          />
          {/* Caja visual */}
          <span
            className={`
        h-4 w-4 rounded-[4px] border-2 grid place-items-center transition-colors
        ${
          privacyChecked
            ? "bg-[#03050F] border-[#03050F]"
            : errors.privacy
            ? "border-red-600 bg-transparent"
            : "border-gray-400 bg-white"
        }
      `}
          >
            {/* Check blanco al estar marcado */}
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className={`h-3 w-3 text-white transition-opacity duration-150 ${
                privacyChecked ? "opacity-100" : "opacity-0"
              }`}
              viewBox='0 0 20 20'
              fill='currentColor'
            >
              <path
                fillRule='evenodd'
                d='M16.707 5.293a1 1 0 010 1.414l-7.364 7.364a1 1 0 01-1.414 0L3.293 9.414a1 1 0 111.414-1.414l3.222 3.222 6.657-6.657a1 1 0 011.414 0z'
                clipRule='evenodd'
              />
            </svg>
          </span>
          <span>Acepto la Política de Privacidad</span>
        </label>

        {/* COMUNICACIONES */}
        <label
          className={`flex items-center gap-2 cursor-pointer select-none transition-colors text-[12px] leading-5 tracking-[0.1px] font-normal
      ${!commsChecked && errors.comms ? "text-red-600" : "text-[#0A0A0A]"}
    `}
        >
          <input
            type='checkbox'
            {...register("comms", { onChange: () => trigger("comms") })}
            className='sr-only peer'
          />
          <span
            className={`
        h-4 w-4 rounded-[4px] border-2 grid place-items-center transition-colors
        ${
          commsChecked
            ? "bg-[#03050F] border-[#03050F]"
            : errors.comms
            ? "border-red-600 bg-transparent"
            : "border-gray-400 bg-white"
        }
      `}
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className={`h-3 w-3 text-white transition-opacity duration-150 ${
                commsChecked ? "opacity-100" : "opacity-0"
              }`}
              viewBox='0 0 20 20'
              fill='currentColor'
            >
              <path
                fillRule='evenodd'
                d='M16.707 5.293a1 1 0 010 1.414l-7.364 7.364a1 1 0 01-1.414 0L3.293 9.414a1 1 0 111.414-1.414l3.222 3.222 6.657-6.657a1 1 0 011.414 0z'
                clipRule='evenodd'
              />
            </svg>
          </span>
          <span>Acepto la Política de Comunicaciones Comerciales</span>
        </label>
      </div>

      <p className='text-[12px] leading-5 font-semibold tracking-[0.1px] text-[#0A0A0A]'>
        Aplican Términos y Condiciones.
      </p>

      <button
        type='submit'
        disabled={isSubmitting}
        className='mt-2 rounded-full bg-[#03050F] text-white px-6 py-3 font-bold text-[14px] leading-[20px] tracking-[0.2px] hover:bg-[#10122B] disabled:opacity-60'
      >
        {isSubmitting ? "Procesando..." : "Cotiza aquí"}
      </button>
    </form>
  );
}
