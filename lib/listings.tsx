import axios from "axios";

//POST or Create a new listing
export const createListing = async (data) => {
  try {
    const response = await axios.post(
      "http://localhost:5123/api/boarding-houses/create-listing/",
      data
    );
    console.log("Response:", response.data);
    return response.data; // Return the server response
  } catch (error) {
    console.error("Error posting data:", error);
    throw error;
  }
};
