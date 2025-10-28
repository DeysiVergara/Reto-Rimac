import { z } from "zod";

export const QuoteSchema = z.object({
  docType: z.enum(["DNI", "RUC"], {
    message: "Selecciona un tipo de documento",
  }),
  docNumber: z
    .string()
    .min(8, "Mínimo 8 caracteres")
    .max(12, "Máximo 12 caracteres"),
  phone: z.string().regex(/^\d{9}$/, "Ingresa 9 dígitos"),
  privacy: z.boolean().refine((val) => val === true, {
    message: "Requerido",
  }),
  comms: z.boolean().refine((val) => val === true, {
    message: "Requerido",
  }),
});

export type QuoteData = z.infer<typeof QuoteSchema>;
