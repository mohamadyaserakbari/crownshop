import { useEffect } from "react";
import { getRedirectResult } from "firebase/auth";
import {
  auth,
  signInWithGooglePopup,
  createUserDocFromAuth,
  signInWithGoogleRedirect,
} from "../utils/firebase/firebase.utils";
import { async } from "@firebase/util";

const SignIn = () => {
  useEffect(async () => {
    const response = await getRedirectResult(auth);
    if (response){
      const userDocRef = await createUserDocFromAuth(response.user);
    }
  }, []);
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocFromAuth(user);
  };

  return (
    <div>
      <h1>Sign In</h1>
      <button onClick={logGoogleUser}>Sign In with Google</button>
      {/*<button onClick={signInWithGoogleRedirect}>
        Sign In with Google Redirect | this is for redirect if you want to use it
      </button>*/}
    </div>
  );
};

export default SignIn;
