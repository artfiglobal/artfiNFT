import React, { useEffect, useState } from "react";
import styles from "../../styles/tba.module.scss";
import { useRouter } from "next/router";
import axios from "axios";

const tba = () => {
  const router: any = useRouter();
  console.log(router.query);
  const [id, setId] = useState(router.query.id);
  const [header, setHeader] = useState({});
  useEffect(() => {
    setId(router.query.id);

    axios
      .get(
        `${process.env.NEXT_PUBLIC_React_App_Base_Url}/api/offering/getoffering/${id}`
      )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
  }, [id]);

  return <div></div>;
};

export default tba;
