import log from "src/logger";
import { responseBuilder } from "src/helpers/response_builder";
import { IServiceResponse } from "src/models";
import { NextFunction, Response } from "express";
import * as theater from "src/services/User/userTheater"

const TAG = 'controller.admin'

export async function bookingSlots (req: any, res: Response, next: NextFunction): Promise<void> {
    try {
      log.info(`${TAG}.bookingSlots()`);
      log.debug(`${TAG}.bookingSlots() Object = ${JSON.stringify(req.body)}`)
      const {theaterUid}=req.params
      const authResponse: IServiceResponse = await theater.bookingSlots({...req.body,theaterUid})
      responseBuilder(authResponse, res, next, req)
    } catch (error) {
      log.error(`ERROR occurred in ${TAG}.bookingSlots() `, error)
      next(error)
    }
  }

export async function getListBookedSlots(req: any, res: Response, next: NextFunction): Promise<void> {
    try {
      log.info(`${TAG}.getListBookedSlots()`);
      log.debug(`${TAG}.getListBookedSlots() Object = ${JSON.stringify(req.body)}`)
      const authResponse: IServiceResponse = await theater.getListBookedSlots()
      responseBuilder(authResponse, res, next, req)
    } catch (error) {
      log.error(`ERROR occurred in ${TAG}.getListBookedSlots() `, error)
      next(error)
    }
  }

  export async function getSingleBookedSlots (req: any, res: Response, next: NextFunction): Promise<void> {
    try {
        const {bookedDate}=req.params
      log.info(`${TAG}.getSingleBookedSlots()`);
      log.debug(`${TAG}.getSingleBookedSlots() Object = ${JSON.stringify(req.body)}`)
      const authResponse: IServiceResponse = await theater.getSingleBookedSlots(bookedDate)
      responseBuilder(authResponse, res, next, req)
    } catch (error) {
      log.error(`ERROR occurred in ${TAG}.getSingleMessage() `, error)
      next(error)
    }
  }


  
  export async function getBookedTIming (req: any, res: Response, next: NextFunction): Promise<void> {
    try {
        const {bookedDate,theaterUid}=req.params
      log.info(`${TAG}.getBookedTIming()`);
      log.debug(`${TAG}.getBookedTIming() Object = ${JSON.stringify(req.body)}`)
      const authResponse: IServiceResponse = await theater.getBookedTIming({bookedDate,theaterUid})
      responseBuilder(authResponse, res, next, req)
    } catch (error) {
      log.error(`ERROR occurred in ${TAG}.getBookedTIming() `, error)
      next(error)
    }
  }

  export async function deleteSingleBookedSlots (req: any, res: Response, next: NextFunction): Promise<void> {
    try {
        const {bookedDate}=req.params
      log.info(`${TAG}.getSingleBookedSlots()`);
      log.debug(`${TAG}.getSingleBookedSlots() Object = ${JSON.stringify(req.body)}`)
      const authResponse: IServiceResponse = await theater.deleteSingleBookedSlots(bookedDate)
      responseBuilder(authResponse, res, next, req)
    } catch (error) {
      log.error(`ERROR occurred in ${TAG}.getSingleMessage() `, error)
      next(error)
    }
  }
