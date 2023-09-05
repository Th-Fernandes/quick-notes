"use client"

import { SignActionPage } from "@/components/SignActionPage";
import { useSignUp } from "@/hooks/auth/useSignUp";
import { useGetInput } from "@/hooks/useGetInput";
import { useRouter } from "next/navigation";
import { FormEvent } from "react";

export default function SignUpPage() {
  const { inputs, handleGetInput } = useGetInput();
  const { signUp, error } = useSignUp();
  const router = useRouter();

  function handleSubmit(e:FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const { email, password, username  } = inputs.current
    signUp({ email, password, username })

    if(!error.exists) router.push('/signin')
  }

  return (
    <SignActionPage>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="signUpUsername" className="block text-white">Username</label>
          <input 
            onChange={e => handleGetInput({key: 'username', value: e.target.value})} 
            id="signUpUsername"
            type="text"  
            className="w-full rounded-sm"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="signUpEmail" className="block text-white">E-mail</label>
          <input 
            onChange={e => handleGetInput({key: 'email', value: e.target.value})}
            type="text" 
            id="signUpEmail" 
            className="w-full rounded-sm"
          />
        </div>
        <div className="mb-5">
          <label htmlFor="signUpPassword" className="block text-white">Senha</label>
          <input 
            onChange={e => handleGetInput({key: 'password', value: e.target.value})}
            type="text" 
            id="signUpPassword"
            className="w-full rounded-sm"
          />
        </div>

        <button 
          type="submit" 
          className="w-full bg-slate-900 py-1 rounded-md text-white">
            Cadastrar
        </button>
      </form>
    </SignActionPage>
  )
}