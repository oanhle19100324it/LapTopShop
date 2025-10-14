import { prisma } from "config/client";

const getProducts = async () => {
  const products = await prisma.product.findMany();
  return products;
};

const getProductId = async (id: number) => {
  return await prisma.product.findUnique({
    where: { id },
  });
};
export { getProducts, getProductId };
