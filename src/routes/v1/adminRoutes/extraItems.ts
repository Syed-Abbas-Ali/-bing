import { Router } from "express";
import * as extraItems from "src/controller/Admin/extraItems"
import { isAuthenticated } from "src/middlewares/authentication";

// passportConfiguration(passport)

const router = Router()
//  router.use(passport.initialize())

 router.route('/:type')
     .post(isAuthenticated,extraItems.addNewAccessaries);
 router.route('/:type')
     .get(extraItems.getListOfAccessaries);
 router.route('/:item_uid')
     .delete(isAuthenticated,extraItems.deleteSingleAccessaries);
 router.route('/update')
     .put(isAuthenticated,extraItems.updateAccessaries);

export default router