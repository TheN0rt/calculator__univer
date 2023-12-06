import { initializeApp } from "firebase/app";
import { getDatabase, ref, set} from "firebase/database";
import { genUUID } from "../helpers/helper";

const firebaseConfig = {
  apiKey: "AIzaSyBNEcHD6kgars56N75qS3m70dKgVCumKvg",
  authDomain: "calculator-c6b80.firebaseapp.com",
  databaseURL: "https://calculator-c6b80-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "calculator-c6b80",
  storageBucket: "calculator-c6b80.appspot.com",
  messagingSenderId: "662701781198",
  appId: "1:662701781198:web:7caeb8db3502e512d2609f"
};

initializeApp(firebaseConfig);
const db = getDatabase();
export const setCalculator = async (data) => {
    console.log(db)
   const userId = genUUID()
   const DATA = {
     userId,
     data 
   }
   
  set(ref(db, '/calculation/' + userId), DATA)
}