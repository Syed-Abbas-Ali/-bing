import { Router } from "express";
import authRoutes from "./authRoutes"
import theaterRoutes from "./adminTheater"
import extraItemsRoutes from "./extraItems"
import { isAuthenticated } from "src/middlewares/authentication";

const router = Router();

router.use("/auth", authRoutes);
router.use("/theater",isAuthenticated,theaterRoutes);
router.use("/extra-items",isAuthenticated,extraItemsRoutes);

export default router