export const userTokenOperations = {
  get() {
    return localStorage.getItem('accessToken');
  },

  storage(token: string) {
    return localStorage.setItem('accessToken', token);
  },

  remove() {
    return localStorage.removeItem('accessToken');
  }
}