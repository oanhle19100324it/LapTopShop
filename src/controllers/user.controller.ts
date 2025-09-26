import { Request, Response } from "express";
import { handleCreateUser, getAllUsers } from "../services/user.services";

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

export { getHomePage, getCreateUserPage, postCreateUserPage };
