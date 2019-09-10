import * as functions from 'firebase-functions'
// import * as admin from 'firebase-admin'
// import config from 'config'

export const syncIdleFollowersCount = functions
    .region('asia-northeast1')
    .pubsub.schedule('0 * * * *')
    .timeZone('Asia/Tokyo')
    .onRun((_context) => {
        console.log("Hello World!")
    })