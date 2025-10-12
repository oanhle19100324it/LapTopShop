import { Request, Response } from "express";
import { prisma } from "config/client";

const handleCreateProduct = async (
  name: string,
  price: number,
  detailDesc: string,
  shortDesc: string,
  quantity: number,
  factory: string,
  target: string,
  image?: string | null
) => {
  await prisma.product.create({
    data: {
      name,
      price,
      detailDesc,
      shortDesc,
      quantity,
      factory,
      target,
      ...(image && { image }),
    },
  });
};

const getAllProducts = async () => {
  const products = await prisma.product.findMany();
  return products;
};

export { handleCreateProduct, getAllProducts };
