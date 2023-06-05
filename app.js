import express from "express";
import { config } from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
import { addexpense, addincome, createuser, login, removeexpense, removeincome } from "./Api.js";

config({
  path: "./config.env",
});
const app = express();

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(cookieParser());
app.use(
  cors({
    origin: process.env.FRONTEND_URL,
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE"],
  })
);

export default app;

app.post("/register",createuser);
app.post("/login",login);
app.post("/addincome",addincome);
app.post("/addexpense",addexpense);
app.post("/removeincome",removeincome);
app.post("/removeexpense",removeexpense);

app.get("/", (req, res) =>
  res.send(
    `<h1>Site is Working. click <a href=${process.env.FRONTEND_URL}>here</a> to visit frontend.</h1>`
  )
);
