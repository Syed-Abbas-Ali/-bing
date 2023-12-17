import { Router } from "express";
import * as auth from "src/controller/adminController"

// passportConfiguration(passport)

const router = Router()
//  router.use(passport.initialize())

 router.route('/signup')
     .post(auth.signupAdmin);



export default router