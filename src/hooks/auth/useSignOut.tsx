import { auth } from "@/lib/firebase/auth";
import { signOut as firebaseSignOut } from "firebase/auth";
import { useRouter } from "next/navigation";

export function useSignOut() {
  const router = useRouter()
  function signOut() {
    firebaseSignOut(auth)
    localStorage.removeItem('accessToken')
    
    router.push('/signin')
  }

  return {
    signOut
  }
}