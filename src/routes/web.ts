import express, { Express } from "express";
const router = express.Router();
import {
  getHomePage,
  getCreateUserPage,
  postCreateUserPage,
  postDeleteUserPage,
  getViewUserPage,
  postUpdateUserPage,
} from "../controllers/user.controller";
import {
  getDashboardPage,
  getManageUserPage,
  getManageOrderPage,
  getManageProductPage,
} from "../controllers/dashboard.controller";

const WebRoutes = (app: Express) => {
  router.get("/", getHomePage);
  router.post("/handle-delete-user/:id", postDeleteUserPage);
  router.post("/admin/create-user", postCreateUserPage);

  router.get("/handle-view-user/:id", getViewUserPage);
  router.post("/handle-update-user/:id", postUpdateUserPage);

  //admin routes
  router.get("/admin", getDashboardPage);
  router.get("/admin/user", getManageUserPage);
  router.get("/admin/create-user", getCreateUserPage);

  router.get("/admin/product", getManageProductPage);
  router.get("/admin/order", getManageOrderPage);

  // tiền tố đầu tiên trong đường link
  app.use("/", router);
};

export default WebRoutes;
