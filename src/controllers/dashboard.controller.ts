import { Request, Response } from "express";
import { getAllUsers } from "services/user.services";

const getDashboardPage = (req: Request, res: Response) => {
  res.render("admin/dashboard/show.ejs");
};

const getManageUserPage = async (req: Request, res: Response) => {
  const user = await getAllUsers();

  res.render("admin/users/show.ejs", {
    users: user,
  });
};

const getManageProductPage = (req: Request, res: Response) => {
  res.render("admin/products/show.ejs");
};

const getManageOrderPage = (req: Request, res: Response) => {
  res.render("admin/orders/show.ejs");
};

export {
  getDashboardPage,
  getManageUserPage,
  getManageProductPage,
  getManageOrderPage,
};
