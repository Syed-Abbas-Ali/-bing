import { HttpStatusCodes } from "src/constants/status_codes";
import logger from "src/logger";
import { ServiceResponse } from "src/models";
import * as theater from "src/database/lib/user/userTheater"

const TAG = "services.admin.theater";

export async function bookingSlots(data){
  logger.info(`${TAG}.bookingSlots() ==> `, data);
  const serviceResponse = new ServiceResponse(
    HttpStatusCodes.CREATED,
    "",
    false
  );
  try {
    const res = await theater.bookingSlots(data);
    serviceResponse.message="slot books !"
    serviceResponse.data = {...data};
} catch (error) {
    logger.error(`ERROR occurred in ${TAG}.bookingSlots`, error);
    serviceResponse.addServerError("Failed to create Admin due to technical difficulties");
  }
  return serviceResponse;
}



export async function getListBookedSlots(){
    logger.info(`${TAG}.getListMessage() ==> `);
    const serviceResponse = new ServiceResponse(
      HttpStatusCodes.CREATED,
      "",
      false
    );
    try {
      const res = await theater.getListBookedSlots();
      serviceResponse.message="message !"
      serviceResponse.data = [...res];
  } catch (error) {
      logger.error(`ERROR occurred in ${TAG}.getListBookedSlots`, error);
      serviceResponse.addServerError("Failed to create Admin due to technical difficulties");
    }
    return serviceResponse;
  }

  
export async function getSingleBookedSlots(bookedDate){
    logger.info(`${TAG}.getSingleBookedSlots() ==> `);
    const serviceResponse = new ServiceResponse(
      HttpStatusCodes.CREATED,
      "",
      false
    );
    try {
      const res = await theater.getSingleBookedSlots(bookedDate);
      serviceResponse.message="message !"
      serviceResponse.data = [...res];
  } catch (error) {
      logger.error(`ERROR occurred in ${TAG}.getSingleBookedSlots`, error);
      serviceResponse.addServerError("Failed to create Admin due to technical difficulties");
    }
    return serviceResponse;
  }

  
export async function deleteSingleBookedSlots(bookedDate){
    logger.info(`${TAG}.deleteSingleBookedSlots() ==> `);
    const serviceResponse = new ServiceResponse(
      HttpStatusCodes.CREATED,
      "",
      false
    );
    try {
      const res = await theater.deleteSingleBookedSlots(bookedDate);
      serviceResponse.message="message !"
      serviceResponse.data = [...res];
  } catch (error) {
      logger.error(`ERROR occurred in ${TAG}.deleteSingleBookedSlots`, error);
      serviceResponse.addServerError("Failed to create Admin due to technical difficulties");
    }
    return serviceResponse;
  }