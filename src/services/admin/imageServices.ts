import { HttpStatusCodes } from "src/constants/status_codes";
import logger from "src/logger";
import { ServiceResponse } from "src/models";
import * as extraItemsDB from "src/database/lib/admin/extraItems"
import { getSingleTheater, getSingleTheaterAuth } from "src/database/lib/admin/adminTheater";


const TAG = "services.admin.extraitems";  


export async function addNewImage(user){
    logger.info(`${TAG}.addNewImage() ==> `, user);
    const serviceResponse = new ServiceResponse(
      HttpStatusCodes.CREATED,
      "",
      false
    );
    try {
        const exist=await getSingleTheaterAuth(user.user_uid)
       if(exist.length==0){
        const serviceResponse = new ServiceResponse(
            HttpStatusCodes.BAD_REQUEST,
            "invalid theater id",
            false
          );
          return serviceResponse;
       }
      if(user.thumbnail){
        const res = await extraItemsDB.addNewThambnail({...user,auth_id:exist[0].id,thumbnail:true});
        serviceResponse.message = 'thumbnail image uploaded';
        const data = { ...res };
        serviceResponse.data = data;
      }else{
        const res = await extraItemsDB.addNewImage({...user,auth_id:exist[0].id,thumbnail:false});
        serviceResponse.message = 'image uploaded';
        const data = { ...res };
        serviceResponse.data = data;
      }
  
  } catch (error) {
      logger.error(`ERROR occurred in ${TAG}.addNewImage`, user);
      serviceResponse.addServerError("Failed to create Admin due to technical difficulties");
    }
    return serviceResponse;
  }
  
    
  export async function getImage(){
    logger.info(`${TAG}.addNewImage() ==> `, );
    const serviceResponse = new ServiceResponse(
      HttpStatusCodes.CREATED,
      "",
      false
    );
    try {
  
      const res = await extraItemsDB.getImage();
      serviceResponse.message = 'image list';
      const data = { ...res };
  
      serviceResponse.data = data;
  } catch (error) {
      logger.error(`ERROR occurred in ${TAG}.addNewImage`, );
      serviceResponse.addServerError("Failed to create Admin due to technical difficulties");
    }
    return serviceResponse;
  }
  
    
  export async function deleteImages(uid){
    logger.info(`${TAG}.addNewImage() ==> `, );
    const serviceResponse = new ServiceResponse(
      HttpStatusCodes.CREATED,
      "",
      false
    );
    try {
  
      const res = await extraItemsDB.deleteImages(uid);
      serviceResponse.message = 'image deletd';
      const data = { ...res };
  
      serviceResponse.data = data;
  } catch (error) {
      logger.error(`ERROR occurred in ${TAG}.deleteImages`, );
      serviceResponse.addServerError("Failed to create Admin due to technical difficulties");
    }
    return serviceResponse;
  }