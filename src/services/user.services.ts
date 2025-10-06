import { prisma } from "config/client";
import getConnection from "../config/database";

const handleCreateUser = async (
  accountType: string,
  username: string,
  fullName: string,
  phone: string,
  address: string,
  password: string
) => {
  await prisma.user.create({
    data: {
      accountType: accountType,
      username: username,
      password: password,
      fullName: fullName,
      phone: phone,
      address: address,
    },
  });
};

const getAllUsers = async () => {
  const users = await prisma.user.findMany();
  return users;
};

const getAllRoles = async () => {
  const roles = await prisma.role.findMany();
  return roles;
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
  fullName: string,
  phone: string,
  address: string
) => {
  const updatedUser = await prisma.user.update({
    where: { id: +id }, //convert string sang int
    data: {
      fullName: fullName,
      phone: phone,
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
  getAllRoles,
};
