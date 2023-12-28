import { Application, Router } from 'express'
// import { SWAGGER_DOC_PATH } from '../Loaders/config'
import log from '../logger'
import { errorHandler } from '../middlewares/error_handler'
// import swaggerUi from 'swagger-ui-express'
// import YAML from 'yamljs'
import v1Routes from './v1/index'
import multer from "multer"
import { addNewImage } from 'src/controller/Admin/extraItems'

// import {swaggerSpecification} from '../utils/swigger'


// const swaggerDocument = YAML.load(SWAGGER_DOC_PATH)

export default function initializeRoutes (app: Application): any {
  log.info('initializeRoutes()')
  const router = Router();
  app.use("/api/v1", v1Routes);
  app.get('*', function (req, res) {
    res.status(404).send('what???')
  })
  app.use(errorHandler)

  const storage = multer.memoryStorage();
const upload = multer({ storage: storage });
app.post("/upload",upload.single('image'),addNewImage)
}