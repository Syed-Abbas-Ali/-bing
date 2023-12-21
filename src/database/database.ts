import { Sequelize } from 'sequelize';
import { post_url } from 'src/loaders/config';

let connection;

export const sqlConnection = async () => {
  try {
    if (connection) {
      return connection;
    }

    connection = new Sequelize(post_url, {
      dialect: 'postgres',
      dialectOptions: {
        ssl: {
          require: true,
          rejectUnauthorized: false, // Change this if your PostgreSQL server requires SSL
        },
      },
      pool: {
        max: 10,
        min: 0,
        acquire: 30000,
        idle: 10000,
      },
      logging: false,
    });

    await connection.authenticate();
    console.log("DB connected");
    return connection;
  } catch (error) {
    console.error("Error connecting to the database:", error);
    throw error;
  }
};
