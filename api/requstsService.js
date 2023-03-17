import axios, * as others from 'axios';

class RequestsService {

    async getUserData() {
        let response = '';
        try {
            response = await axios.get('https://reqres.in/api/users/2')
        } catch (error) {
            console.error(error)
        }
        return response.data
    }

    async postRequest(url, body) {
        return await axios.post(url, body).then(response => {
           return response
       });
    }
}

export const requestsService = new RequestsService();
