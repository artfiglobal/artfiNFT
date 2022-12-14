import axios from "axios";

export const fetchTeamDate = async () => {
  const response = await axios.get(
    `${process.env.NEXT_PUBLIC_React_App_Base_Url}/team/getallteam`
  );
  const data = await response.data.list;
  return data;
};
