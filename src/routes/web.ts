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

const WebRoutes = (app: Express) => {
  router.get("/", getHomePage);
  router.get("/create-user", getCreateUserPage);
  router.post("/handle-create-user", postCreateUserPage);
  router.post("/handle-delete-user/:id", postDeleteUserPage);
  router.get("/handle-view-user/:id", getViewUserPage);
  router.post("/handle-update-user/:id", postUpdateUserPage);

  // tiền tố đầu tiên trong đường link
  app.use("/", router);
};

export default WebRoutes;
