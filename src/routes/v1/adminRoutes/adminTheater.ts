import { Router } from "express";
import * as adminTheaterController from "src/controller/Admin/theaterController"
import { isAuthenticated } from "src/middlewares/authentication";

// passportConfiguration(passport)

const router = Router()

 router.route('/')
     .post(isAuthenticated,adminTheaterController.addNewTheater)

 router.route('/list')
     .get(adminTheaterController.getListOfTheater);

 router.route('/:uid')
     .get(adminTheaterController.getSingleTheater);

 router.route('/:uid')
     .put(isAuthenticated,adminTheaterController.updateTheater);

 router.route('/:uid')
     .delete(isAuthenticated,adminTheaterController.deleteSingleTheater);



export default router