import { Request, Response } from "express";
import {
  handleCreateUser,
  getAllUsers,
  handleDeleteUser,
  getUserById,
  postUpdateUserById,
} from "../services/user.services";

const getHomePage = async (req: Request, res: Response) => {
  const user = await getAllUsers();
  console.log(" >>> check list user:", user);
  res.render("home.ejs", {
    users: user,
  });
};

const getCreateUserPage = (req: Request, res: Response) => {
  res.render("create-user.ejs");
};

//quay mặc định về trang home
const postCreateUserPage = (req: Request, res: Response) => {
  const { fullName, email, address } = req.body;
  handleCreateUser(fullName, email, address);
  return res.redirect("/");
};

const postDeleteUserPage = async (req: Request, res: Response) => {
  const { id } = req.params;
  await handleDeleteUser(id);
  return res.redirect("/");
};

const getViewUserPage = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    console.log("ID received:", id);

    // Lấy user từ database
    const user = await getUserById(id);
    console.log("User data:", user);

    if (!user) {
      return res.status(404).send("User not found");
    }

    res.render("view-user.ejs", { user: user });
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
