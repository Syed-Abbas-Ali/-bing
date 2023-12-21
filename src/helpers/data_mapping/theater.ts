import logger from "src/logger"
import { ITheater, Theater, TheaterUpadte } from "src/models/interfaces/theater"

export function TheaterDataMapping (payload: any): ITheater{
    logger.info('helpers.data_mapping.TheaterDataMapping()')
    try {
      if (payload != null && payload !== undefined) {
        return new Theater(
            payload.theaterName,
            payload.details,
            payload.price,
            payload.noOfPersons,
            payload.extraPersonCost
        )
      }
      return payload
    } catch (error) {
      logger.error('ERROR occurred in helpers.data_mapping.TheaterDataMapping()')
      throw error
    }
  }

export function TheaterUpdateDataMapping (payload: any): ITheater{
    logger.info('helpers.data_mapping.TheaterDataMapping()')
    try {
      if (payload != null && payload !== undefined) {
        return new TheaterUpadte(
            payload.theaterName,
            payload.details,
            payload.price,
            payload.noOfPersons,
            payload.extraPersonCost,
            payload.uid
        )
      }
      return payload
    } catch (error) {
      logger.error('ERROR occurred in helpers.data_mapping.TheaterDataMapping()')
      throw error
    }
  }