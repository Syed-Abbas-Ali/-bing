export default class appError extends Error {
    additionalInfo?:string
    constructor (message:any,additionalInfo?:any){
        super(message)
        this.additionalInfo=additionalInfo
    }
}