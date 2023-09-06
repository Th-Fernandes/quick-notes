import {APP_ROUTES} from '@/constants/app-routes'

export function isPrivateRoute(route: string): boolean {
  const privateRoutes = Object.values(APP_ROUTES.private)

  return privateRoutes.includes(route)
}