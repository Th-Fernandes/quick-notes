import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAl9wECzyf9VqzYCPXNp6WEJdQGjGXJxFQ",
  authDomain: "fir-learning-69147.firebaseapp.com",
  projectId: "fir-learning-69147",
  storageBucket: "fir-learning-69147.appspot.com",
  messagingSenderId: "674684015221",
  appId: "1:674684015221:web:7e9fb8efbe6d4d52da9e3c",
  measurementId: "G-6R9XH16VJV",
  databaseURL: "https://fir-learning-69147-default-rtdb.firebaseio.com"
};

export const app = initializeApp(firebaseConfig);