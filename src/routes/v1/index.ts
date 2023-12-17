import { Router } from "express";
import authRoutes from "./adminRoutes"

const router = Router();

router.use("/auth", authRoutes);

export default router