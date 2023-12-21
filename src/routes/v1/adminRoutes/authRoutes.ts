import { Router } from "express";
import * as auth from "src/controller/Admin/adminController"
import * as validation from "../../../validation/Validation"

// passportConfiguration(passport)

const router = Router()
//  router.use(passport.initialize())

 router.route('/signup')
     .post(validation.adminSignup,auth.adminSignUp);

 router.route('/login')
     .post(validation.adminLogin,auth.adminLogin);

export default router