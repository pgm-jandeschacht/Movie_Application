import * as admin from 'firebase-admin';
import 'firebase/auth';
import 'firebase/firestore';

admin.initializeApp({
  credential: admin.credential.applicationDefault(),
  databaseURL: 'https://movie-application-6733e.firebaseio.com'
});

// Reference Authentication
const auth = app.auth();

// Reference Firestore
const db = app.firestore();

/*
 * Generate Timestamps
*/
const generateTimestamps = () => {
  return {
    createdAt: Date.now(),
    modifiedAt: null,
    deletedAt: null,
  }
};

/*
* Generate Integer between min and max
*/
const generateValueBetweenMinAndMax = (min, max) => {
  return min + Math.round(Math.random()*(max - min));
}

export {
  admin,
  app,
  auth,
  db,
  generateTimestamps
}