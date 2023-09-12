'use client';

import { useRealtime } from "@/hooks/db/useRealtime";
import React from "react";

interface Post {
  title: string;
  content: string;
}

export function PostsList() {
  const { observeChangesOn, items } = useRealtime();

  React.useEffect(() => {
    observeChangesOn('posts/')
  }, [])

  return (
    <ul className="flex flex-col sm:flex-row gap-4 m-4 max-w-4xl px-4 mx-auto">
      {
        items && items.map((post:Post) => (
          <li 
            className="border border-black rounded-md p-4 sm:w-1/2 cursor-pointer hover:bg-gray-200 transition-colors"
            key={post.title + post.content}
          >
            <h2 className="bold text-lg">
              {post.title}
            </h2>

            <p>
              {post.content}
            </p>

            <footer className="mt-4">
              <small>escrito por: Random_User</small>
            </footer>
          </li>
        ))
      }
    </ul>
  )
}