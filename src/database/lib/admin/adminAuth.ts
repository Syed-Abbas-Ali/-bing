import { QueryTypes } from "sequelize";
import { executeQuery } from "src/database/helpers/sql.query.util";
import { hashPassword } from "src/helpers/encryption";
import logger from "src/logger";
import { IAdmin } from "src/models/interfaces/admin";

const TAG = 'data_stores_mysql_lib_user'
export async function adminSignUp(user: IAdmin) {
    logger.info(`${TAG}.adminSignUp()`);
    try {
      const hashedPassword = await hashPassword(user.password);
      const data = {
        uid: crypto.randomUUID(),
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        password:hashedPassword
      };
      let userInsertQuery = `
        INSERT INTO public."ADMIN_AUTH" (UUID, FIRST_NAME, LAST_NAME, EMAIL, PASSWORD)
        VALUES (:uid, :firstName, :lastName, :email, :password)
      `;
      await executeQuery(userInsertQuery, QueryTypes.INSERT, {
        ...data,
      });
      return data;
  
    } catch (error) {
      logger.error(`ERROR occurred in ${TAG}.adminSignUp()`, error);
      throw error;
    }
  }


  export async function checkEmailExist(email: string) {
    try {
      logger.info(`${TAG}.checkEmailExist()  ==>`, email);
  
      let query = 'select * from public."ADMIN_AUTH" where EMAIL=:email ';
      const [user] = await executeQuery(query, QueryTypes.SELECT, {
        email
      });
      return user;
    } catch (error) {
      logger.error(`ERROR occurred in ${TAG}.checkEmailExist()`, error);
      throw error;
    }
  }