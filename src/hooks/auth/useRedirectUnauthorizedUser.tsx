import { APP_ROUTES } from "@/constants/app-routes";
import { userTokenOperations } from "@/utils/userTokenOperations";
import { headers } from "next/headers";
import { redirect, usePathname } from "next/navigation";

export function useRedirectUnauthorizedUser() {
  const pathname = usePathname();  

  const isUserUnauthorized = isPrivateRoute(pathname) && !hasValidAccessToken();
  if(isUserUnauthorized) redirect('/signin');
}

function isPrivateRoute(route: string): boolean {
  const privateRoutes = Object.values(APP_ROUTES.private)
  return privateRoutes.includes(route)
}

function hasValidAccessToken(): boolean {
  return userTokenOperations.get() != null
}