// import firebase from 'firebase/app';
import firebase from 'firebase/compat/app'; 
// import 'firebase/firestore';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: process.env.REACT_APP_appKey,
    authDomain: process.env.REACT_APP_authDomain,
    databaseURL: process.env.REACT_APP_databaseURL,
    projectId: process.env.REACT_APP_projectId,
    storageBucket: process.env.REACT_APP_storageBucket,
    messagingSenderId: process.env.REACT_APP_messagingSenderId,
    appId: process.env.REACT_APP_appId
};

const app = firebase.initializeApp(firebaseConfig);

export function getFirebase(){
  return app;
}

export function getFirestore(){
  return firebase.firestore(app)
}

export const generateOrder = (formData, cart, total) => {
  const db = getFirestore();
  const order = db.collection("orders");
  const newOrder = {
    buyer: formData,
    items: cart,
    total: total
  };
  return order.add(newOrder)
}
