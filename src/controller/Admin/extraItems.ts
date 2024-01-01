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

export async function getSingleItem (req: any, res: Response, next: NextFunction): Promise<void> {
    try {
        const {type,uid}=req.params
      log.info(`${TAG}.getSingleItem()`);
      log.debug(`${TAG}.getSingleItem() Object = ${JSON.stringify(req.body)}`)
      const authResponse: IServiceResponse = await extraItemsServices.getSingleItem({type,uid})
      responseBuilder(authResponse, res, next, req)
    } catch (error) {
      log.error(`ERROR occurred in ${TAG}.getSingleItem() `, error)
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
      const {item_uid}=req.params
      const authResponse: IServiceResponse = await extraItemsServices.updateAccessaries({...req.body,item_uid})
      responseBuilder(authResponse, res, next, req)
    } catch (error) {
      log.error(`ERROR occurred in ${TAG}.updateAccessaries() `, error)
      next(error)
    }
  }


