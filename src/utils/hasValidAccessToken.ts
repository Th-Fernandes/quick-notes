export function hasValidAccessToken(): boolean {
  const accessToken = localStorage.getItem('accessToken')
  return accessToken != null
}