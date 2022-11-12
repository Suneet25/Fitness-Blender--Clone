import axios from "axios";

function FetchLoginData({ email, password }) {
  let config = {
    method: "post",
    url: "https://reqres.in/api/login",
    data: {
      email: email,
      password: password,
    },
  };
  return axios(config);
}

export default FetchLoginData;
