import { hasValidAccessToken } from "@/utils/hasValidAccessToken"
import { isPrivateRoute } from "@/utils/isPublicRoute"
import { redirect, usePathname } from "next/navigation"

export function useRedirectUnauthorizedUser() {
  const pathname = usePathname();  

  const isUserUnauthorized = isPrivateRoute(pathname) && !hasValidAccessToken();
  if(isUserUnauthorized) redirect('/signin');
}