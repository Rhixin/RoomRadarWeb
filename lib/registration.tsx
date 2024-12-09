import axios from "axios";

//This is for Tenant and Landlord
export const signUpUser = async (data) => {
  try {
    const response = await axios.post(
      "http://localhost:5123/api/auth/register/",
      data
    );
    console.log("Response:", response.data);
    return response.data; // Return the server response
  } catch (error) {
    console.error("Error posting data:", error);
    throw error;
  }
};

//Logging In
export const logInUser = async (data) => {
  try {
    const response = await axios.post(
      "http://localhost:5123/api/auth/login/",
      data
    );
    console.log("Response:", response.data);
    return response.data; // Return the server response
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};
