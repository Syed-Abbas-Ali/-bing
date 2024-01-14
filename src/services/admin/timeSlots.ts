
import { HttpStatusCodes } from "src/constants/status_codes";
import * as Time from "src/database/lib/admin/timeSlots"
import logger from "src/logger";
import {
  ServiceResponse,
} from "src/models/lib/service_response";
import { APIError } from "src/models";

const TAG = "services.timeSlots";

export async function addNewTimeSlot(data){
  logger.info(`${TAG}.addNewTimeSlot() ==> `, data);
  const serviceResponse = new ServiceResponse(
    HttpStatusCodes.CREATED,
    "",
    false
  );
  try {
    const res = await Time.addNewTimeSlot(data);
      serviceResponse.message="new timeSlot created successfully !";
      serviceResponse.data = {
      ...res
    }   
} catch (error) {
    logger.error(`ERROR occurred in ${TAG}.addNewTimeSlot`, error);
    serviceResponse.addServerError("Failed to create Admin due to technical difficulties");
  }
  
  return serviceResponse;
}

export async function getTimeSlots(){
    logger.info(`${TAG}.getTimeSlots() ==> `);
    const serviceResponse = new ServiceResponse(
      HttpStatusCodes.CREATED,
      "",
      false
    );
    try {
      const data = await Time.getTimeSlots();
        serviceResponse.message="";
        serviceResponse.data = {
        ...data  
      }   
  } catch (error) {
      logger.error(`ERROR occurred in ${TAG}.getTimeSlots`, error);
      serviceResponse.addServerError("Failed to create Admin due to technical difficulties");
    }
    return serviceResponse;
  }