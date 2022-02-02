import AxiosHelper from "../helper/axios";

const register = (data) => {
  let reqobj = {
    method: "post",
    url: "http://localhost:5000/user/register",
    headers: {
      "Content-type": "application/json",
    },
    data: data,
  };
  return AxiosHelper.post(reqobj)
    .then((response) => {
      return response;
    })
    .catch((err) => {
      throw err;
    });
};

const login = (data) => {
  let reqobj = {
    method: "post",
    url: "http://localhost:5000/user/login",
    headers: {
      "Content-type": "application/json",
    },
    data: data,
  };
  return AxiosHelper.post(reqobj)
    .then((response) => {
      return response;
    })
    .catch((err) => {
      throw err;
    });
};

/* eslint import/no-anonymous-default-export: [2, {"allowObject": true}] */
export default { register, login };