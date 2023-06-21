// // Для роботи із firebase обовʼязково треба ініціалізувати проект
import { initializeApp } from "firebase/app";
// // Функція для підключення авторизації в проект
import { getAuth } from "firebase/auth";
// // Функція для підключення бази даних у проект
import { getFirestore } from "firebase/firestore";
// // Функція для підключення сховища файлів в проект
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyA1aIGeteOjXMSnlgV-N7sEuYHvdWboKzk",
  authDomain: "react-native-screens-a8d78.firebaseapp.com",
  projectId: "react-native-screens-a8d78",
  storageBucket: "react-native-screens-a8d78.appspot.com",
  messagingSenderId: "1086616435907",
  appId: "1:1086616435907:web:49443e27bd196f0f0b3676",
  measurementId: "G-Y1QF3Z572S",
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);