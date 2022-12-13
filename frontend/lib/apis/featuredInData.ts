import axios from "axios";

export const fetchFeaturedInDate = async () => {
  const response = await axios.get(
    `http://localhost:4200/api/media/getallmediapartner`
  );
  const data = await response.data.list;
  return data;
};
