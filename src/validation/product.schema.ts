import * as z from "zod";

export const ProductSchema = z.object({
  name: z
    .string()
    .trim()
    .min(1, "Vui lòng điền thông tin, không được để trống"),
  price: z
    .string()
    .transform((val) => (val === "" ? 0 : Number(val)))
    .refine((num) => num > 0, {
      message: "Số tiền tối thiểu là 1",
    }),
  detailDesc: z
    .string()
    .trim()
    .min(1, "Vui lòng điền thông tin, không được để trống"),
  shortDesc: z
    .string()
    .trim()
    .min(1, "Vui lòng điền thông tin, không được để trống"),
  quantity: z
    .string()
    .transform((val) => {
      const num = Number(val);
      return isNaN(num) ? 0 : num;
    })
    .refine((num) => num > 0, {
      message: "Số lượng tối thiểu là 1",
    }),
  factory: z
    .string()
    .trim()
    .min(1, "Vui lòng điền thông tin, không được để trống"),
  target: z
    .string()
    .trim()
    .min(1, "Vui lòng điền thông tin, không được để trống"),
});

export type TProductSchema = z.output<typeof ProductSchema>;
