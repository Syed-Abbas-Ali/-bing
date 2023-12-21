import * as Joi from 'joi'
import { validate } from './common'
import { ErrorMessages } from 'src/constants/error_constants'

export const adminSignup= async (req, res, next) => {
    const schema = Joi.object().keys({
      firstName: Joi.string().required(),
      lastName: Joi.string().required(),
      email: Joi.string().email().required(),
      password: Joi.string().required().min(8).max(15).messages({
        'any.required': ErrorMessages.IS_REQUIRED.replace('$field', 'password'),
        'any.max': ErrorMessages.INVALID_LENGTH.replace('$field', 'password')
          .replace('$length', '8'),
        'string.pattern': ErrorMessages.INVALID_FIELD.replace('$field', 'password')
      })  
    });
    await validate(schema, req, res, next);
  };

export const adminLogin= async (req, res, next) => {
    const schema = Joi.object().keys({
      email: Joi.string().email().required(),
      password: Joi.string().required().min(8).max(15).messages({
        'any.required': ErrorMessages.IS_REQUIRED.replace('$field', 'password'),
        'any.max': ErrorMessages.INVALID_LENGTH.replace('$field', 'password')
          .replace('$length', '8'),
        'string.pattern': ErrorMessages.INVALID_FIELD.replace('$field', 'password')
      })  
    });
    await validate(schema, req, res, next);
  };

  