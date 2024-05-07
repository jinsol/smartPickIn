import firebase from "firebase/compat/app";
import "firebase/compat/database"; // 텍스트 데이터들이 들어갈 자리

const firebaseConfig = firebase.initializeApp({
  apiKey: "AIzaSyCTvnp4jYBnBBMi1Qq6uB5kgpppkQW1tZA",
  authDomain: "starship-e341b.firebaseapp.com",
  databaseURL: "https://starship-e341b-default-rtdb.firebaseio.com",
  projectId: "starship-e341b",
  storageBucket: "starship-e341b.appspot.com",
  messagingSenderId: "243466849905",
  appId: "1:243466849905:web:9a219f2ac19df43b4e55d0",
});

const oDB = firebaseConfig.database();
export const noticeDB = oDB.ref("notice"); // 여기서 products나 carts 는 컬렉션이라고 부름!!
export const productDB = oDB.ref("products");
