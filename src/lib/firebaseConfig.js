import Firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const config = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    databaseURL: process.env.REACT_APP_PROJECT_ID,
    projectId: process.env.REACT_APP_STORAGE_BUCKET,
    storageBucket: process.env.REACT_APP_MESSAGING_SENDER_ID,
    messagingSenderId: process.env.REACT_APP_APP_ID,
    appId: process.env.REACT_APP_MEASUREMENT_ID
};

const firebase = Firebase.initializeApp(config);
const { FieldValue } = Firebase.firestore;

export { firebase, FieldValue };
