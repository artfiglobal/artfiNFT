import React from "react";
// import { Typography } from "../../../reusables2/Atoms";
import style from "./priceCard.module.scss";
import { Container, Typography, Button } from "../../../reusables2/Atoms";
import GetWhitelisted from "../getWhitelisted/getWhitelisted";
import { FormDataInterface } from "../../../../types";

const PriceCard = ({
  formData,
  setFormData,
  selCnt,
  setPrice,
  completePurchase,
  price,
  emailAddress,
  setEmailAddress,
}: //   unitValueTotal,
{
  formData: FormDataInterface;
  setFormData: (data: FormDataInterface) => void;
  // initialPrice: number;
  //   unitValueTotal: number;
  selCnt: number;
  price: number;
  setPrice: any;
  completePurchase: any;
  emailAddress: string;
  setEmailAddress: any;
}) => {
  return (
    <div className={style.PriceCard}>
      <Typography variant="popup2" color="white">
        <span style={{ opacity: ".7", marginBottom: "12px", display: "block" }}>
          PRICE (PER ARTFI NFT)
        </span>
      </Typography>
      <Typography variant="newHeading" color="white">
        {price}
      </Typography>
      <div className={style.divider}></div>
      <Typography variant="popup2" color="white">
        <div
          style={{
            display: "flex",
            marginBottom: "16px",

            justifyContent: "space-between",
          }}
        >
          <span
            style={{
              opacity: ".7",
              display: "block",
              fontWeight: "500",
            }}
          >
            Picked
          </span>
          <span
            style={{
              opacity: ".7",
              fontWeight: "500",
              display: "block",
            }}
          >
            {selCnt} x $ {price}
          </span>
        </div>
      </Typography>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <Typography variant="newHeading" color="white">
          TOTAL
        </Typography>
        <Typography variant="newHeading" color="white">
          {price != undefined ? price * selCnt : 0}$
        </Typography>
      </div>
      {/* <Button
        type="submit"
        //   disabled={cellProps.length === 0}
        variant="secondary"
        style={{
          padding: "15px 30px",
          marginTop: "40px",
          height: "50px",
          width: "100%",
          borderRadius: "10px",
        }}
          onClick={completePurchase}
      >
        Whitelist now
      </Button> */}
      <GetWhitelisted
        setFormData={setFormData}
        formData={formData}
        selCnt={selCnt}
        emailAddress={emailAddress}
        setEmailAddress={setEmailAddress}
        completePurchase={completePurchase}
      />
    </div>
  );
};

export default PriceCard;
