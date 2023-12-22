import { QueryTypes } from "sequelize";
import { executeQuery } from "src/database/helpers/sql.query.util";
import logger from "src/logger";
import { ITheater } from "src/models/interfaces/theater";

const TAG = 'data_stores_mysql_lib_user'
export async function addNewTheater(user: ITheater) {
    logger.info(`${TAG}.addNewTheater()`);
    try {
      const data = {
        uid: crypto.randomUUID(),
      };
      let userInsertQuery = `
      INSERT INTO public."THEATERS" (UID,THEATER_NAME, DETAILS, PRICE, NO_OF_PERSONS, EXTRA_PERSON_COST)
VALUES (:uid, :theaterName, :details, :price, :noOfPersons, :extraPersonCost);
      `;
      await executeQuery(userInsertQuery, QueryTypes.INSERT, {
        ...data,...user
      });
      return {...data,...user};
  
    } catch (error) {
      logger.error(`ERROR occurred in ${TAG}.addNewTheater()`, error);
      throw error;
    }
  }

  
export async function updateTheater(user: ITheater) {
    logger.info(`${TAG}.updateTheater()`);
    try {
      let userInsertQuery = `
      UPDATE public."THEATERS"
SET
  THEATER_NAME = :theaterName,
  DETAILS = :details,
  PRICE = :price,
  NO_OF_PERSONS = :noOfPersons,
  EXTRA_PERSON_COST = :extraPersonCost
WHERE
  UID=:uid;
      `;
      return await executeQuery(userInsertQuery, QueryTypes.INSERT, {
        ...user
      });
      
  
    } catch (error) {
      logger.error(`ERROR occurred in ${TAG}.updateTheater()`, error);
      throw error;
    }
  }

export async function getListOfTheater() {
    logger.info(`${TAG}.getListOfTheater()`);
    try {
      let userInsertQuery = `
      SELECT * FROM public."THEATERS"`;
      return await executeQuery(userInsertQuery, QueryTypes.SELECT);
       
  
    } catch (error) {
      logger.error(`ERROR occurred in ${TAG}.getListOfTheater()`, error);
      throw error;
    }
  }

export async function getSingleTheater(uid) {
    logger.info(`${TAG}.getSingleTheater()`);
    try {
      const data = {
        uid: crypto.randomUUID(),
      };
      let userInsertQuery = `
      SELECT * FROM public."THEATERS" WHERE uid=:uid`;
      let res= await executeQuery(userInsertQuery, QueryTypes.UPDATE, {
      uid:uid
      });
      return {...res};
  
    } catch (error) {
      logger.error(`ERROR occurred in ${TAG}.getSingleTheater()`, error);
      throw error;
    }
  }

export async function deleteSingleTheater(uid) {
    logger.info(`${TAG}.deleteSingleTheater()`);
    try {
      let Query = `
      DELETE FROM public."THEATERS" WHERE uid=:uid`;
      return await executeQuery(Query, QueryTypes.DELETE, {
        uid:uid
      });
      // return Query;
  
    } catch (error) {
      logger.error(`ERROR occurred in ${TAG}.deleteSingleTheater()`, error);
      throw error;
    }
  }


