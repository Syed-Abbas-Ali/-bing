import { Router } from "express";
import adminRoutes from "./adminRoutes/index"

const router = Router();

router.use("/admin", adminRoutes);

export default router

// localhost:5000/api/v1/admin/auth/signup