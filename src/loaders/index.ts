// import { sqlConnection } from 'data_stores/database'
import { Application } from 'express'
import log from '../logger'
import initializeRoutes from 'src/routes'
import { checkEnv } from 'src/loaders/config' 
import serverLoader from 'src/loaders/server'
// import { s3ConnectionLoader } from './s3_config'

export const initializeApp=async(app:Application):Promise<void>=>{
    try{
        await checkEnv()
        serverLoader(app)  
        initializeRoutes(app)
        // s3ConnectionLoader()
    }
    catch (error) {
        log.error('ERROR occurred in initializeApp().', error)
        throw error
    }
}
