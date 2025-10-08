import { Request, Response } from "express";
import { ACCOUNT_TYPE } from "../config/constant";
import {
  handleCreateUser,
  getAllUsers,
  handleDeleteUser,
  getUserById,
  postUpdateUserById,
  getAllRoles,
} from "../services/user.services";

const getHomePage = async (req: Request, res: Response) => {
  const user = await getAllUsers();
  console.log(" >>> check list user:", user);
  res.render("home.ejs", {
    users: user,
  });
};

const getCreateUserPage = async (req: Request, res: Response) => {
  const roles = await getAllRoles();
  res.render("admin/users/create.ejs", {
    roles: roles,
  });
};

//quay mặc định về trang home
const postCreateUserPage = async (req: Request, res: Response) => {
  const roles = await getAllRoles();

  const { email, fullName, phone, address, password, roleId } = req.body;
  const file = req.file;
  const avatar = file ? file.filename : null;
  const accountType = ACCOUNT_TYPE.SYSTEM;
  handleCreateUser(
    accountType,
    email,
    fullName,
    phone,
    address,
    password,
    avatar,
    roleId
  );
  return res.redirect("/admin/user");
};

const postDeleteUserPage = async (req: Request, res: Response) => {
  const { id } = req.params;
  await handleDeleteUser(id);
  return res.redirect("/admin/user");
};

const getViewUserPage = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    console.log("ID received:", id);

    // Lấy user từ database
    const user = await getUserById(id);
    const roles = await getAllRoles();
    console.log("User data:", user);

    if (!user) {
      return res.status(404).send("User not found");
    }

    res.render("admin/users/detail.ejs", { user: user, roles: roles });
  } catch (err) {
    console.log(err);
    res.status(500).send("Server error");
  }
};

const postUpdateUserPage = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { name, email, address } = req.body; // Lấy dữ liệu từ form

    console.log("Update data:", { id, name, email, address }); // Debug

    await postUpdateUserById(id, name, email, address);
    return res.redirect("/"); // Chuyển hướng về trang chủ
  } catch (err) {
    console.log(err);
    return res.redirect("/");
  }
};

export {
  getHomePage,
  getCreateUserPage,
  postCreateUserPage,
  postDeleteUserPage,
  getViewUserPage,
  postUpdateUserPage,
};
