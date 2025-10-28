import { useEffect, useState } from "react";
import { fetchPlans, type Plan } from "./plans.api";

export function usePlans(show: boolean) {
  const [plans, setPlans] = useState<Plan[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!show) return;
    setLoading(true);
    fetchPlans()
      .then(setPlans)
      .finally(() => setLoading(false));
  }, [show]);

  return { plans, loading };
}
