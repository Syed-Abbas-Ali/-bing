import { Router } from "express";
import * as Timing from "src/controller/Admin/timingSlots";

const router = Router();
router.route("/:time-slot").post(Timing.addNewTimeSlot)
router.route("/:time-slot").get(Timing.getTimeSlots)

export default router