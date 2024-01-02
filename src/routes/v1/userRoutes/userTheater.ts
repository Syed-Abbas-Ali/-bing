import { Router } from "express";
import * as userTheater from "src/controller/User/userTheater"

const router = Router()

 router.route('/book-slots')
     .post(userTheater.bookingSlots)

 router.route('/list')
     .get(userTheater.getListBookedSlots)

 router.route('/:bookedDate')
     .get(userTheater.getSingleBookedSlots)

     export default router