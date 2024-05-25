import axios from "axios";
import toast from "react-hot-toast";
import { API } from "./api";

export const sendEmailApi = async (values) => {
  try {
    const response = await axios.post(`${API}/api/v1/contact/send`, values);
    if (response.status === 200) {
      toast.success(`${response.data.message}`);
    }
    return response.data;
  } catch (error) {
    //console.error("API error:", error);
    toast.error("Error While sending emails");
    throw error;
  }
};
export const sendEmailWithRegistration = async (values) => {
  try {
    const response = await axios.post(
      `https://send-pdf-email.vercel.app/api/v1/send-pdf-email`,
      values,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    if (response.status === 200) {
      toast.success(`${response.data.message}`);
      setTimeout(() => {
        window.location.reload();
      }, 2000);
    }
    return response.data;
  } catch (error) {
    //console.error("API error:", error);
    toast.error("Error While sending emails");
    throw error;
  }
};
