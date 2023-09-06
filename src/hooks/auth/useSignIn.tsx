import { auth } from "@/lib/firebase/auth";
import { User, UserCredential, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import React from "react";

interface Credentials {
  email: string;
  password: string;
}


export function useSignIn() {
  const [signedInUser, setSignedInUser] = React.useState<User | null>(null);
  const [error, setError] = React.useState({
    exists: false,
    message: null
  })

  async function signIn({ email, password }:Credentials) {
    const signIn = signInWithEmailAndPassword(auth, email, password);
    catchSignErrorOn(signIn);
  }

  function catchSignErrorOn(sign:Promise<UserCredential>) {
    sign.catch(error => {
      setError({ exists: true, message: error.message })
    })
  }

  function getSignedInUser() {
    if(!signedInUser) 
      onAuthStateChanged(auth, user => {
        setSignedInUser(user)
      })
  
    return { signedInUser };
  }

  return {
    error,
    signIn,
    getSignedInUser
  }
}