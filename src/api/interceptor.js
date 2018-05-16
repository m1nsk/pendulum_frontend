import router from "../router";

export default function interceptor (client) {
  client.interceptors.response.use(function (response) {
    return response;
  }, function (error) {
    if (401 === error.response.status) {
      router.push({name: 'login'})
    } if (500 === error.response.status) {
      router.push({name: 'userProfile'})
    } else {
      return Promise.reject(error);
    }
  })
}
