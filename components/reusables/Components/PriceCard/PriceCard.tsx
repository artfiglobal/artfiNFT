import React, { useState } from "react";
import Select from "react-select";
import { ethers } from "ethers";

import style from "./priceCard.module.scss";
import { Typography, Button } from "../../../reusables2/Atoms";
import GetWhitelisted from "../getWhitelisted/getWhitelisted";
import { FormDataInterface } from "../../../../types";
import { USDCADDR, USDTADDR } from "../../../../config";

const PriceCard = ({
  formData,
  setFormData,
  selCnt,
  setPrice,
  completePurchase,
  price,
  emailAddress,
  setEmailAddress,
  setCurrency,
  showApprove,
  doApprove
}: 
{
  formData: FormDataInterface;
  setFormData: (data: FormDataInterface) => void;
  selCnt: number;
  price: number;
  setPrice: any;
  completePurchase: any;
  emailAddress: string;
  setEmailAddress: any;
  setCurrency: any;
  doApprove: any;
  showApprove: boolean;
}) => {
  const handleChange = async (event: any) => {
    setCurrency(event.value as string);
  };

  const options = [
    { value: USDCADDR, label: "USDC" },
    { value: USDTADDR, label: "USDT" },
    { value: ethers.constants.AddressZero, label: "MATIC" },
  ];

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
      <div className={style.checkBox}>
        <Select
          placeholder="Select Currency"
          onChange={handleChange}
          options={options}
        />
      </div>
      <div className={style.checkBox}>
        {showApprove &&
          <Button
            type="submit"
            variant="secondary"
            onClick={() => doApprove()}
            style={{
              padding: "15px 30px",
              height: "50px",
              width: "120px",
              borderRadius: "10px",
            }}
          >
            Approve
          </Button>
        }
      </div>
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
