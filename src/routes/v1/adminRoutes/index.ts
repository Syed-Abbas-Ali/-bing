import { Router } from "express";
import authRoutes from "./authRoutes"
import theaterRoutes from "./adminTheater"
import { isAuthenticated } from "src/middlewares/authentication";

const router = Router();

router.use("/auth", authRoutes);
router.use("/theater",isAuthenticated,theaterRoutes);

export default router