import { QueryTypes } from "sequelize";
import { executeQuery } from "src/database/helpers/sql.query.util";
import logger from "src/logger";

const TAG = 'data_stores_mysql_lib_user_Theater'
export async function bookingSlots(data) {
    logger.info(`${TAG}.bookingSlots()`);
    try {
      let userInsertQuery = `
      INSERT INTO public."BOOKING_SLOTS" (theater_id, start_time, end_time, booked_date, is_booked)
VALUES (:theaterId, :startTime, :endTime, :bookedDate);`;
      await executeQuery(userInsertQuery, QueryTypes.INSERT, {
        ...data,
      });
      return {...data};
  
    } catch (error) {
      logger.error(`ERROR occurred in ${TAG}.bookingSlots()`, error);
      throw error;
    }
  }