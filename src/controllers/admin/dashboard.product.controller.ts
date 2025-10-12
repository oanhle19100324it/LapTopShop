import { Request, Response } from "express";
import { getAllProducts } from "services/Admin/product.services";

const getManageProductPage = async (req: Request, res: Response) => {
  const products = await getAllProducts();
  console.log(">>> products:", products);

  res.render("admin/products/show.ejs", {
    products,
  });
};

export { getManageProductPage };
