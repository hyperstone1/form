// const Router = require("express");
import { Router } from "express";
const router = Router();
import formController from "../controllers/formController";

router.post("/check", formController.checkEmail);

export default router;
