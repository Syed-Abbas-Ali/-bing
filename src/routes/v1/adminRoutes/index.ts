import { Router } from "express";
import authRoutes from "./authRoutes"
import theaterRoutes from "./adminTheater"
import extraItemsRoutes from "./extraItems"
const router = Router();

router.use("/auth", authRoutes);
router.use("/theater",theaterRoutes);
router.use("/extra-items",extraItemsRoutes);

export default router