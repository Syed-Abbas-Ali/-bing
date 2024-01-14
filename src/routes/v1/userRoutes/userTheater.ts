import { Router } from "express";
import * as userTheater from "src/controller/User/userTheater"
import { isAuthenticated } from "src/middlewares/authentication";

const router = Router()

 router.route('/book-slots/:theaterUid')
     .post(userTheater.bookingSlots)

 router.route('/list')
     .get(isAuthenticated,userTheater.getListBookedSlots)

 router.route('/:bookedDate')
     .get(userTheater.getSingleBookedSlots)

 router.route('/:bookedDate')
     .delete(userTheater.deleteSingleBookedSlots)

     export default router