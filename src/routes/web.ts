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
import fileUploadMiddleware from "src/middleware/multer";

const WebRoutes = (app: Express) => {
  router.get("/", getHomePage);
  router.post("/admin/create-user", postCreateUserPage);

  router.post("/handle-update-user/:id", postUpdateUserPage);

  //admin routes
  router.get("/admin", getDashboardPage);
  router.get("/admin/user", getManageUserPage);
  router.get("/admin/create-user", getCreateUserPage);
  router.post("/admin/handle-delete-user/:id", postDeleteUserPage);
  router.get("/admin/view-user/:id", getViewUserPage);

  router.get("/admin/product", getManageProductPage);
  router.get("/admin/order", getManageOrderPage);
  router.post(
    "/admin/handle-create-user",
    fileUploadMiddleware("avatar"),
    postCreateUserPage
  );

  // tiền tố đầu tiên trong đường link
  app.use("/", router);
};

export default WebRoutes;
