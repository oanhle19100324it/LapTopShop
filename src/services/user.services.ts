import { prisma } from "config/client";
import getConnection from "../config/database";

const handleCreateUser = async (
  fullName: string,
  email: string,
  address: string
) => {
  await prisma.user.create({
    data: {
      name: fullName,
      email: email,
      address: address,
    },
  });
};

const getAllUsers = async () => {
  const users = await prisma.user.findMany();
  return users;
};

const handleDeleteUser = async (id: string) => {
  const deleteuser = await prisma.user.delete({
    where: { id: +id }, //convert string sang int
  });
  return deleteuser;
};

const getUserById = async (id: string) => {
  const getUser = await prisma.user.findUnique({
    where: { id: +id }, //convert string sang int
  });
  return getUser;
};

const postUpdateUserById = async (
  id: string,
  name: string,
  email: string,
  address: string
) => {
  const updatedUser = await prisma.user.update({
    where: { id: +id }, //convert string sang int
    data: {
      name: name,
      email: email,
      address: address,
    },
  });
};

export {
  handleCreateUser,
  getAllUsers,
  handleDeleteUser,
  getUserById,
  postUpdateUserById,
};
