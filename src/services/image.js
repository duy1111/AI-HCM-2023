import axios from "../axiosConfig";

export const apiGetImageLimit = (query) => {
    return new Promise(async (resolve, reject) => {
      try {
        const response = await axios({
          method: "get",
          url: "/find-images",
          params:query
          
        });
        resolve(response);
      } catch (e) {
        reject(e);
      }
    });
  };