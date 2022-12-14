import axios from "axios";

export const fetchFeaturedInDate = async () => {
  const response = await axios.get(
    `${process.env.NEXT_PUBLIC_React_App_Base_Url}/media/getallmediapartner`
  );
  const data = await response.data.list;
  return data;
};
