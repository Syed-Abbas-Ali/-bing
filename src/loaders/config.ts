import dotenv from "dotenv"
import {resolve} from "path"
import AppError from "src/models/lib/appError"
import { toNumber,isNull } from "../utils/utils"
dotenv.config()

export const API_CALL_LOG_FORMAT = process.env.API_CALL_LOG_FORMAT ??
    ':remote-addr - :remote-user [:date[clf]] ":method :url HTTP/:http-version" :status :res[content-length]'

    
export const LOG_LEVEL = process.env?.LOG_LEVEL ?? 'debug'
export const PORT = process.env.PORT ?? 3307
export const MYSQL_DATABASE={
    address:process.env.SQL_DATABASE_ADDRESS,
    username:process.env.SQL_DATABASE_USERNAME,
    password:process.env.SQL_DATABASE_PASSWORD,
    db_name:process.env.DATABASE_NAME,
    db_port:process.env.DATABASE_PORT,
    db_pool_size:process.env.DB_POOL_SIZE
}


export const sqlConfig={
    user:MYSQL_DATABASE.username,
    password:MYSQL_DATABASE.password,
    database:MYSQL_DATABASE.db_name,
    server:MYSQL_DATABASE.address,
    port:MYSQL_DATABASE.db_port,
    pool:{
        max:toNumber(MYSQL_DATABASE.db_pool_size),
        min:0,
        idleTimeoutMillis:30000
    },
    options:{
        encrypt:false,
        trustServerCertificate:true
    }
}

export const checkEnv=async()=>{
    const mandatoryFields=["SQL_DATABASE_ADDRESS","SQL_DATABASE_USERNAME","SQL_DATABASE_PASSWORD","DATABASE_NAME"]
    mandatoryFields.forEach((field)=>{
        if (isNull(process.env[field])) {
            throw new AppError(`Required configuration '${field}' is missing`)
          }
    })


}
