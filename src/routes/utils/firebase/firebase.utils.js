import { initializeApp } from 'firebase/app';
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore'


// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAfowUk2_bs9gL-sjwtETH9wB1_I-WrBu8",
    authDomain: "crown-shop-db-be788.firebaseapp.com",
    projectId: "crown-shop-db-be788",
    storageBucket: "crown-shop-db-be788.appspot.com",
    messagingSenderId: "849985651844",
    appId: "1:849985651844:web:2121614cf778691cc72ed1"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

// GoogleAuthProvider() is a class from google authniziation and i shold say provider is going to use for other auth too. 
const provider = new GoogleAuthProvider();

provider.setCustomParameters({
    prompt: "select_account" // We say to user you should choose an account
});


export const auth = getAuth(); // Create instanse and communicate with firebase too.
export const signInWithGooglePopup = () => signInWithPopup(auth, provider); // Export SignIn with popup.


export const db = getFirestore();

// access to database
export const createUserDocFromAuth = async (userAuth) => {
    const userDocRef = doc(db, 'users', userAuth.uid); // doc arguments > 1-Database 2-Collection 3-identifier
    const userSnapshot = await getDoc(userDocRef); // Snap Shot is this data > return user identifier and exists(t/f)
    // if user data desn't exists: Create / set the document with the data from userAuth in my collection
    if (!userSnapshot.exists()) {
        const { displayName, email } = userAuth;
        const createdAt = new Date(); // this createdAt is for we want to know when user SignIn
        try {
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt
            });
        } catch (error) {
            console.log('error creating the user', error.message);
        }
    }

    // if user data exists: return userDocRef
    return userDocRef;
}