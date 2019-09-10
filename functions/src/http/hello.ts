import * as functions from 'firebase-functions'
// import * as admin from 'firebase-admin'
// import config from 'config';
import express from 'express'
import cors from 'cors'

const app = express()
app.use(cors({ origin: true }))

app.get('/', (_req, res) => res.send("Hello world."))

export const users = functions.https.onRequest(app)
