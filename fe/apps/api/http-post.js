import http from "./http";

const login = async (user) => {
  try {
    // console.log("api=>", user);
    const response = await http.post("/user/login", user);
    // console.log("response", response);
    return response.data;
  } catch (e) {
    console.log(e);
    throw e;
  }
};

export default {
  login,
};
