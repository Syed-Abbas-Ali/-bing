import { QueryTypes } from "sequelize";
import { executeQuery } from "src/database/helpers/sql.query.util";
import logger from "src/logger";

const TAG = 'data_stores_mysql_lib_user_contactUs'
export async function formSubmit(data) {
    logger.info(`${TAG}.formSubmit()`);
    try {
      let userInsertQuery = `
      INSERT INTO public."CONTACT_US" (full_name, email, phone_number, message)
VALUES (:full_name, :email, :phone_number, :message);`;
      await executeQuery(userInsertQuery, QueryTypes.INSERT, {
        ...data,
      });
      return {...data};
  
    } catch (error) {
      logger.error(`ERROR occurred in ${TAG}.formSubmit()`, error);
      throw error;
    }
  }

export async function getListMessage() {
    logger.info(`${TAG}.getListMessage()`);
    try {
      let Query = `
      SELECT * FROM public."CONTACT_US"`;
      const res=await executeQuery(Query, QueryTypes.SELECT);
      return [...res];
  
    } catch (error) {
      logger.error(`ERROR occurred in ${TAG}.getListMessage()`, error);
      throw error;
    }
}
export async function getSingleMessage(uid) {
    logger.info(`${TAG}.getSingleMessage()`);
    try {
      let Query = `
      SELECT * FROM public."CONTACT_US" WHERE contact_id=:uid`;
      const res=await executeQuery(Query, QueryTypes.SELECT,{uid:uid});
      return [...res];
  
    } catch (error) {
      logger.error(`ERROR occurred in ${TAG}.getSingleMessage()`, error);
      throw error;
    }
  }