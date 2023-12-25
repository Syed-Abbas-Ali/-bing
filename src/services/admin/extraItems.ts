import { HttpStatusCodes } from "src/constants/status_codes";
import logger from "src/logger";
import { ServiceResponse } from "src/models";
import * as extraItemsDB from "src/database/lib/admin/extraItems"
import { IExtraItems } from "src/models/interfaces/extraItems";


const TAG = "services.admin.extraitems";

export async function addNewAccessaries(user: IExtraItems){
    logger.info(`${TAG}.addNewAccessaries() ==> `, user);
    const serviceResponse = new ServiceResponse(
      HttpStatusCodes.CREATED,
      "",
      false
    );
    try {
      const Admin = await extraItemsDB.addNewAccessaries({...user});
      const data = { ...Admin };
      serviceResponse.message="theater added successfully !"
      serviceResponse.data = data;
  } catch (error) {
      logger.error(`ERROR occurred in ${TAG}.addNewAccessaries`, error);
      serviceResponse.addServerError("Failed to create Admin due to technical difficulties");
    }
    return serviceResponse;
  }

//   getListOfAccessaries
export async function getListOfAccessaries(type){
    logger.info(`${TAG}.getListOfAccessaries() ==> `);
    const serviceResponse = new ServiceResponse(
      HttpStatusCodes.CREATED,
      "",
      false
    );
    try {
      const res = await extraItemsDB.getListOfAccessaries(type);
      const data = { ...res };
  
      serviceResponse.data = {...data};
  } catch (error) {
      logger.error(`ERROR occurred in ${TAG}.getListOfAccessaries`, error);
      serviceResponse.addServerError("Failed to create Admin due to technical difficulties");
    }
    return serviceResponse;
  }

//   deleteSingleAccessaries
export async function deleteSingleAccessaries(item_uid){
    logger.info(`${TAG}.deleteSingleAccessaries() ==> `);
    const serviceResponse = new ServiceResponse(
      HttpStatusCodes.CREATED,
      "",
      false
    );
    try {
      const res = await extraItemsDB.deleteSingleAccessaries(item_uid);
      const data = { ...res };
  
      serviceResponse.data = {...data};
  } catch (error) {
      logger.error(`ERROR occurred in ${TAG}.deleteSingleAccessaries`, error);
      serviceResponse.addServerError("Failed to create Admin due to technical difficulties");
    }
    return serviceResponse;
  }


export async function updateAccessaries(item){
    logger.info(`${TAG}.updateAccessaries() ==> `);
    const serviceResponse = new ServiceResponse(
      HttpStatusCodes.CREATED,
      "",
      false
    );
    try {
      const res = await extraItemsDB.updateAccessaries({...item});
      const data = { ...res };
  
      serviceResponse.data = {...data};
  } catch (error) {
      logger.error(`ERROR occurred in ${TAG}.updateAccessaries`, error);
      serviceResponse.addServerError("Failed to create Admin due to technical difficulties");
    }
    return serviceResponse;
  }