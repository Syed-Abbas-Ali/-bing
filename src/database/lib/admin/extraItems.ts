import { QueryTypes } from "sequelize";
import { executeQuery } from "src/database/helpers/sql.query.util";
import logger from "src/logger";
import { IExtraItems } from "src/models/interfaces/extraItems";
import { ITheater } from "src/models/interfaces/theater";

const TAG = 'data_stores_mysql_lib_user'
export async function addNewAccessaries(user: IExtraItems) {
    logger.info(`${TAG}.addNewAccessaries()`);
    try {
      const data = {
        uid: crypto.randomUUID(),
      };
      let userInsertQuery = `
      INSERT INTO public."EXTRA_ACCESSORIES_ITEMS" (UID, ITEMS_NAME, DETAILS, PRICE, ITEM_TYPE)
      VALUES (:uid, :itemsName, :details, :price, :type);`
      await executeQuery(userInsertQuery, QueryTypes.INSERT, {
        ...data,...user
      });
      return {...data,...user}
    } catch (error) {
      logger.error(`ERROR occurred in ${TAG}.addNewAccessaries()`, error);
      throw error;
    }
  }

  
export async function updateAccessaries(user) {
    logger.info(`${TAG}.updateAccessaries()`);
    try {
      let userInsertQuery = `
      UPDATE public."EXTRA_ACCESSORIES_ITEMS"
      SET 
          ITEMS_NAME = :itemsName,
          DETAILS = :details,
          PRICE = :price,
          ITEM_TYPE = :itemType
      WHERE
          UID = :uid;`;
      return await executeQuery(userInsertQuery, QueryTypes.INSERT, {
        ...user
      });
      
  
    } catch (error) {
      logger.error(`ERROR occurred in ${TAG}.updateAccessaries()`, error);
      throw error;
    }
  }

export async function getListOfAccessaries(type) {
    logger.info(`${TAG}.getListOfAccessaries()`);
    try {
      let userInsertQuery = `
      SELECT *
      FROM public."EXTRA_ACCESSORIES_ITEMS"
      WHERE ITEM_TYPE = :type;
      `;
       const res=await executeQuery(userInsertQuery, QueryTypes.SELECT,{type:type});
       return [...res]
  
    } catch (error) {
      logger.error(`ERROR occurred in ${TAG}.getListOfAccessaries()`, error);
      throw error;
    }
  }

export async function deleteSingleAccessaries(item_uid) {
    logger.info(`${TAG}.deleteSingleAccessaries()`);
    try {
      let Query = `
      DELETE FROM public."EXTRA_ACCESSORIES_ITEMS"
      WHERE UID = :uid;`
      return await executeQuery(Query, QueryTypes.DELETE, {
        uid:item_uid
      });  
    } catch (error) {
      logger.error(`ERROR occurred in ${TAG}.deleteSingleAccessaries()`, error);
      throw error;
    }
  }


  export async function addNewImage(user:any) {
    logger.info(`${TAG}.addNewImage()`);
    try {
      const query = 'INSERT INTO public."IMAGES" (data,user_uid) VALUES (:user,:uid)';
      await executeQuery(query, QueryTypes.INSERT, {
      ...user
      });
      return {...user}
    } catch (error) {
      logger.error(`ERROR occurred in ${TAG}.addNewImage()`, error);
      throw error;
    }
  }


  export async function getImage() {
    logger.info(`${TAG}.getImage()`);
    try {
      const query = ' SELECT * FROM public."IMAGES"';
      return await executeQuery(query, QueryTypes.SELECT);
    } catch (error) {
      logger.error(`ERROR occurred in ${TAG}.getImage()`, error);
      throw error;
    }
  }


  export async function deleteImages(uid) {
    logger.info(`${TAG}.deleteImages()`);
    try {
      const query = ' DELETE FROM public public."IMAGES" WHERE uid=:uid';
      return await executeQuery(query, QueryTypes.DELETE,{uid:uid});
    } catch (error) {
      logger.error(`ERROR occurred in ${TAG}.deleteImages()`, error);
      throw error;
    }
  }