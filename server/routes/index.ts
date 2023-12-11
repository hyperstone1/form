import { Router } from "express";
import formRouter from "./formRouter";
const router = Router();

router.use("/login", formRouter);

export default router;
