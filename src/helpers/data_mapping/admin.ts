import logger from "src/logger"
import { Admin, IAdmin, IAdminLogin,AdminLogin} from "src/models/interfaces/admin"

//Admin datamapping
export function AdminDataMapping (payload: any): IAdmin{
    logger.info('helpers.data_mapping.admin.adminDataMapping()')
    try {
      if (payload != null && payload !== undefined) {
        return new Admin(
            payload.firstName ,
            payload.lastName ,
            payload.email ,
            payload.password,
        )
      }
      return payload
    } catch (error) {
      logger.error('ERROR occurred in helpers.data_mapping.admin.adminDataMapping()')
      throw error
    }
  }
  
export function AdminLoginDataMapping (payload: any): IAdminLogin{
    logger.info('helpers.data_mapping.admin.AdminLoginDataMapping()')
    try {
      if (payload != null && payload !== undefined) {
        return new AdminLogin(
            payload.email ,
            payload.password,
        )
      }
      return payload
    } catch (error) {
      logger.error('ERROR occurred in helpers.data_mapping.admin.AdminLoginDataMapping()')
      throw error
    }
  }