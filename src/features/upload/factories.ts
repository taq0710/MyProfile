import { axiosRequest } from "utils/axiosRequest";
const factories = {
uploadFile : (file: File) => {
    const formData = new FormData(); 
    formData.append("files", file); 
    return axiosRequest({
      method: "post",
      url: "/upload",
      data: formData, 
      headers: {
        "Content-Type": "multipart/form-data", 
      },
    });
  },}
  export default factories