import { userTokenOperations } from "./userTokenOperations"

export function hasValidAccessToken(): boolean {
  return userTokenOperations.get() != null
}