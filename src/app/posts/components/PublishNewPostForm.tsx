'use client';

import { useSignIn } from "@/hooks/auth/useSignIn";
import { useRealtime } from "@/hooks/db/useRealtime";
import { useGetInput } from "@/hooks/useGetInput";
import { FormEvent } from "react";

export function PublishNewPostForm() {
  const { handleGetInput, inputs } = useGetInput();
  const { getSignedInUser } = useSignIn();
  const { postItem } = useRealtime();
  
  function handleNewPostRequest(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    
    const { signedInUser } = getSignedInUser();
    const { title, content } = inputs.current;

    postItem(signedInUser!.uid, { title, content });
  }

  return (
    <form onSubmit={handleNewPostRequest}>
      <div>
        <label htmlFor="newPostTitle">Título</label>
        <input 
          onChange={e => handleGetInput({key: 'title', value: e.target.value})}  
          type="text"  
          id="newPostTitle" 
          required
        />
      </div>
      <div>
        <label htmlFor="newPostContent">Conteúdo</label>
        <textarea 
          onChange={e => handleGetInput({key: 'content', value: e.target.value})}  
          className="resize-none" 
          id="newPostContent" 
          required
        />
      </div>

      <button>Publicar novo post</button>
    </form>
  )
}