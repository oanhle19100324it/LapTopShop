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

import { getProductPage } from "../controllers/client/product.controller";
import {
  getAdminCreateProductPage,
  postAdminCreateProductPage,
} from "../controllers/admin/product.controller";
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
  router.post(
    "/admin/handle-create-user",
    fileUploadMiddleware("avatar"),
    postCreateUserPage
  );

  router.get("/admin/product", getManageProductPage);
  router.get("/admin/create-product", getAdminCreateProductPage);
  router.post(
    "/admin/create-product",
    fileUploadMiddleware("image", "images/product"),
    postAdminCreateProductPage
  );

  router.get("/produc/:id", getProductPage);

  // tiền tố đầu tiên trong đường link
  app.use("/", router);
};

export default WebRoutes;
