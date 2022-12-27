import React from "react";
import HeaderCard from "./Card/HeaderCard";
import style from "./header.module.scss";

const HeaderSection = ({ header }: any) => {
  console.log(header, "header");
  return (
    <div style={{ background: "#F2F2F2" }}>
      <div
        className={style.header}
        style={{
          background: "url(/Background/Header.png)",
          width: "100%",
          height: "450px",
        }}
      >
        <h1>Discover & Collect Artfi NFT</h1>
        <p>NEW OFFERINGS</p>
      </div>
      <div>
        <div
          style={{
            width: "100%",
            marginLeft: "auto",
            marginRight: "auto",
            marginTop: "-150px",
            textAlign:"center"
          }}
        >
          {" "}
          {header.map((headerData: any, index: number) => {
            return (
              <div
                style={{
                  display: "inline-block",
                  marginLeft: "60px",
                  marginBottom: "30px",
                  textAlign:'left'
                }}
                key={index}
              >
                <HeaderCard headerData={headerData} />
              </div>
            );
          })}{" "}
        </div>
      </div>
    </div>
  );
};

export default HeaderSection;
