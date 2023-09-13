import { PostsList } from "./components/PostsList";
import { PublishNewPostForm } from "./components/PublishNewPostForm";

export default function PostsPage() {
  return (
    <main>
      <PublishNewPostForm />
      <PostsList />
    </main>
  )
}