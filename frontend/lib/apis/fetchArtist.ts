import axios from "axios";

export const fetchArtistFunction = async ({ params }: any) => {
  // console.log(params);
  const response = await axios.get(
    `${process.env.NEXT_PUBLIC_React_App_Base_Url}/api/artist/getartist/${params}`,
    {
      headers: {
        Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImthcmVlbUBnbWFpbC5jb20iLCJyb2xlIjoic3VwZXJhZG1pbiIsImlkIjoiNjM3ZjE2YjdhZmM4ZDk3ZGMzZWYyZjU4IiwiaWF0IjoxNjcwODE2MDczLCJleHAiOjE2NzM0MDgwNzN9.850__kq6IrHdiqa3J43BL1bN_w3ZLwQOSdmnH4Cokys`,
        "Content-Type": "application/json",
        "Content-Length": "<calculated when request is sent>",
      },
    }
  );

  const data = await response.data;
  return data;
};
