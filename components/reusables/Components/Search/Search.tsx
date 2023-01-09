import * as React from "react";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import Search from "../../../../public/Icons/Search.svg";
import Image from "next/image";

const SearchBar = ({ changeHander, searchInput }: any) => {
  return (
    <Paper
      component="form"
      sx={{
        p: "2px 4px",
        display: "flex",
        alignItems: "center",
        width: 400,
        margin: "0 auto",
        borderRadius: "30px",
      }}
    >
      <IconButton
        type="button"
        sx={{
          p: "10px",
          justifyContent: "center",
          alignContent: "center",
          display: "flex",
        }}
        aria-label="search"
      >
        {/* <SearchIcon /> */}
        {/* <Search /> */}
        <Image src={Search} width={24} height={24} alt="" />
      </IconButton>
      <InputBase
        // value={searchInput}
        onChange={(e) => changeHander(e)}
        sx={{ ml: 1, flex: 1 }}
        placeholder="Search by Artist’s name..."
        inputProps={{ "aria-label": "search google maps" }}
      />
    </Paper>
  );
};
export default SearchBar;
