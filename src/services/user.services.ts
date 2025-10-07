import { prisma } from "config/client";
import getConnection from "../config/database";
import { ACCOUNT_TYPE } from "config/constant";

const handleCreateUser = async (
  accountType: string,
  username: string,
  fullName: string,
  phone: string,
  address: string,
  password: string,
  avatar: string | null
) => {
  await prisma.user.create({
    data: {
      accountType: ACCOUNT_TYPE.SYSTEM,
      username: username,
      password: password,
      fullName: fullName,
      phone: phone,
      address: address,
      avatar: avatar,
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
