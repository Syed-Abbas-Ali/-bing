import logger from "src/logger"
import { Admin, IAdmin } from "src/models/interfaces/admin"

//Admin datamapping
export function AdminDataMapping (payload: any): IAdmin{
    logger.info('helpers.data_mapping.admin.adminDataMapping()')
    try {
      if (payload != null && payload !== undefined) {
        return new Admin(
            payload.id,
            payload.uid ,
            payload.firstName ,
            payload.lastName ,
            payload.email ,
            payload.password,
            payload.role ,
        )
      }
      return payload
    } catch (error) {
      logger.error('ERROR occurred in helpers.data_mapping.admin.adminDataMapping()')
      throw error
    }
  }