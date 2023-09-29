export const userToken = {
  get() {
    return localStorage.getItem('accessToken');
  },

  storage(token: string) {
    localStorage.setItem('accessToken', token);
  },

  remove() {
    localStorage.removeItem('accessToken');
  }
}