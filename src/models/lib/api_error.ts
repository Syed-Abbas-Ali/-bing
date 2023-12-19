export interface IAPIError {
  message: string
  errorCode: number
  fieldName: string
}

export class APIError implements IAPIError {
  public message: string
  public errorCode: number
  public fieldName: string

  constructor (message: string, errorCode: any, fieldName: any) {
    this.message = message
    this.errorCode = errorCode
    this.fieldName = fieldName
  }
}
