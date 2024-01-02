import { HttpStatusCodes } from "src/constants/status_codes";
import logger from "src/logger";
import { ServiceResponse } from "src/models";
import * as contact from "src/database/lib/user/contactUs"

const TAG = "services.admin.theater";

export async function formSubmit(user){
  logger.info(`${TAG}.formSubmit() ==> `, user);
  const serviceResponse = new ServiceResponse(
    HttpStatusCodes.CREATED,
    "",
    false
  );
  try {
    const res = await contact.formSubmit(user);
    const data = { ...res };
    serviceResponse.message="message Submitted successfully !"
    serviceResponse.data = data;
} catch (error) {
    logger.error(`ERROR occurred in ${TAG}.formSubmit`, error);
    serviceResponse.addServerError("Failed to create Admin due to technical difficulties");
  }
  return serviceResponse;
}

export async function getListMessage(){
  logger.info(`${TAG}.getListMessage() ==> `);
  const serviceResponse = new ServiceResponse(
    HttpStatusCodes.CREATED,
    "",
    false
  );
  try {
    const res = await contact.getListMessage();
    serviceResponse.message="message !"
    serviceResponse.data = [...res];
} catch (error) {
    logger.error(`ERROR occurred in ${TAG}.getListMessage`, error);
    serviceResponse.addServerError("Failed to create Admin due to technical difficulties");
  }
  return serviceResponse;
}

export async function getSingleMessage(uid){
  logger.info(`${TAG}.getSingleMessage() ==> `);
  const serviceResponse = new ServiceResponse(
    HttpStatusCodes.CREATED,
    "",
    false
  );
  try {
    const res = await contact.getSingleMessage(uid);
    serviceResponse.message="message !"
    serviceResponse.data = [...res];
} catch (error) {
    logger.error(`ERROR occurred in ${TAG}.getSingleMessage`, error);
    serviceResponse.addServerError("Failed to create Admin due to technical difficulties");
  }
  return serviceResponse;
}