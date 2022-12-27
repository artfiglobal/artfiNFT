import axios from "axios";

export const offeringData = async () => {
  const response = await axios.get(
    `${process.env.NEXT_PUBLIC_React_App_Base_Url}/api/offering/getallongoingtrueoffering`
  );
  // console.log(response?.data, "response new offering object structure");
  const data = await response.data;

  return data.data;
};

export const offeringAllData = async () => {
  const response = await axios.get(
    `${process.env.NEXT_PUBLIC_React_App_Base_Url}/api/offering/getalloffering`
  );
  const data = await response.data;

  return data.data;
};
