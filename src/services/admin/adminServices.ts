import { HttpStatusCodes } from "src/constants/status_codes";
import * as AdminAuth from "src/database/lib/admin/adminAuth";
import logger from "src/logger";
import {
  IServiceResponse,
  ServiceResponse,
} from "src/models/lib/service_response";
import { IAdmin, IAdminLogin } from "src/models/interfaces/admin";
import { APIError } from "src/models";
import { comparePasswords } from "src/helpers/encryption";
import { generateAccessToken } from "src/helpers/authentication";

const TAG = "services.auth";

export async function adminSignUp(user: IAdmin){
  logger.info(`${TAG}.adminSignUp() ==> `, user);
  const serviceResponse = new ServiceResponse(
    HttpStatusCodes.CREATED,
    "",
    false
  );
  try {
    const existedUser = await AdminAuth.checkEmailExist(user.email);
    if(existedUser) {
        serviceResponse.message = 'Email already exist';
        serviceResponse.statusCode = HttpStatusCodes.BAD_REQUEST;
        serviceResponse.addError(new APIError(serviceResponse.message, HttpStatusCodes.BAD_REQUEST, ''));
        return serviceResponse;
      }
    const Admin = await AdminAuth.adminSignUp(user);
    if(Admin && Admin.uid){
      serviceResponse.message="Admin created successfully !";
      serviceResponse.data = {
        uid:Admin.uid,
        email:Admin.email
      };
    }

    
} catch (error) {
    logger.error(`ERROR occurred in ${TAG}.adminSignUp`, error);
    serviceResponse.addServerError("Failed to create Admin due to technical difficulties");
  }
  
  return serviceResponse;
}


export async function adminLogin(user:IAdminLogin) {
    logger.info(`${TAG}.loginAdmin() ==> `, user);
    const serviceResponse = new ServiceResponse(HttpStatusCodes.CREATED, '', false);
    try {
      const existedUser = await AdminAuth.checkEmailExist(user.email);
  //checking email exist or not
      if(!existedUser) {
        serviceResponse.message = 'Email is not exist please register';
        serviceResponse.statusCode = HttpStatusCodes.BAD_REQUEST;
        serviceResponse.addError(new APIError(serviceResponse.message,serviceResponse.statusCode, ''));
        return serviceResponse;
      }
  //comparing password
      const isPasswordValid = await comparePasswords(existedUser.password ,user.password);
      if(!isPasswordValid ){
        serviceResponse.message = 'password is does not match';
        serviceResponse.statusCode = HttpStatusCodes.BAD_REQUEST;
        serviceResponse.addError(new APIError(serviceResponse.message,HttpStatusCodes.BAD_REQUEST, ''));
        return serviceResponse;
      }else{
    //   const Admin = await AdminAuth.login(user);
      const accessToken = await generateAccessToken({uid:existedUser.uuid,role:"admin"})
      const data = { 
      accessToken,
      role:"admin"
        }
        serviceResponse.data = data

      }
       
    } catch (error) {
      logger.error(`ERROR occurred in ${TAG}.adminLogin`, error);
      serviceResponse.addServerError('Failed to create Admin due to technical difficulties');
    }
    return serviceResponse;
    
  }