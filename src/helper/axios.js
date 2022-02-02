import axios from 'axios';

const post=(requestObject)=> {
    console.log("Resonese", requestObject);
    return axios({
        method:requestObject.method,
        url:requestObject.url,
        headers:requestObject.headers,
        data:requestObject.data
    });
};
export default {post};