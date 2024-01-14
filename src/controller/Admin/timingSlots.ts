import { NextFunction,Response } from "express";
import { TheaterDataMapping, TheaterUpdateDataMapping } from "src/helpers/data_mapping/theater";
import { responseBuilder } from "src/helpers/response_builder";
import log from "src/logger";
import { IServiceResponse } from "src/models";
import * as Time from "src/services/admin/timeSlots"


const TAG="controller-admin-timingSlots"
export async function addNewTimeSlot (req: any, res: Response, next: NextFunction): Promise<void> {
    try {
      log.info(`${TAG}.addNewTimeSlot()`);
      log.debug(`${TAG}.addNewTimeSlot() Object = ${JSON.stringify(req.body)}`)
    const data= req.body
      const authResponse: IServiceResponse = await Time.addNewTimeSlot({...data})
      responseBuilder(authResponse, res, next, req)
    } catch (error) {
      log.error(`ERROR occurred in ${TAG}.addNewTimeSlot() `, error)
      next(error)
    }
  }


  export async function getTimeSlots (req: any, res: Response, next: NextFunction): Promise<void> {
    try {
      log.info(`${TAG}.getTimeSlots()`);
      log.debug(`${TAG}.getTimeSlots() Object `)
      const authResponse: IServiceResponse = await Time.getTimeSlots()
      responseBuilder(authResponse, res, next, req)
    } catch (error) {
      log.error(`ERROR occurred in ${TAG}.getTimeSlots() `, error)
      next(error)
    }
  }