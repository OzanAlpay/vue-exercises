import axios from 'axios'
import NProgress from 'nprogress'

const apiClient = axios.create({
  baseURL: 'http://localhost:3000',
  withCredentials: 'false',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})

apiClient.interceptors.request.use(config => {
  NProgress.start()
  return config
})

apiClient.interceptors.response.use(response => {
  NProgress.done()
  return response
})
/*
Caveats:
1 - Not Optimal for Multiple API Calls. --> Solution loading.js Vuex module
2 - Template get loaded before API call is returned

Interceptors good for:
1 - On request to set authorization tokens.
2 - On Response to format or filter data before it reaches into your app.
3 - Catch 401 Responses
*/
export default {
  getEvents(perPage, page) {
    return apiClient.get('/events?_limit=' + perPage + '&_page=' + page)
  },
  getEvent(id) {
    return apiClient.get('/events/' + id)
  },
  postEvent(event) {
    return apiClient.post('/events', event)
  }
}
