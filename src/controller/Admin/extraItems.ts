import { NextFunction, Response } from "express";
import { responseBuilder } from "src/helpers/response_builder";
import log from "src/logger";
import { IServiceResponse } from "src/models";
import * as extraItemsServices from "src/services/admin/extraItems"

const TAG="controller-admin-extraItems-Controller"
export async function addNewAccessaries (req: any, res: Response, next: NextFunction): Promise<void> {
    try {
        const {type}=req.params
      log.info(`${TAG}.addNewAccessaries()`);
      log.debug(`${TAG}.addNewAccessaries() Object = ${JSON.stringify(req.body)}`)
      const authResponse: IServiceResponse = await extraItemsServices.addNewAccessaries({...req.body,type})
      responseBuilder(authResponse, res, next, req)
    } catch (error) {
      log.error(`ERROR occurred in ${TAG}.addNewAccessaries() `, error)
      next(error)
    }
  }


export async function getListOfAccessaries (req: any, res: Response, next: NextFunction): Promise<void> {
    try {
        const {type}=req.params
      log.info(`${TAG}.addNewAccessaries()`);
      log.debug(`${TAG}.addNewAccessaries() Object = ${JSON.stringify(req.body)}`)
      const authResponse: IServiceResponse = await extraItemsServices.getListOfAccessaries(type)
      responseBuilder(authResponse, res, next, req)
    } catch (error) {
      log.error(`ERROR occurred in ${TAG}.addNewAccessaries() `, error)
      next(error)
    }
  }

export async function deleteSingleAccessaries (req: any, res: Response, next: NextFunction): Promise<void> {
    try {
        const {item_uid}=req.params
      log.info(`${TAG}.deleteSingleAccessaries()`);
      log.debug(`${TAG}.deleteSingleAccessaries() Object = ${JSON.stringify(req.body)}`)
      const authResponse: IServiceResponse = await extraItemsServices.deleteSingleAccessaries(item_uid)
      responseBuilder(authResponse, res, next, req)
    } catch (error) {
      log.error(`ERROR occurred in ${TAG}.deleteSingleAccessaries() `, error)
      next(error)
    }
  }

export async function updateAccessaries (req: any, res: Response, next: NextFunction): Promise<void> {
    try {
      log.info(`${TAG}.updateAccessaries()`);
      log.debug(`${TAG}.updateAccessaries() Object = ${JSON.stringify(req.body)}`)
      const authResponse: IServiceResponse = await extraItemsServices.updateAccessaries({...req.body})
      responseBuilder(authResponse, res, next, req)
    } catch (error) {
      log.error(`ERROR occurred in ${TAG}.updateAccessaries() `, error)
      next(error)
    }
  }

// export async function addNewImage (req: any, res: Response, next?: NextFunction): Promise<void> {
//     try {
//       log.info(`${TAG}.addNewImage()`);
//       log.debug(`${TAG}.addNewImage() Object = ${JSON.stringify(req.body)}`)
//       try {
//             const imageBuffer = {file:{buffer:""},...req}
//             if(imageBuffer){
//               if(imageBuffer.file){
//                 const authResponse: IServiceResponse = await extraItemsServices.addNewImage({user:imageBuffer.file.buffer,...req.body})
//                 responseBuilder(authResponse, res, next, req)              }
//             }
//             res.status(201).json({ message: 'Image uploaded successfully'});
//           } catch (error) {
//             console.error(error);
//             res.status(500).json({ message: 'Internal Server Error' });
//           }

//     } catch (error) {
//       log.error(`ERROR occurred in ${TAG}.addNewImage() `, error)
//       if(next){
//         next(error)
//       }
      
//     }
//   }
export async function addNewImage(req: any, res: Response, next?: NextFunction): Promise<void> {
  try {
    log.info(`${TAG}.addNewImage()`);
    log.debug(`${TAG}.addNewImage() Object = ${JSON.stringify(req.body)}`);
    try {
      const imageBuffer = { file: { buffer: "" }, ...req };
      if (imageBuffer) {
        if (imageBuffer.file) {
          const authResponse: IServiceResponse = await extraItemsServices.addNewImage({
            user: imageBuffer.file.buffer,
            ...req.body,
          });
          responseBuilder(authResponse, res, next, req);
          // Add return here to exit the function after sending the response
          return;
        }
      }
      res.status(201).json({ message: 'Image uploaded successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  } catch (error) {
    log.error(`ERROR occurred in ${TAG}.addNewImage() `, error);
    if (next) {
      next(error);
    }
  }
}


export async function getImage (req: any, res: Response, next: NextFunction): Promise<void> {
  try {
    log.info(`${TAG}.getImage()`);
    log.debug(`${TAG}.getImage() Object = ${JSON.stringify(req.body)}`)
    const authResponse: IServiceResponse = await extraItemsServices.getImage()
    responseBuilder(authResponse, res, next, req)
  } catch (error) {
    log.error(`ERROR occurred in ${TAG}.getImage() `, error)
    next(error)
  }
}


export async function deleteImages (req: any, res: Response, next: NextFunction): Promise<void> {
  try {
    log.info(`${TAG}.deleteImages()`);
    log.debug(`${TAG}.deleteImages() Object = ${JSON.stringify(req.body)}`)
    const {image_uid}=req.params
    const authResponse: IServiceResponse = await extraItemsServices.deleteImages(image_uid)
    responseBuilder(authResponse, res, next, req)
  } catch (error) {
    log.error(`ERROR occurred in ${TAG}.deleteImages() `, error)
    next(error)
  }
}