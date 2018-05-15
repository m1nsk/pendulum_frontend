import axios from 'axios'
export const API_HOST = 'http://localhost'
export const API_PORT = '8080'

axios.interceptors.response.use((response) => { // intercept the global error
  console.log("response is", response);
  return response
}, (error) => {
  console.log("errors are", error);
  if (error.response.status === 401) {
    // if the error is 401 and hasent already been retried
    alert("You will need to login to access this");
    window.location.href = '/auth/login'
    return
  }
  if (error.response.status === 404) {
    window.location.href = '/'
    return
  }
});
