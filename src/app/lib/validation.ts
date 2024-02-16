import { z } from "zod";

export const PersonalInfoSchema = z.object({
  name: z.string().min(3),
  email: z.string().email(),
  phone: z.string().min(5).max(10),
});

export type PersonalInfoType = z.infer<typeof PersonalInfoSchema>;

export const SelectPlanSchema = z.object({
  arcadeField: z.boolean().optional(),
  advancedField: z.boolean().optional(),
  proField: z.boolean().optional(),
});

export type SelectPlanType = z.infer<typeof SelectPlanSchema>;
