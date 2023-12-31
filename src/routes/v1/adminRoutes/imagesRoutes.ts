import { Router } from "express";
import multer from "multer"
import { addNewImage,deleteImages, getImage } from "src/controller/Admin/imagesController";

const router = Router();
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });
router.route("/:user_uid").post(upload.single('image'),addNewImage)
router.route("/:thumbnail/:user_uid/").post(upload.single('image'),addNewImage)
router.route("/:image_uid").get(getImage)
router.route("/:image_uid").delete(deleteImages)

export default router