import log from "src/logger";
import { responseBuilder } from "src/helpers/response_builder";
import { IServiceResponse } from "src/models";
import { NextFunction, Response } from "express";
import { AdminLogin, IAdmin } from "src/models/interfaces/admin";
import { AdminDataMapping, AdminLoginDataMapping } from "src/helpers/data_mapping/admin";
import * as adminAuthServises from "src/services/adminServices"


const TAG = 'controller.admin'

export async function adminSignUp (req: any, res: Response, next: NextFunction): Promise<void> {
    try {
      log.info(`${TAG}.adminSignUp()`);
      log.debug(`${TAG}.adminSignUp() Object = ${JSON.stringify(req.body)}`)
    const user : IAdmin = AdminDataMapping(req.body)
    console.log("ccccccccccccc")
    console.log(user)
      const authResponse: IServiceResponse = await adminAuthServises.adminSignUp({...user})
      responseBuilder(authResponse, res, next, req)
    } catch (error) {
      log.error(`ERROR occurred in ${TAG}.adminSignUp() `, error)
      next(error)
    }
  }

  export async function adminLogin (req: any, res: Response, next: NextFunction): Promise<void> {
    try {
      log.info(`${TAG}.adminLogin()`);
      log.debug(`${TAG}.adminLogin() Object = ${JSON.stringify(req.body)}`)

    const user : AdminLogin = AdminLoginDataMapping(req.body)
    const authResponse: IServiceResponse = await adminAuthServises.adminLogin(user)
      responseBuilder(authResponse, res, next, req)
    } catch (error) {
      log.error(`ERROR occurred in ${TAG}.adminLogin() `, error)
      next(error)
    }
  }