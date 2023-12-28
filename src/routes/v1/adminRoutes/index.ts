import { Router } from "express";
import authRoutes from "./authRoutes"
import theaterRoutes from "./adminTheater"
import extraItemsRoutes from "./extraItems"
import { isAuthenticated } from "src/middlewares/authentication";
import { deleteImages, getImage } from "src/controller/Admin/extraItems";

const router = Router();

router.use("/auth", authRoutes);
router.use("/theater",theaterRoutes);
router.use("/extra-items",extraItemsRoutes);
router.use("/upload-image",getImage)
router.use("/upload-image/:image_uid",deleteImages)

export default router