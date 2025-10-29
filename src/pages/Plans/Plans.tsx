import { useState, useMemo } from "react";
import { useUser } from "../../features/user/useUser";
import { usePlans } from "../../features/plans/usePlans";
import { useNavigate } from "react-router-dom";
import { useQuote } from ".././../features/quote/QuoteContext";
import { getAge } from "../../utils/getAge";
import ChoiceCard from "./components/ChoiceCard";
import PlanCard from "./components/PlanCard";

const DISCOUNT = 0.05;

export default function Plans() {
  const { data: user, loading } = useUser();
  const [selected, setSelected] = useState<"me" | "other" | null>(null);
  const { plans, loading: plansLoading } = usePlans(!!selected);

  const navigate = useNavigate();
  const { setData } = useQuote();

  const isOther = selected === "other";

  const userAge = useMemo(() => (user ? getAge(user.birthDay) : 0), [user]);
  const filteredPlans = useMemo(
    () => plans.filter((p) => userAge <= p.age),
    [plans, userAge]
  );

  const recommendedName = useMemo(() => {
    if (!filteredPlans.length) return undefined;
    const clinica = filteredPlans.find((p) => /cl[ií]nica/i.test(p.name));
    if (clinica) return clinica.name;
    return filteredPlans.slice().sort((a, b) => b.price - a.price)[0].name;
  }, [filteredPlans]);

  const pricedPlans = useMemo(() => {
    return filteredPlans.map((p) => {
      const priceFinal = isOther
        ? Number((p.price * (1 - DISCOUNT)).toFixed(2))
        : p.price;
      return {
        ...p,
        priceFinal,
        priceOriginal: isOther ? p.price : undefined,
      };
    });
  }, [filteredPlans, isOther]);

  const handleChoice = (who: "me" | "other") => {
    setSelected(who);
    setData({ quoteFor: who });
  };

  return (
    <div className='min-h-screen bg-[#F7F8FC] font-lato px-4 py-8'>
      <div className='max-w-5xl mx-auto text-center'>
        <h1 className='text-[28px] font-[700] text-[#0B0B0B] leading-[48px] tracking-[-0.6px] sm:px-40'>
          {loading
            ? "Cargando..."
            : `${user?.name ?? ""} ¿Para quién deseas cotizar?`}
        </h1>
        <p className='text-[#141938] font-[400] text-[16px] leading-5 tracking-[0.2px] mt-2'>
          Selecciona la opción que se ajuste más a tus necesidades.
        </p>

        <div className='mt-10 mb-10 grid grid-cols-1 md:grid-cols-2 gap-6 justify-center px-6 sm:px-10'>
          <ChoiceCard
            title='Para mí'
            desc='Cotiza tu seguro de salud y agrega familiares si así lo deseas.'
            selected={selected === "me"}
            onSelect={() => handleChoice("me")}
            src='/IcProtectionLight.png'
          />
          <ChoiceCard
            title='Para alguien más'
            desc='Realiza una cotización para uno de tus familiares o cualquier persona.'
            selected={selected === "other"}
            onSelect={() => handleChoice("other")}
            src='/IcAddUserLight.png'
          />
        </div>

        {selected && (
          <section className='mt-10'>
            <h2 className='text-[24px] font-bold text-[#0B0B0B] mb-6'>
              Planes disponibles
            </h2>
            {plansLoading ? (
              <p>Cargando planes...</p>
            ) : (
              <div className='grid grid-cols-1 lg:grid-cols-3 mt-10 mb-10 md:grid-cols-2 gap-6 justify-center px-6 sm:px-10'>
                {pricedPlans.map((plan) => (
                  <PlanCard
                    key={plan.name}
                    name={plan.name}
                    price={plan.priceFinal}
                    originalPrice={plan.priceOriginal}
                    description={plan.description}
                    recommended={plan.name === recommendedName}
                    src={
                      plan.name.includes("Clínica")
                        ? "/IcHospitalLight.png"
                        : "/IcHomeLight.png"
                    }
                    onSelect={() => {
                      setData({
                        selectedPlan: {
                          name: plan.name,
                          price: plan.priceFinal,
                        },
                      });
                      navigate("/resumen");
                    }}
                  />
                ))}
              </div>
            )}
          </section>
        )}
      </div>
    </div>
  );
}
