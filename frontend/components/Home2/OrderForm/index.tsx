/* eslint-disable @next/next/no-img-element */
import React, { useContext, useEffect, useRef } from "react";
import { Input, Select, ActionIcon, Divider, Checkbox } from "@mantine/core";
import { Typography, Button } from "../../reusables2/Atoms";
import { BiMinus, BiPlus } from "react-icons/bi";
import { web3Context } from "../../../context";
import { FormDataInterface } from "../../../types";
import style from "./OrderForm.module.scss";
import Web3Context from "../../../context/Web3Context";

export const OrderForm = ({
  formData,
  setFormData,
  initialPrice,
  unitValueTotal,
}: {
  formData: FormDataInterface;
  setFormData: (data: FormDataInterface) => void;
  initialPrice: number;
  unitValueTotal: number;
}) => {
  const amountRef = useRef<HTMLInputElement>(null);
  const { web3Data } = useContext(Web3Context);
  unitValueTotal = 10000 - formData.amount;
  initialPrice = 1500;
  const [price, setPrice] = React.useState(initialPrice);
  if (price < 0) {
    setPrice(initialPrice);
  }
  // useEffect(() => {
  //   console.log({ formData });
  // });
  return (
    <div className={style.orderForm}>
      <br />
      <Input.Wrapper
        id="wallet-add"
        label="METAMASK WALLET"
        className={style.inputWrapper}
      >
        <Input
          disabled
          readOnly
          required
          value={formData.address}
          placeholder={formData.address}
          className={style.inputBox}
        />
      </Input.Wrapper>
      <Input.Wrapper
        id="email"
        label="EMAIL ADDRESS"
        className={style.inputWrapper}
      >
        <Input
          required
          type={"email"}
          value={formData.email}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setFormData({ ...formData, email: e.target.value });
          }}
          placeholder="Enter your email"
          className={style.inputBox}
        />
      </Input.Wrapper>
      {/* <div className={style.priceWrapper}>
        <Input.Wrapper
          id="Price"
          label="PRICE (PER ARTFI NFT)"
          className={style.inputWrapper}
        >
          <Input
            className={style.inputBox}
            label=""
            required
            searchable
            // value={formData.chain}
            onChange={(res) => {
              if (res) setFormData({ ...formData, chain: res });
            }}
            placeholder="Choose your chain"
            value={"MATIC"}
          />
          <div className={style.chainBox}>
            <img src="/dollar.png/" alt="dollar" />
            USD
          </div>
        </Input.Wrapper>
        <Input.Wrapper id="Price" label="Price" className={style.inputWrapper}>
          <Input
            disabled
            readOnly
            className={style.inputBox}
            value="1500 USD"
            placeholder="Price"
          />
        </Input.Wrapper>
        <div className={style.priceValue}>= ${initialPrice}</div>
      </div> */}
      <div className={style.unitWrapper}>
        <Input.Wrapper id="unit" label="unit" className={style.inputWrapper}>
          <div className={style.unitContent}>
            <Select
              ref={amountRef}
              style={{ flexGrow: 1 }}
              size="md"
              id="input-demo"
              required
              placeholder="Number of NFTs"
              disabled={formData.amount < 0 ? true : false}
              className={style.inputBox}
              data={[
                { label: "1", value: "1" },
                { label: "2", value: "2" },
                { label: "3", value: "3" },
                { label: "4", value: "4" },
                { label: "5", value: "5" },
                { label: "6", value: "6" },
                { label: "7", value: "7" },
                { label: "8", value: "8" },
                { label: "9", value: "9" },
                { label: "10", value: "10" },
                { label: "11", value: "11" },
                { label: "12", value: "12" },
                { label: "13", value: "13" },
                { label: "14", value: "14" },
                { label: "15", value: "15" },
                { label: "16", value: "16" },
                { label: "17", value: "17" },
                { label: "18", value: "18" },
                { label: "19", value: "19" },
                { label: "20", value: "20" },
                { label: "21", value: "21" },
                { label: "22", value: "22" },
                { label: "23", value: "23" },
                { label: "24", value: "24" },
                { label: "25", value: "25" },
                { label: "26", value: "26" },
                { label: "27", value: "27" },
                { label: "28", value: "28" },
                { label: "29", value: "29" },
                { label: "30", value: "30" },
                { label: "31", value: "31" },
                { label: "32", value: "32" },
                { label: "33", value: "33" },
                { label: "34", value: "34" },
                { label: "35", value: "35" },
                { label: "36", value: "36" },
                { label: "37", value: "37" },
                { label: "38", value: "38" },
                { label: "39", value: "39" },
                { label: "40", value: "40" },
                { label: "41", value: "41" },
                { label: "42", value: "42" },
                { label: "43", value: "43" },
                { label: "44", value: "44" },
                { label: "45", value: "45" },
                { label: "46", value: "46" },
                { label: "47", value: "47" },
                { label: "48", value: "48" },
                { label: "49", value: "49" },
                { label: "50", value: "50" },
              ]}
              onChange={(res) => {
                if (res) {
                  setFormData({ ...formData, amount: parseInt(res) });
                  setPrice(initialPrice * parseInt(res));
                }
              }}
            />
            {/* <ActionIcon
              onClick={() => {
                setFormData({ ...formData, amount: formData.amount - 1 });
                setPrice(price - initialPrice);
              }}
              disabled={formData.amount <= 0 ? true : false}
              variant="outline"
            >
              <BiMinus />
            </ActionIcon>
            <ActionIcon
              onClick={() => {
                setFormData({ ...formData, amount: formData.amount + 1 });
                setPrice(price + initialPrice);
              }}
              disabled={formData.amount >= 50 ? true : false}
              variant="outline"
            >
              <BiPlus />
            </ActionIcon> */}
          </div>
        </Input.Wrapper>
      </div>
      <label className={style.label}>PRICE (PER ARTFI NFT)</label>

      <div className={style.totalWrapper}>
        <Typography
          variant="subheading"
          color={"purple"}
          className={style.total}
        >
          TOTAL
        </Typography>
        <div className={style.totalValue}>
          {/* <Typography variant="subheading" color={"black"}>
            MATIC 12.35
          </Typography> */}
          <Typography variant="subheading" color={"black"}>
            $ {price}
          </Typography>
        </div>
      </div>
      <Divider size="sm" className={style.divider} />
      <Checkbox
        // checked={formData.contractSigned}
        required
        onChange={() => {
          if (!formData.contractSigned) {
            web3Data?.library?.eth
              ?.signMessage("I have read and confirmed the Terms of Sale.")
              .then((res: string) => {
                setFormData({ ...formData, contractSigned: true });
                console.log(res);
              })
              .catch((err: any) => {
                setFormData({ ...formData, contractSigned: false });
                console.log(err);
              });
          } else {
            setFormData({ ...formData, contractSigned: false });
          }
        }}
        label="I have read and confirmed the Terms of Sale"
        color="#4527b3"
      />
    </div>
  );
};

export default OrderForm;
