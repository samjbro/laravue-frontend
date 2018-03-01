import axios from 'axios';
import {ls} from '.';
import {event} from '@/utils';
import {forceReloadWindow} from "../utils";

export const http = {
    request(method, url, data, successCb = null, errorCb = null) {
      let apiUrl = process.env.API_URL + '/api/' + url;
      axios({
          method: method.toLowerCase(),
          url: apiUrl,
          data: data,
          headers: {}
      }).then(successCb).catch(errorCb);
    },

    get(url, successCb = null, errorCb = null) {
      return this.request('get', url, {}, successCb, errorCb);
    },

    post(url, data, successCb = null, errorCb = null) {
      return this.request('post', url, data, successCb, errorCb);
    },

    delete(url, data = {}, successCb = null, errorCb = null) {
      return this.request('delete', url, data, successCb, errorCb);
    },

    init() {
        axios.interceptors.request.use(config => {
            config.headers.Authorization = `Bearer ${ls.get('jwt-token')}`;
            return config;
        });

        axios.interceptors.response.use(response => {
            const token = response.data['access_token'];
            token && ls.set('jwt-token', token);
            return response;
        }, error => {
            console.log('http.init failed');
            if (error.response.status === 400 || error.response.status === 401) {
                if (!(error.config.method === 'post' && /\/api\/login\/?$/.test(error.config.url))) {
                    ls.remove('jwt-token');
                    forceReloadWindow();
                }
            }

            return Promise.reject(error);
        })
    }
};