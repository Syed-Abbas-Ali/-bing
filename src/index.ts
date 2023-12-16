// import { Express } from "express";
// import initilizeroutes from "./routes";

import express from 'express'
import { initializeApp } from 'src/loaders/index'
import { PORT } from 'src/loaders/config'
import log from './logger'

async function startApplication (): Promise<void> {
  try {
    const app: express.Application = express()
    await initializeApp(app)
    app.listen(PORT, () => {
      log.info(`SERVER listening on PORT:${PORT}`)
    })
  } catch (error) {
    log.error('ERROR in Starting Application', error)
    log.error('Killing Application process')
    process.exit(1)
  }
}
startApplication().catch((err) => log.error('ERROR occurred while starting Application.', err))
