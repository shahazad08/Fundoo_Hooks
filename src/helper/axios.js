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

const get = (requestObject) => {
    console.log("Get Data Result Response", requestObject);
    return axios({
      method: requestObject.method,
      url: requestObject.url,
      headers: requestObject.headers
    });
  };
export default {post, get};