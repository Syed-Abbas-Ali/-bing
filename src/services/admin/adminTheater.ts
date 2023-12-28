import { HttpStatusCodes } from "src/constants/status_codes";
import logger from "src/logger";
import { APIError, ServiceResponse } from "src/models";
import { ITheater } from "src/models/interfaces/theater";
import * as adminTheaterDB from "src/database/lib/admin/adminTheater"
// import from "src/database/lib/admin/extraItems";

const TAG = "services.admin.theater";

export async function adminTheater(user: ITheater){
  logger.info(`${TAG}.adminTheater() ==> `, user);
  const serviceResponse = new ServiceResponse(
    HttpStatusCodes.CREATED,
    "",
    false
  );
  try {
    const Admin = await adminTheaterDB.addNewTheater(user);
    const data = { ...Admin };
    serviceResponse.message="theater added successfully !"
    serviceResponse.data = data;
} catch (error) {
    logger.error(`ERROR occurred in ${TAG}.adminTheater`, error);
    serviceResponse.addServerError("Failed to create Admin due to technical difficulties");
  }
  return serviceResponse;
}


export async function updateTheater(user){
  logger.info(`${TAG}.updateTheater() ==> `, user);
  const serviceResponse = new ServiceResponse(
    HttpStatusCodes.CREATED,
    "",
    false
  );
  try {
    const res1 = await adminTheaterDB.getSingleTheater(user.uid)
    if(!res1[0]) {
      serviceResponse.message = 'invalid theater';
      serviceResponse.statusCode = HttpStatusCodes.BAD_REQUEST;
      serviceResponse.addError(new APIError(serviceResponse.message,serviceResponse.statusCode, ''));
      return serviceResponse;
    }
    const Admin = await adminTheaterDB.updateTheater(user);
    const data = { ...Admin };

    serviceResponse.data = data;
} catch (error) {
    logger.error(`ERROR occurred in ${TAG}.updateTheater`, error);
    serviceResponse.addServerError("Failed to create Admin due to technical difficulties");
  }
  return serviceResponse;
}


export async function getListOfTheater(){
  logger.info(`${TAG}.getListOfTheater() ==> `);
  const serviceResponse = new ServiceResponse(
    HttpStatusCodes.CREATED,
    "",
    false
  );
  try {
    const res = await adminTheaterDB.getListOfTheater();
    const data = { ...res };

    serviceResponse.data = {...data};
} catch (error) {
    logger.error(`ERROR occurred in ${TAG}.getListOfTheater`, error);
    serviceResponse.addServerError("Failed to create Admin due to technical difficulties");
  }
  return serviceResponse;
}


export async function getSingleTheater(uid){
  logger.info(`${TAG}.getSingleTheater() ==> `, uid);
  const serviceResponse = new ServiceResponse(
    HttpStatusCodes.CREATED,
    "",
    false
  );
  try {
    const res = await adminTheaterDB.getSingleTheater(uid);
    if(!res[0]) {
      serviceResponse.message = 'invalid theater';
      serviceResponse.statusCode = HttpStatusCodes.BAD_REQUEST;
      serviceResponse.addError(new APIError(serviceResponse.message,serviceResponse.statusCode, ''));
      return serviceResponse;
    }
    const data = { ...res };

    serviceResponse.data = {...data};
} catch (error) {
    logger.error(`ERROR occurred in ${TAG}.getSingleTheater`, error);
    serviceResponse.addServerError("Failed to create Admin due to technical difficulties");
  }
  return serviceResponse;
}

export async function deleteSingleTheater(uid){
  logger.info(`${TAG}.deleteSingleTheater() ==> `, uid);
  const serviceResponse = new ServiceResponse(
    HttpStatusCodes.CREATED,
    "",
    false
  );
  try {
    const res1 = await adminTheaterDB.getSingleTheater(uid);
    if(!res1[0]) {
      serviceResponse.message = 'invalid theater';
      serviceResponse.statusCode = HttpStatusCodes.BAD_REQUEST;
      serviceResponse.addError(new APIError(serviceResponse.message,serviceResponse.statusCode, ''));
      return serviceResponse;
    }
    const res = await adminTheaterDB.deleteSingleTheater(uid);
    serviceResponse.message = 'theater deleted';
    const data = { ...res };

    serviceResponse.data = data;
} catch (error) {
    logger.error(`ERROR occurred in ${TAG}.deleteSingleTheater`, uid);
    serviceResponse.addServerError("Failed to create Admin due to technical difficulties");
  }
  return serviceResponse;
}


