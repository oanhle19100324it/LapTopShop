import express from "express";
import dotenv from "dotenv";
import WebRoutes from "./routes/web";
import getConnection from "./config/database";
import { initDatabase } from "./config/seed";
dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.set("view engine", "ejs");
app.set("views", __dirname + "/views");

app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

WebRoutes(app);
getConnection();
initDatabase();

app.listen(port, () => {
  console.log(`✅ Server is running at http://localhost:${port}`);
  console.log("env port", process.env.PORT);
});
