import log from "src/logger";
import { responseBuilder } from "src/helpers/response_builder";
import { IServiceResponse } from "src/models";
import { NextFunction, Response } from "express";
import * as contact from "src/services/User/contactUs"

const TAG = 'controller.admin'

export async function formSubmit (req: any, res: Response, next: NextFunction): Promise<void> {
    try {
      log.info(`${TAG}.formSubmit()`);
      log.debug(`${TAG}.formSubmit() Object = ${JSON.stringify(req.body)}`)
      const authResponse: IServiceResponse = await contact.formSubmit({...req.body})
      responseBuilder(authResponse, res, next, req)
    } catch (error) {
      log.error(`ERROR occurred in ${TAG}.formSubmit() `, error)
      next(error)
    }
  }

export async function getListMessage (req: any, res: Response, next: NextFunction): Promise<void> {
    try {
      log.info(`${TAG}.getListMessage()`);
      log.debug(`${TAG}.getListMessage() Object = ${JSON.stringify(req.body)}`)
      const authResponse: IServiceResponse = await contact.getListMessage()
      responseBuilder(authResponse, res, next, req)
    } catch (error) {
      log.error(`ERROR occurred in ${TAG}.getListMessage() `, error)
      next(error)
    }
  }

export async function getSingleMessage (req: any, res: Response, next: NextFunction): Promise<void> {
    try {
        const {uid}=req.params
      log.info(`${TAG}.getSingleMessage()`);
      log.debug(`${TAG}.getSingleMessage() Object = ${JSON.stringify(req.body)}`)
      const authResponse: IServiceResponse = await contact.getSingleMessage(uid)
      responseBuilder(authResponse, res, next, req)
    } catch (error) {
      log.error(`ERROR occurred in ${TAG}.getSingleMessage() `, error)
      next(error)
    }
  }
