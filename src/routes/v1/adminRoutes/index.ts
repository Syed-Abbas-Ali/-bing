import { Router } from "express";
import authRoutes from "./authRoutes"
import theaterRoutes from "./adminTheater"
import extraItemsRoutes from "./extraItems"
import Timing from "./timeSlots"
const router = Router();

router.use("/auth", authRoutes);
router.use("/theater",theaterRoutes);
router.use("/extra-items",extraItemsRoutes);
router.use("/",Timing);

export default router