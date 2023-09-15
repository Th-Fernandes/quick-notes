export const userTokenOperations = {
  get() {
    localStorage.getItem('accessToken');
  },

  storage(token: string) {
    localStorage.setItem('accessToken', token);
  },

  remove() {
    localStorage.removeItem('accessToken');
  }
}