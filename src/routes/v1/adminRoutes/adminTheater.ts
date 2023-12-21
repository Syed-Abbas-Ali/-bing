import { Router } from "express";
import * as adminTheaterController from "src/controller/Admin/theaterController"

// passportConfiguration(passport)

const router = Router()

 router.route('/')
     .post(adminTheaterController.addNewTheater)

 router.route('/list')
     .get(adminTheaterController.getListOfTheater);

 router.route('/:uid')
     .get(adminTheaterController.getSingleTheater);

 router.route('/')
     .put(adminTheaterController.updateTheater);

 router.route('/:uid')
     .delete(adminTheaterController.deleteSingleTheater);



export default router