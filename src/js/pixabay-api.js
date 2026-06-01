import axios from "axios";

const API_KEY = "56104440-fcdbabdb32ae6a10913613c12";
const BASE_URL = "https://pixabay.com/api/";

export async function getImagesByQuery(query) {
  try {
    const response = await axios.get(BASE_URL, {
      params: {
        key: API_KEY,
        q: query,
        image_type: "photo",
        orientation: "horizontal",
        safesearch: true,
        per_page: 200,
      },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};
