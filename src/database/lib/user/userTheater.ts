import { QueryTypes } from "sequelize";
import { executeQuery } from "src/database/helpers/sql.query.util";
import logger from "src/logger";

const TAG = 'data_stores_mysql_lib_user_Theater'
export async function bookingSlots(data) {
    logger.info(`${TAG}.bookingSlots()`);
    let items={
      cake:data && data.cake?data.cake.id:"null",
      decoration:data && data.decoration?data.decoration.id:"null",
      addOns:data && data.addOns?data.addOns.id:"null"
    }
    try {
      let userInsertQuery = `
      INSERT INTO public."BOOKING_SLOTS" (theater_id, booked_date, theater_name, no_of_persons, total_price, cake, add_on, event_decoration, client_email, client_name, client_phone_number, timing_slot_id)
VALUES (:theaterId, :bookedDate, :theaterName, :noOfPersons, :price, :cake, :addOns, :decoration, :customerEmail, :customerName, :phoneNumber, :timeSlotId);`;
      await executeQuery(userInsertQuery, QueryTypes.INSERT, {
        ...data,...items
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