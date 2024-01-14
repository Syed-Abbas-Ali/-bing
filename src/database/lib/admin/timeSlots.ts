import { QueryTypes } from "sequelize";
import { executeQuery } from "src/database/helpers/sql.query.util";
import logger from "src/logger";
import { ITheater } from "src/models/interfaces/theater";

const TAG = 'data_stores_mysql_lib_time_slots'
export async function addNewTimeSlot(user) {
    logger.info(`${TAG}.addNewTimeSlot()`);
    try {

      let Query = `
      INSERT INTO public."TIMING_SLOTS" (timing)
VALUES (:timing);
      `;
      await executeQuery(Query, QueryTypes.INSERT, {
        ...user
      });
      return {...user};
  
    } catch (error) {
      logger.error(`ERROR occurred in ${TAG}.addNewTimeSlot()`, error);
      throw error;
    }
  }

  export async function getTimeSlots() {
    logger.info(`${TAG}.getTimeSlots()`);
    try {
      const query = ' SELECT * FROM public."TIMING_SLOTS"';
       let res=await executeQuery(query, QueryTypes.SELECT);
       return [...res]
    } catch (error) {
      logger.error(`ERROR occurred in ${TAG}.getTimeSlots()`, error);
      throw error;
    }
  }