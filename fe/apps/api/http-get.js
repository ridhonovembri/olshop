import http from "./http";

const getAllUser = async () => {
  try {
    const response = await http.get("/user/getusers");
    return response.data;
  } catch (e) {
    console.log(e);
    throw e;
  }
};

export default {
  getAllUser,
};
