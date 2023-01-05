import React, { useContext } from "react";
import styles from "./getWhitelisted.module.scss";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { Input, Select, ActionIcon, Divider, Checkbox } from "@mantine/core";
import closeIcon from "../../../../public/Icons/closeIcon.svg";
import TextField from "@mui/material/TextField";
// import Web3Context from "../../../context/Web3Context";
import { Button } from "../../../reusables2/Atoms";
import Web3Context from "../../../../context/Web3Context";
import Typography from "../../../reusables2/Atoms/Typography2";
import Image from "next/image";
import Link from "next/link";
import axios from "axios";
const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 480,
  bgcolor: "background.paper",
  //   border: "2px solid #000",
  padding: "50px 40px",
  //   paddingTop:"",
  //   paddingBottom:"",
  //   paddingRight:"",
  //   paddingLeft:"",
  boxShadow: 24,
  height: "422px",
  borderRadius: "20px",

  //   p: 4,
};

const GetWhitelisted = ({
  completePurchase,
  selCnt,
  setFormData,
  formData,
  emailAddress,
  setEmailAddress,
}: any) => {
  const { web3Data } = useContext(Web3Context);
  // console.log(formData, "!formData.contractSigned");
  const [open, setOpen] = React.useState(false);
  // const [emailAddrees, setEmailAddrees] = React.useState("");
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  // console.log(emailAddress, "emailAddrees");

  const handleEmailAddress = (e: any) => {
    setEmailAddress(e.target.value);
  };

  const confirmEmailAddress = async () => {
    try {
      // console.log("make it work");
      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_React_App_Base_Url}/api/whitelist/send-email`,
        { body: emailAddress },
        {
          headers: {
            Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImthcmVlbUBnbWFpbC5jb20iLCJyb2xlIjoic3VwZXJhZG1pbiIsImlkIjoiNjNhNTcwNmNkNmQ3MTU1ZDc1ZTg2NzUyIiwiaWF0IjoxNjcyMzg4Njc2LCJleHAiOjE2NzIzOTU4NzZ9.b5Lmajxbd6k26sJvTI4LBPYyO2En0Xb3Ng8XxIHQ7SM`,
            "Content-Type": "application/json",
            "Content-Length": "<calculated when request is sent>",
          },
        }
      );
      // setIsWhiteListed(true);
    } catch (error) {
      console.log({ error });
    }
  };

  return (
    <div className={styles.getWhitelisted}>
      <Button
        type="submit"
        //   disabled={cellProps.length === 0}
        variant="secondary"
        onClick={handleOpen}
        disabled={selCnt === 0}
        style={{
          padding: "15px 30px",
          marginTop: "40px",
          height: "50px",
          width: "100%",
          borderRadius: "10px",
        }}
        //   onClick={completePurchase}
      >
        Whitelist now
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className={styles.modalContent} sx={style}>
          <button className={styles.modalCloseIcon} onClick={handleClose}>
            <Image
              className={styles.closeIcon}
              width={24}
              height={24}
              src={closeIcon}
              alt="close"
            />
          </button>
          <div
            // className={styles.modalContent}
            style={{
              margin: "0 auto",
              marginBottom: "50px",
              width: "fit-content",
            }}
          >
            <Typography fontWeight="bold" variant="newHeading" color="black">
              Get Whitelisted
            </Typography>
          </div>
          <div className={styles.modalInput}>
            <Typography
              fontWeight="semiBold"
              variant="smallBody"
              color="halfWhite"
            >
              EMAIL ADDRESS
            </Typography>
            <input onChange={handleEmailAddress} type="text" />
          </div>
          <div className={styles.checkBox}>
            <Checkbox
              //   checked={formData.contractSigned}
              required
              onChange={() => {
                if (!formData.contractSigned) {
                  web3Data?.library?.eth
                    ?.signMessage(
                      "I have read and confirmed the Terms of Sale."
                    )
                    .then((res: string) => {
                      setFormData({ ...formData, contractSigned: true });
                      console.log(res);
                    })
                    .catch((err: any) => {
                      setFormData({ ...formData, contractSigned: false });
                      console.log(err);
                    });
                } else {
                  //   console.log("hello world");
                  setFormData({ ...formData, contractSigned: false });
                }
              }}
              label="I have read and confirmed the Terms of Sale"
              color="#4527b3"
            />
          </div>
          <div style={{ width: "fit-content", margin: "0 auto" }}>
            <Button
              type="submit"
              // disabled={!formData.contractSigned}
              variant="primary"
              //   onClick={handleOpen}

              style={{
                padding: "15px 30px",
                height: "68px",
                width: "165px",
                marginTop: "50px",
                borderRadius: "16px",
              }}
              onClick={() => {
                // completePurchase();
                confirmEmailAddress();
              }}
            >
              Whitelist
              {/* <Link href="/email-confirmation"></Link> */}
            </Button>
          </div>
        </Box>
      </Modal>
    </div>
  );
};

export default GetWhitelisted;
