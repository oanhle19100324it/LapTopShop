import { Request, Response } from "express";
import { ProductSchema, TProductSchema } from "src/validation/product.schema";

const getAdminCreateProductPage = async (req: Request, res: Response) => {
  const errors: string[] = [];
  const oldInput = {
    name: "",
    price: "",
    detailDesc: "",
    shortDesc: "",
    quantity: "",
    factory: "",
    target: "",
  };

  return res.render("admin/products/create.ejs", {
    errors,
    oldInput,
  });
};

const postAdminCreateProductPage = async (req: Request, res: Response) => {
  const { name, price, detailDesc, shortDesc, factory, target } =
    req.body as TProductSchema;

  const validate = ProductSchema.safeParse(req.body);

  if (!validate.success) {
    const errorZod = validate.error.issues;
    const errors = errorZod?.map((item) => `${item.message} (${item.path[0]})`);
    const oldInput = { name, price, detailDesc, shortDesc, factory, target };

    return res.render("admin/products/create.ejs", {
      errors,
      oldInput,
    });
  }

  res.redirect("/admin/product");
};

export { getAdminCreateProductPage, postAdminCreateProductPage };
