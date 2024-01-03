import { QueryTypes } from "sequelize";
import { executeQuery } from "src/database/helpers/sql.query.util";
import logger from "src/logger";

const TAG = 'data_stores_mysql_lib_user_Theater'
export async function bookingSlots(data) {
    logger.info(`${TAG}.bookingSlots()`);
    try {
      let userInsertQuery = `
      INSERT INTO public."BOOKING_SLOTS" (theater_id, start_time, end_time, booked_date, is_booked)
VALUES (:theaterId, :startTime, :endTime, :bookedDate, :is_booked);`;
      await executeQuery(userInsertQuery, QueryTypes.INSERT, {
        ...data,
      });
      return {...data};
  
    } catch (error) {
      logger.error(`ERROR occurred in ${TAG}.bookingSlots()`, error);
      throw error;
    }
  }

  
export async function getListBookedSlots() {
  logger.info(`${TAG}.getListBookedSlots()`);
  try {
    let Query = `
    SELECT * FROM public."BOOKING_SLOTS"`;
    const res=await executeQuery(Query, QueryTypes.SELECT);
    return [...res];

  } catch (error) {
    logger.error(`ERROR occurred in ${TAG}.getListBookedSlots()`, error);
    throw error;
  }
}

  
export async function getSingleBookedSlots(bookedDate) {
  logger.info(`${TAG}.getSingleBookedSlots()`);
  try {
    let Query = `
    SELECT * FROM public."BOOKING_SLOTS" WHERE booked_date=:bookedDate `;
    const res=await executeQuery(Query, QueryTypes.SELECT,{bookedDate:bookedDate});
    return [...res];

  } catch (error) {
    logger.error(`ERROR occurred in ${TAG}.getSingleBookedSlots()`, error);
    throw error;
  }
}

  
export async function deleteSingleBookedSlots(bookedDate) {
  logger.info(`${TAG}.deleteSingleBookedSlots()`);
  try {
    let Query = `
    DELETE FROM public."BOOKING_SLOTS" WHERE booked_date=:bookedDate `;
    const res=await executeQuery(Query, QueryTypes.DELETE,{bookedDate:bookedDate});
    return [...res];

  } catch (error) {
    logger.error(`ERROR occurred in ${TAG}.deleteSingleBookedSlots()`, error);
    throw error;
  }
}