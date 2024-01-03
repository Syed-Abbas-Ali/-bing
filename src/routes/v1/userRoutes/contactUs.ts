import { Router } from "express";
import * as contact from "src/controller/User/contactUs"
import { isAuthenticated } from "src/middlewares/authentication";

const router = Router()

 router.route('/')
     .post(contact.formSubmit)

 router.route('/')
     .get(isAuthenticated,contact.getListMessage)

 router.route('/:uid')
     .get(isAuthenticated,contact.getSingleMessage)

 router.route('/:uid')
     .delete(contact.deleteSingleMessage)

export default router