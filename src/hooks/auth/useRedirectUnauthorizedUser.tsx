import { hasValidAccessToken } from "@/utils/hasValidAccessToken"
import { isPrivateRoute } from "@/utils/isPublicRoute"
import { usePathname, useRouter } from "next/navigation"

export function useRedirectUnauthorizedUser() {
  const router = useRouter();
  const pathname = usePathname();  
  const isUserUnauthorized = isPrivateRoute(pathname) && !hasValidAccessToken();

  if(isUserUnauthorized) router.push('/signin');
}