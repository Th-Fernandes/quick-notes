import { auth } from "@/lib/firebase/auth";
import { User, createUserWithEmailAndPassword,updateProfile } from "firebase/auth";
import React from "react";

interface Credentials {
  email: string;
  password: string;
  username: string;
}

interface Username {
  user: User;
  username: string;
}

export function useSignUp() {
  const [error, setError] = React.useState({
    exists: false,
    message: null
  })

  async function signUp({ email, password, username }:Credentials) {
    const signUp = createUserWithEmailAndPassword(auth, email, password)
      .then(({user}) => {
        setUsernameOnDb({user, username})
        console.log(user)
      })
      .catch(e => catchSignError(e))
  }

  function setUsernameOnDb({user, username}:Username) {
    updateProfile(user, { displayName: username })
  }

  function catchSignError(error:any) {
    setError({ exists: true, message: error.message })
  }

  return {
    signUp,
    error
  }
}