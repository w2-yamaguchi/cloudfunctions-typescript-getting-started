import * as functions from 'firebase-functions';

exports.hello = functions.https.onCall((data, context) => ({ data, auth: context.auth }));
