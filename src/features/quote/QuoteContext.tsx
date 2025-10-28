// src/features/quote/QuoteContext.tsx
import { createContext, useContext, useEffect, useMemo, useState } from "react";
import type { ReactNode } from "react";
import type { QuoteData } from "./quote.schema";

export type QuoteFor = "me" | "other";
export type SelectedPlan = { name: string; price: number };

// 🔸 Lo que realmente guardaremos en localStorage:
export type QuoteState = Partial<QuoteData> & {
  // paso 1 (form)
  quoteFor?: QuoteFor; // elección "para mí / para alguien más"
  selectedPlan?: SelectedPlan; // plan elegido en /planes
};

type QuoteCtx = {
  data: QuoteState;
  setData: (patch: Partial<QuoteState>) => void; // acepta cualquier sub-set
  reset: () => void;
};

const STORAGE_KEY = "app:quote";
const Ctx = createContext<QuoteCtx | null>(null);

export function QuoteProvider({ children }: { children: ReactNode }) {
  const [data, setDataState] = useState<QuoteState>(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      return raw ? JSON.parse(raw) : {};
    } catch {
      return {};
    }
  });

  const setData = (patch: Partial<QuoteState>) =>
    setDataState((prev) => ({ ...prev, ...patch }));

  const reset = () => setDataState({});

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    } catch {}
  }, [data]);

  const value = useMemo(() => ({ data, setData, reset }), [data]);

  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
}

export const useQuote = () => {
  const ctx = useContext(Ctx);
  if (!ctx) throw new Error("useQuote debe usarse dentro de <QuoteProvider>");
  return ctx;
};
