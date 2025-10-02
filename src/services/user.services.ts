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
  const connection = await getConnection();
  try {
    const sql = "DELETE FROM `user` WHERE `id` = ? LIMIT 1";

    const [result, fields] = await connection.query(sql, [id]);

    console.log(result);
    console.log(fields);
  } catch (err) {
    console.log(err);
  }
};

const getUserById = async (id: string) => {
  const connection = await getConnection();
  try {
    const sql = "SELECT * FROM `user` WHERE `id` = ? LIMIT 1";
    const [rows] = await connection.execute(sql, [id]);

    // Trả về user đầu tiên
    return Array.isArray(rows) ? rows[0] : null;
  } catch (err) {
    console.log(err);
    return null;
  }
};

const postUpdateUserById = async (
  id: string,
  name: string,
  email: string,
  address: string
) => {
  const connection = await getConnection();
  try {
    const sql =
      "UPDATE `user` SET `name` = ?, `email` = ?, `address` = ? WHERE `id` = ?";
    const [result, fields] = await connection.query(sql, [
      name,
      email,
      address,
      id,
    ]);

    console.log(result);
    console.log(fields);
  } catch (err) {
    console.log(err);
  }
};

export {
  handleCreateUser,
  getAllUsers,
  handleDeleteUser,
  getUserById,
  postUpdateUserById,
};
