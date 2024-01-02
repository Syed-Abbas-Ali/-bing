import { Router } from "express";
import adminRoutes from "./adminRoutes/index"
import imageRoutes from "./adminRoutes/imagesRoutes"
import paymentRoutes from "./payment/payment"
import contact from "../v1/userRoutes/contactUs"

const router = Router();

router.use("/admin", adminRoutes);
router.use("/image",imageRoutes)
router.use("/payment",paymentRoutes)
router.use("/contact-us",contact)

export default router

// localhost:5000/api/v1/admin/auth/signup