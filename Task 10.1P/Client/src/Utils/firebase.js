import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword} from 'firebase/auth';
import {getFirestore, doc, getDoc, setDoc} from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyDSTKH6_F8G36EFXHRvHzRQyoq2lNjMFOo",
    authDomain: "deakin-web-app-53715.firebaseapp.com",
    projectId: "deakin-web-app-53715",
    storageBucket: "deakin-web-app-53715.appspot.com",
    messagingSenderId: "364188172432",
    appId: "1:364188172432:web:7592dfb82d85edcb88d815"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);


export const auth = getAuth();
export const db = getFirestore();
export const createUserDocFromAuth = async (userAuth, additionalInfo = {}) => {

    const userDocRef = doc(db, 'users', userAuth.uid);
    console.log(userDocRef)

    const userSnapshot = await getDoc(userDocRef);
    console.log(userSnapshot);
    console.log(userSnapshot.exists());

    if (!userSnapshot.exists()) {
        const { email } = userAuth;
        const createdAt = new Date();
    

    try {
        await setDoc(userDocRef, {
            email,
            createdAt,
            ...additionalInfo
        })
    }
    catch (e) {
        console.log('error in creating ', e.message)
        }
    }

    return userDocRef;
};

export const createAuthUserWithEmailAndPassword = async (email, password) => {
    if (!email || !password) return;
    return createUserWithEmailAndPassword(auth, email, password);

};

export const signInAuthUserWithEmailAndPassword = async (email, password) => {
    if (!email || !password) return;
    return signInWithEmailAndPassword(auth, email, password);

};