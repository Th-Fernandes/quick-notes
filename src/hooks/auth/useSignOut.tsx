import { auth } from "@/lib/firebase/auth";
import { userTokenOperations } from "@/utils/userTokenOperations";
import { signOut as firebaseSignOut } from "firebase/auth";
import { useRouter } from "next/navigation";

export function useSignOut() {
  const router = useRouter();
  
  function signOut() {
    firebaseSignOut(auth);
    userTokenOperations.remove();
    
    router.push('/signin');
  }

  return {
    signOut
  }
}