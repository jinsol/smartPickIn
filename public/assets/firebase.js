import firebase from 'firebase/compat/app'
import 'firebase/compat/database';
import 'firebase/compat/storage';

const firebaseConfig = firebase.initializeApp({
    apiKey: "AIzaSyBIzK2NLFRQKgS_2MkUC8PalyLbW8iMgcs",
    authDomain: "smartpickin.firebaseapp.com",
    projectId: "smartpickin",
    storageBucket: "smartpickin.appspot.com",
    messagingSenderId: "712042791380",
    appId: "1:712042791380:web:e428a33ecada4f01d31641",
    measurementId: "G-E0Z3REH9QS"
  });

  const oDB = firebaseConfig.database()
  export const productDB = oDB.ref('products')
  export const cartDB = oDB.ref('carts')
  export const memberDB = oDB.ref('members')
  export const noticeDB = oDB.ref('notice')
  export const reviewDB = oDB.ref('review')
  
  export const oStorage = firebaseConfig.storage();