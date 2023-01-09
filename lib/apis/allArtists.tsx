import axios from "axios";

export const allArtists = async () => {
  const response = await axios.get(
    `${process.env.NEXT_PUBLIC_React_App_Base_Url}/api/artist/getallartist`,
    {
      headers: {
        Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImthcmVlbUBnbWFpbC5jb20iLCJyb2xlIjoic3VwZXJhZG1pbiIsImlkIjoiNjNhNTcwNmNkNmQ3MTU1ZDc1ZTg2NzUyIiwiaWF0IjoxNjcyMzg4Njc2LCJleHAiOjE2NzIzOTU4NzZ9.b5Lmajxbd6k26sJvTI4LBPYyO2En0Xb3Ng8XxIHQ7SM`,
        "Content-Type": "application/json",
        "Content-Length": "<calculated when request is sent>",
      },
    }
  );

  const data = await response.data;
  console.log(data);
  return data;
};

// export const faqData = async () => {
//   const response = await axios.get(
//     `${process.env.NEXT_PUBLIC_React_App_Base_Url}/api/faq/getallfaq`
//   );
//   const data = await response.data.FAQlist;
//   console.log(data);
//   return data;
// };
