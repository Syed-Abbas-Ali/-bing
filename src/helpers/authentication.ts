import jsonwebtoken from 'jsonwebtoken'
import {
  JWT_ACCESS_TOKEN_SECRET,
  JWT_ACCESS_TOKEN_EXPIRY_TIME,
  JWT_REFRESH_TOKEN_SECRET,
  JWT_REFRESH_TOKEN_EXPIRY_TIME, OTP_EXPIRY_TIME
} from 'src/loaders/config'
import logger from '../logger'
import { IServiceResponse, ServiceResponse } from 'src/models/lib/service_response'
import { APIError } from "src/models/lib/api_error";
import { HttpStatusCodes } from 'src/constants/status_codes'


function generateJWT (payload: object, expiresIn: number, secret: string): string {
  return jsonwebtoken.sign(payload, secret, {
    algorithm: 'HS256',
    expiresIn
  })
}

export function generateAccessToken (payload: object, expiresIn: number = JWT_ACCESS_TOKEN_EXPIRY_TIME) {
  try {
    return generateJWT(payload, expiresIn, JWT_ACCESS_TOKEN_SECRET)
  } catch (error) {
    logger.error(`ERROR in login generateAccessToken() => ${error}`)
  }
}

export function verifyAccessToken (token: string): any {
  return jsonwebtoken.verify(token, JWT_ACCESS_TOKEN_SECRET)
}

export async function generateRefreshToken(payload: object, expiresIn = JWT_REFRESH_TOKEN_EXPIRY_TIME) {
  try {
    console.log('JWT_REFRESH_TOKEN_EXPIRY_TIME ------ ', JWT_REFRESH_TOKEN_EXPIRY_TIME)
    console.log('expiresIn ------ ', JWT_REFRESH_TOKEN_EXPIRY_TIME)
    return generateJWT(payload, expiresIn, JWT_REFRESH_TOKEN_SECRET);
  } catch (error) {
    logger.error(`ERROR in login generateRefreshToken() => ${error}`);
  }
}

export const verifyRefreshJWT = async (token: string) => {
  return jsonwebtoken.verify(token, JWT_REFRESH_TOKEN_SECRET);
};

export async function generateOTPToken(payload: object, expiresIn = OTP_EXPIRY_TIME) {
  try {
    console.log('generateOTPToken ------ ', OTP_EXPIRY_TIME)
    console.log('generateOTPToken expiresIn ------ ', OTP_EXPIRY_TIME)
    return generateJWT(payload, expiresIn, JWT_ACCESS_TOKEN_SECRET);
  } catch (error) {
    logger.error(`ERROR in login generateRefreshToken() => ${error}`);
  }
}

export const verifyOTPJWT = async (token: string) => {
  
  try{
    const serviceResponse: IServiceResponse = new ServiceResponse(HttpStatusCodes.CREATED, '', false);
    const decoded=jsonwebtoken.verify(token, JWT_ACCESS_TOKEN_SECRET);
    if(decoded){
      return {...decoded}
    }
  }catch(error){
    return null
  }
 
  return false
};

// export const OTP=async() => {
//   // return otpGenerator.generate(6,{digits:true,alphabets:false,upperCase:false,specialChars:false });
//   return otpGenerator.generate(6, { upperCaseAlphabets: false, specialChars: false });
// };

export const OTP=async() => {
  const min = 100000; // Minimum 6-digit number
  const max = 999999; // Maximum 6-digit number
  const numericOTP = Math.floor(Math.random() * (max - min + 1)) + min;
  return numericOTP.toString(); 
  // return otpGenerator.generate(6, { upperCaseAlphabets: false, specialChars: false });
};

