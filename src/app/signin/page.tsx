'use client'

import { useGetInput } from "@/hooks/useGetInput"

export default function SignInPage() {
  const { inputs, handleGetInput } = useGetInput()

  
  return(
    <form onSubmit={e => {
      e.preventDefault()
      console.log('inputs: ', inputs)
    }}>
      <div>
        <label htmlFor=""></label>
        <input
          id="emailSignIn" 
          type="email" 
          onChange={e => handleGetInput({key: 'email', value: e.target.value})}/>
      </div>
      <div>
        <label htmlFor=""></label>
        <input type="text" />
      </div>

      <button type="submit">Sign In</button>
    </form>
  )
}