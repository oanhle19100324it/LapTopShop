import { Request, Response } from "express";
import { prisma } from "config/client";
import { getProductId } from "services/Client/item.services";
const getProductPage = async (req: Request, res: Response) => {
  const { id } = req.params;
  const product = await getProductId(+id);
  const products = await prisma.product.findMany();
  res.render("client/product/detail.ejs", {
    products,
    product,
  });
};

export { getProductPage };
