import axios from '../axiosConfig';

export const apiGetTextLimit = (query) => {
    return new Promise(async (resolve, reject) => {
        try {
            const response = await axios({
                method: 'get',
                url: '/text-search',
                params: query,
            });
            resolve(response);
        } catch (e) {
            reject(e);
        }
    });
};
export const apiGetOcrSearch = (query, data) => {

    return new Promise(async (resolve, reject) => {
      try {
        console.log('dataa',data)

        const response = await axios({
          method: 'post',
          url: '/ocr-search',
          params: query, // Gửi truy vấn tìm kiếm qua param,
          data: data
        });
        resolve(response);
      } catch (e) {
        reject(e);
      }
    });
  };
  
export const apiGetImageSearch = (query) => {
    return new Promise(async (resolve, reject) => {
        try {
            const response = await axios({
                method: 'get',
                url: '/image-search',
                params: query,
            });
            resolve(response);
        } catch (e) {
            reject(e);
        }
    });
};

export const apiGetSegmentSearch = (query) => {
    return new Promise(async (resolve, reject) => {
        try {
            const response = await axios({
                method: 'get',
                url: '/segment-search',
                params: query,
            });
            resolve(response);
        } catch (e) {
            reject(e);
        }
    });
};

export const apiGetObjectDetection = (query,data) => {
    return new Promise(async (resolve, reject) => {
        try {
            const response = await axios({
                method: 'post',
                url: '/object-detection',
                params: query,
                data:data
            });
            resolve(response);
        } catch (e) {
            reject(e);
        }
    });
};

export const SubmitPath = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            const response = await axios({
                method: 'post',
                url: '/submit',
                data:data
            });
            resolve(response);
        } catch (e) {
            reject(e);
        }
    });
};