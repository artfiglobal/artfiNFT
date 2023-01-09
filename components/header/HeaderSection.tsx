import React, { useEffect, useState } from "react";
import SearchBar from "../reusables/Components/Search/Search";
import HeaderCard from "./Card/HeaderCard";
import style from "./header.module.scss";

const HeaderSection = ({ header }: any) => {
  console.log(header, "header");
  const [filtered, setFiltered] = useState(header);
  const [searchInput, setSearchInput] = useState("");
  console.log(searchInput, "searchInput");

  const changeHander = (e: any) => {
    const value = e.target.value;
    setSearchInput(value);
  };

  return (
    <div style={{ background: "#F2F2F2" }}>
      <div
        className={style.header}
        style={{
          background: "url(/Background/Header.png)",
          width: "100%",
          height: "450px",
          marginTop: "80px",
        }}
      >
        <h1>Discover & Collect Artfi NFT</h1>
        <SearchBar searchInput={searchInput} changeHander={changeHander} />
        {/* <p>NEW OFFERINGS</p> */}
      </div>
      <div>
        <div
          style={{
            width: "100%",
            marginLeft: "auto",
            marginRight: "auto",
            marginTop: "-150px",
            textAlign: "center",
          }}
        >
          {filtered
            .filter((val: any) => {
              if (searchInput == "") {
                return val;
              } else if (
                val.offeringData.headerDetails.artistName
                  .toLowerCase()
                  .includes(searchInput.toLowerCase())
              ) {
                return val;
              }
            })
            .map((headerData: any, index: number) => {
              return (
                <div className={style.headData} key={index}>
                  <HeaderCard headerData={headerData} />
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default HeaderSection;
