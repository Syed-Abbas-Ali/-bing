import { NextFunction, Response } from "express";
import { responseBuilder } from "src/helpers/response_builder";
import log from "src/logger";
import { IServiceResponse } from "src/models";
import * as extraItemsServices from "src/services/admin/imageServices"

const TAG="controller-admin-imagesController-Controller"

export async function addNewImage(req: any, res: Response, next?: NextFunction): Promise<void> {
    try {
      log.info(`${TAG}.addNewImage()`);
      log.debug(`${TAG}.addNewImage() Object = ${JSON.stringify(req.body)}`);
      try {
        const {thumbnail,user_uid}=req.params
        const imageBuffer = { file: { buffer: "" }, ...req };
        if (imageBuffer) {
          if (imageBuffer.file) {
              const authResponse: IServiceResponse = await extraItemsServices.addNewImage({
                user: imageBuffer.file.buffer,
                user_uid,
                thumbnail
              });
              responseBuilder(authResponse, res, next, req);
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