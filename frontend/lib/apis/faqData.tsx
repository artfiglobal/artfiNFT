import axios from "axios";

export const faqData = async () => {
  const response = await axios.get(
    `${process.env.NEXT_PUBLIC_React_App_Base_Url}/api/faq/getallfaq`
  );
  const data = await response.data.FAQlist
  console.log(data)
  return data;
};
