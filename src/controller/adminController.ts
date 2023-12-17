import log from "src/logger";
import { responseBuilder } from "src/helpers/response_builder";
import { IServiceResponse } from "src/models";
import { NextFunction, Response } from "express";
import { IAdmin } from "src/models/interfaces/admin";
import { AdminDataMapping } from "src/helpers/data_mapping/admin";
import * as adminAuthServises from "src/services/adminServices"


const TAG = 'controller.admin'

export async function signupAdmin (req: any, res: Response, next: NextFunction): Promise<void> {
    try {
      log.info(`${TAG}.signupAdmin()`);
      log.debug(`${TAG}.signupAdmin() Object = ${JSON.stringify(req.body)}`)
    const user : IAdmin = AdminDataMapping(req.body)
      const authResponse: IServiceResponse = await adminAuthServises.signupUser({...user})
      responseBuilder(authResponse, res, next, req)
    } catch (error) {
      log.error(`ERROR occurred in ${TAG}.signupAdmin() `, error)
      next(error)
    }
  }

  export async function adminLogin (req: any, res: Response, next: NextFunction): Promise<void> {
    try {
      log.info(`${TAG}.adminLogin()`);
      log.debug(`${TAG}.adminLogin() Object = ${JSON.stringify(req.body)}`)

    const user : IAdmin = AdminDataMapping(req.body)
    // const authResponse: IServiceResponse = await authService.loginAdmin(user)
    //   responseBuilder(authResponse, res, next, req)
    } catch (error) {
      log.error(`ERROR occurred in ${TAG}.adminLogin() `, error)
      next(error)
    }
  }