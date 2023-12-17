import { HttpStatusCodes } from "src/constants/status_codes";
import * as AdminAuth from "src/database/lib/admin/adminAuth";
import logger from "src/logger";
import {
  IServiceResponse,
  ServiceResponse,
} from "src/models/lib/service_response";
import { IAdmin } from "src/models/interfaces/admin";
import { APIError } from "src/models";

const TAG = "services.auth";

export async function signupUser(user: IAdmin){
  logger.info(`${TAG}.signupUser() ==> `, user);
  const serviceResponse = new ServiceResponse(
    HttpStatusCodes.CREATED,
    "",
    false
  );
  try {
    const existedUser = await AdminAuth.checkEmailExist(user.email);
    if(!existedUser) {
        serviceResponse.message = 'Email is not exist please register';
        serviceResponse.statusCode = HttpStatusCodes.BAD_REQUEST;
        serviceResponse.addError(new APIError(serviceResponse.message, '', ''));
        return serviceResponse;
      }
    const Admin = await AdminAuth.adminSignUp(user);
    const data = { Admin };

    serviceResponse.data = data;
} catch (error) {
    logger.error(`ERROR occurred in ${TAG}.signupUser`, error);
    serviceResponse.addServerError("Failed to create Admin due to technical difficulties");
  }
  
  return serviceResponse;
}
