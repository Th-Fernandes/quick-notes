'use client';

import { useSignIn } from "@/hooks/auth/useSignIn";
import { useRealtime } from "@/hooks/db/useRealtime";
import { useGetInput } from "@/hooks/useGetInput";
import { FormEvent } from "react";

export function PublishNewPostForm() {
  const { handleGetInput, inputs } = useGetInput();
  const { getSignedInUser } = useSignIn();
  const { signedInUser } = getSignedInUser();
  const { postItem } = useRealtime();
  
  function handleNewPostRequest(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    
    const { title, content } = inputs.current;

    postItem(signedInUser!.uid, { title, content });
  }

  return (
    <form onSubmit={handleNewPostRequest} className="max-w-4xl my-4 px-4 mx-auto">
      <h2 className="mb-2 text-lg">Nova publicação</h2>
      <div className="flex flex-col mb-4">
        <label htmlFor="newPostTitle">Título</label>
        <input 
          onChange={e => handleGetInput({key: 'title', value: e.target.value})} 
          className=" border border-black rounded-md  px-3" 
          type="text"  
          id="newPostTitle" 
          required
        />
      </div>
      <div className="flex flex-col mb-4">
        <label htmlFor="newPostContent">Conteúdo</label>
        <textarea 
          onChange={e => handleGetInput({key: 'content', value: e.target.value})}  
          className="resize-none border border-black rounded-md  px-3" 
          id="newPostContent" 
          required
        />
      </div>

      <button className=" p-1 bg-slate-800 text-white hover:bg-slate-600 transition-colors w-full rounded-md max-w-[320px] sm:mx-auto block">Publicar novo post</button>
    </form>
  )
}