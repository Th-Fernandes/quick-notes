'use client'

import { SignActionPage } from "@/components/SignActionPage"
import { useSignIn } from "@/hooks/auth/useSignIn";
import { useGetInput } from "@/hooks/useGetInput"
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function SignInPage() {
  const { inputs, handleGetInput } = useGetInput();
  const { signIn, error } = useSignIn();
  const router = useRouter();

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const { email, password } = inputs.current;
    signIn({ email, password });
    if(!error.exists) router.push('/posts')
  }

  return(
    <SignActionPage>
      
      <form onSubmit={handleSubmit}>
        <small className="text-red-400 text-center block">{error.exists && error.message}</small>
        <div className="mb-4">
          <label className="block text-white" htmlFor="signInEmail">E-mail</label>
          <input
            onChange={e => handleGetInput({key: 'email', value: e.target.value})}
            id="signInEmail" 
            type="email"
            className="w-full rounded-md " 
          />
        </div>
        <div className="mb-5">
          <label className="block text-white" htmlFor="signInPassword">Senha</label>
          <input 
            onChange={e => handleGetInput({key: 'password', value: e.target.value})}
            id="signInPassword"
            type="password" 
            className="w-full rounded-sm"
          />
        </div>

        <button type="submit" className="w-full bg-slate-900 py-1 rounded-md text-white">Sign In</button>
        <small className="block mt-1 text-center"> caso ainda não possua conta, 
          <Link href="/signUp" className="text-blue-200 underline ml-1">faça seu cadastro aqui</Link></small>
      </form>
    </SignActionPage>
  )
}