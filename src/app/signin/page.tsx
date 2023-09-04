'use client'

import { SignActionPage } from "@/components/SignActionPage"
import { useGetInput } from "@/hooks/useGetInput"

export default function SignInPage() {
  const { inputs, handleGetInput } = useGetInput()


  return(
    <SignActionPage>
      <form onSubmit={e => { e.preventDefault();  console.log(inputs)}}>
        <div>
          <label htmlFor="signInEmail">E-mail</label>
          <input
            onChange={e => handleGetInput({key: 'email', value: e.target.value})}
            id="signInEmail" 
            type="email" 
          />
        </div>
        <div>
          <label htmlFor="signInPassword">Senha</label>
          <input 
            onChange={e => handleGetInput({key: 'password', value: e.target.value})}
            id="signInPassword"
            type="password" 
          />
        </div>

        <button type="submit">Sign In</button>
      </form>
    </SignActionPage>
  )
}