import { Router } from "express";
import * as auth from "src/controller/Admin/adminController"

// passportConfiguration(passport)

const router = Router()
//  router.use(passport.initialize())

 router.route('/signup')
     .post(auth.adminSignUp);

 router.route('/login')
     .post(auth.adminLogin);



export default router