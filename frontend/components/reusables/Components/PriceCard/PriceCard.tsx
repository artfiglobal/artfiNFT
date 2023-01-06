import React, { useState } from "react";
// import { Typography } from "../../../reusables2/Atoms";
import { Checkbox } from "@mantine/core";
import style from "./priceCard.module.scss";
import { Container, Typography, Button } from "../../../reusables2/Atoms";
import GetWhitelisted from "../getWhitelisted/getWhitelisted";
import { FormDataInterface } from "../../../../types";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
// import Select, { SelectChangeEvent } from "@mui/material/Select";
import Select from "react-select";
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
  const [checkCurrency, setCheckCurrency] = useState("");
  // console.log(checkCurrency, "check currency");
  // const [age, setAge] = React.useState("");

  const handleChange = (event: any) => {
    setCheckCurrency(event.value as string);
  };
  const options = [
    { value: "usdc", label: "USDC" },
    { value: "usdt", label: "USDT" },
    { value: "matic", label: "MATIC" },
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
        {/* <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Select Currency</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={checkCurrency}
            label="Select Currency"
            onChange={handleChange}
          >
            <MenuItem value="usdc">USDC</MenuItem>
            <MenuItem value="usdt">USDT</MenuItem>
            <MenuItem value="matic">MATIC</MenuItem>
          </Select>
        </FormControl> */}
      </div>
      <div className={style.checkBox}>
        <Button
          type="submit"
          //   disabled={cellProps.length === 0}
          variant="secondary"
          onClick={() => {
            console.log("approved");
          }}
          style={{
            padding: "15px 30px",
            // marginTop: "40px",
            height: "50px",
            width: "120px",
            borderRadius: "10px",
          }}
          //   onClick={completePurchase}
        >
          Approved
        </Button>
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
        checkCurrency={checkCurrency}
      />
    </div>
  );
};

export default PriceCard;
