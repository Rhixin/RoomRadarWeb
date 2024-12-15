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

// GET ALL LISTINGS
export const getAllListings = async () => {
  try {
    const response = await axios.get(
      "http://localhost:5123/api/boarding-houses/view/"
    ); // Use GET if the API supports it
    console.log("Response:", response.data);
    return response.data; // Return the server response
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error; // Re-throw the error for the caller to handle
  }
};
