import { useState, useMemo } from "react";
import { useUser } from "../../features/user/useUser";
import { usePlans } from "../../features/plans/usePlans";
import { useNavigate } from "react-router-dom";
import { useQuote } from ".././../features/quote/QuoteContext";
import { getAge } from "../../utils/getAge";
import ChoiceCard from "./components/ChoiceCard";
import PlanCard from "./components/PlanCard";

export default function Plans() {
  const { data: user, loading } = useUser();
  const [selected, setSelected] = useState<"me" | "other" | null>(null);
  const { plans, loading: plansLoading } = usePlans(!!selected);

  // +++ NUEVO
  const navigate = useNavigate();
  const { setData } = useQuote();

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

  // +++ NUEVO: cuando el usuario elige “Para mí / Para alguien más”, persiste en Context
  const handleChoice = (who: "me" | "other") => {
    setSelected(who);
    setData({ quoteFor: who });
  };

  return (
    <div className='min-h-screen bg-[#F7F8FC] font-lato px-4 py-8'>
      <div className='max-w-5xl mx-auto text-center'>
        <h1 className='text-[32px] font-extrabold text-[#0B0B0B]'>
          {loading
            ? "Cargando..."
            : `${user?.name ?? ""} ¿Para quién deseas cotizar?`}
        </h1>
        <p className='text-[#6B7280] mt-2'>
          Selecciona la opción que se ajuste más a tus necesidades.
        </p>

        <div className='mt-8 grid grid-cols-1 md:grid-cols-2 gap-4 justify-center'>
          <ChoiceCard
            title='Para mí'
            desc='Cotiza tu seguro de salud y agrega familiares si así lo deseas.'
            selected={selected === "me"}
            onSelect={() => handleChoice("me")}
          />
          <ChoiceCard
            title='Para alguien más'
            desc='Realiza una cotización para uno de tus familiares o cualquier persona.'
            selected={selected === "other"}
            onSelect={() => handleChoice("other")}
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
              <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
                {filteredPlans.map((plan) => (
                  <PlanCard
                    key={plan.name}
                    {...plan}
                    recommended={plan.name === recommendedName}
                    // +++ NUEVO: al elegir plan -> persistir y navegar
                    onSelect={() => {
                      setData({
                        selectedPlan: { name: plan.name, price: plan.price },
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
