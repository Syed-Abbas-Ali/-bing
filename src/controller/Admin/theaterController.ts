import { NextFunction,Response } from "express";
import { TheaterDataMapping, TheaterUpdateDataMapping } from "src/helpers/data_mapping/theater";
import { responseBuilder } from "src/helpers/response_builder";
import log from "src/logger";
import { IServiceResponse } from "src/models";
import { ITheater } from "src/models/interfaces/theater";
import * as adminTheaterServices from "src/services/admin/adminTheater"


const TAG="controller-admin-theaterController"
export async function addNewTheater (req: any, res: Response, next: NextFunction): Promise<void> {
    try {
      log.info(`${TAG}.addNewTheater()`);
      log.debug(`${TAG}.addNewTheater() Object = ${JSON.stringify(req.body)}`)
    const user : ITheater = TheaterDataMapping(req.body)
      const authResponse: IServiceResponse = await adminTheaterServices.adminTheater({...user})
      responseBuilder(authResponse, res, next, req)
    } catch (error) {
      log.error(`ERROR occurred in ${TAG}.addNewTheater() `, error)
      next(error)
    }
  }

export async function updateTheater (req: any, res: Response, next: NextFunction): Promise<void> {
    try {
      log.info(`${TAG}.updateTheater()`);
      log.debug(`${TAG}.updateTheater() Object = ${JSON.stringify(req.body)}`)
      const {uid}=req.params
      const user : ITheater = TheaterUpdateDataMapping(req.body)
      const authResponse: IServiceResponse = await adminTheaterServices.updateTheater({...user,uid})
      responseBuilder(authResponse, res, next, req)
    } catch (error) {
      log.error(`ERROR occurred in ${TAG}.updateTheater() `, error)
      next(error)
    }
  }

export async function getListOfTheater (req: any, res: Response, next: NextFunction): Promise<void> {
    try {
      log.info(`${TAG}.getListOfTheater()`);
      log.debug(`${TAG}.getListOfTheater() Object = ${JSON.stringify(req.body)}`)
      const authResponse: IServiceResponse = await adminTheaterServices.getListOfTheater()
      responseBuilder(authResponse, res, next, req)
    } catch (error) {
      log.error(`ERROR occurred in ${TAG}.getListOfTheater() `, error)
      next(error)
    }
  }

export async function getSingleTheater (req: any, res: Response, next: NextFunction): Promise<void> {
    try {
      log.info(`${TAG}.getSingleTheater()`);
      log.debug(`${TAG}.getSingleTheater() Object = ${JSON.stringify(req.body)}`)
      const {uid}=req.params
            const authResponse: IServiceResponse = await adminTheaterServices.getSingleTheater(uid)
      responseBuilder(authResponse, res, next, req)
    } catch (error) {
      log.error(`ERROR occurred in ${TAG}.getSingleTheater() `, error)
      next(error)
    }
  }

export async function deleteSingleTheater (req: any, res: Response, next: NextFunction): Promise<void> {
    try {
      log.info(`${TAG}.deleteSingleTheater()`);
      log.debug(`${TAG}.deleteSingleTheater() Object = ${JSON.stringify(req.body)}`)
      const {uid}=req.params
      const authResponse: IServiceResponse = await adminTheaterServices.deleteSingleTheater(uid)
      responseBuilder(authResponse, res, next, req)
    } catch (error) {
      log.error(`ERROR occurred in ${TAG}.deleteSingleTheater() `, error)
      next(error)
    }
  }