import { Request, Response } from "express";
import { getAllUsers } from "services/Admin/user.services";

const getDashboardPage = (req: Request, res: Response) => {
  res.render("admin/dashboard/show.ejs");
};

const getManageUserPage = async (req: Request, res: Response) => {
  const user = await getAllUsers();

  res.render("admin/users/show.ejs", {
    users: user,
  });
};

const getManageOrderPage = (req: Request, res: Response) => {
  res.render("admin/orders/show.ejs");
};

export { getDashboardPage, getManageUserPage, getManageOrderPage };
