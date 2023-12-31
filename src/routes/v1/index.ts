import { Router } from "express";
import adminRoutes from "./adminRoutes/index"
import imageRoutes from "./adminRoutes/imagesRoutes"
import paymentRoutes from "./payment/payment"

const router = Router();

router.use("/admin", adminRoutes);
router.use("/image",imageRoutes)
router.use("/payment",paymentRoutes)

export default router

// localhost:5000/api/v1/admin/auth/signup