import dotenv from "dotenv"
import AppError from "src/models/lib/appError"
import { toNumber,isNull } from "../utils/utils"
dotenv.config()

//JWT TOKEN
export const JWT_ACCESS_TOKEN_SECRET = process.env.JWT_ACCESS_TOKEN_SECRET ?? 'careerpediaaccesstkn'
export const JWT_REFRESH_TOKEN_SECRET = process.env.JWT_REFRESH_TOKEN_SECRET || 'careerpediareftkn';
export const JWT_ACCESS_TOKEN_EXPIRY_TIME = 2 * 60 * 60
export const JWT_REFRESH_TOKEN_EXPIRY_TIME = 30 * 24 * 60 * 60
export const OTP_EXPIRY_TIME = 600


export const API_CALL_LOG_FORMAT = process.env.API_CALL_LOG_FORMAT ??
    ':remote-addr - :remote-user [:date[clf]] ":method :url HTTP/:http-version" :status :res[content-length]'
    export const AES_ENC_KEY = process.env.ASE_ENC_KEY ?? 'bf3c199c2470we477d907b1e0917c17c'

    
export const LOG_LEVEL = process.env?.LOG_LEVEL ?? 'debug'
export const PORT = process.env.PORT ?? 3307
export const post_url=process.env.POSTRE_URL || "";

export const checkEnv=async()=>{
    const mandatoryFields=["POSTRE_URL"]
    mandatoryFields.forEach((field)=>{
        if (isNull(process.env[field])) {
            throw new AppError(`Required configuration '${field}' is missing`)
          }
    })


}
