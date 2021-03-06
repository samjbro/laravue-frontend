import {http} from '@/services';

export const userStore = {
    login(email, password) {
        return new Promise((resolve, reject) => {
            http.post('login', {email, password}, ({data}) => {
                resolve(data);
            }, error => reject(error))
        });
    },

    logout() {
        return new Promise((resolve, reject) => {
            http.delete('logout', {}, ({data}) => {
                resolve(data);
            }, error => {
                console.log('logout failed');
                console.log(error);
                reject(error)
            });
        })
    }
};