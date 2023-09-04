import { auth } from "@/lib/firebase/auth";
import { UserCredential, signInWithEmailAndPassword } from "firebase/auth";
import React from "react";

interface Credentials {
  email: string;
  password: string;
}


export function useSignIn() {
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
      setError(() => {
        return { exists: true, message: error.message }
      })
    })
  }

  return {
    error,
    signIn
  }
}