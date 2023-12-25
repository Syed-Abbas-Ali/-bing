import { Router } from "express";
import * as extraItems from "src/controller/Admin/extraItems"

// passportConfiguration(passport)

const router = Router()
//  router.use(passport.initialize())

 router.route('/:type')
     .post(extraItems.addNewAccessaries);
 router.route('/:type')
     .get(extraItems.getListOfAccessaries);
 router.route('/:item_uid')
     .delete(extraItems.deleteSingleAccessaries);
 router.route('/update')
     .put(extraItems.updateAccessaries);

export default router