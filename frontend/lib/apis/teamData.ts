import axios from "axios";

export const fetchTeamDate = async () => {
  const response = await axios.get(`http://localhost:4200/api/team/getallteam`);
  const data = await response.data.list;
  return data;
};
