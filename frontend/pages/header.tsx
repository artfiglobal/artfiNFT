import React, { useState } from "react";
import ListSubheader from "@mui/material/ListSubheader";
import styles from "../components/Home/Landing/Landing.module.scss";
import stylesFaq from "../styles/faq.module.scss";
import { Typography } from "../components/reusables/Atoms";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
// import InboxIcon from '@mui/icons-material/MoveToInbox';
// import DraftsIcon from '@mui/icons-material/Drafts';
// import SendIcon from '@mui/icons-material/Send';
import ExpandLess from "@mui/icons-material/ExpandLess";
// import { faqData } from '../lib/apis/faqData';
import { offeringAllData } from "../lib/apis/offeringData";
import ExpandMore from "@mui/icons-material/ExpandMore";
import StarBorder from "@mui/icons-material/StarBorder";
import { Footer, Navigation } from "../components/reusables/Components";
import { Divider } from "@mui/material";
import HeaderSection from "../components/header/HeaderSection";

export async function getStaticProps() {
  const data = await offeringAllData();
  return {
    props: {
      data,
    },
  };
}

interface Props {
  // props: {
  data: {
    artistId: string;
    headerDetails: string;
    IsOnGoingOffering: boolean;
    createdAt: string;
    updatedAt: string;
    annoucmentDetails: [];
    whitelistDetails: [];
    unveilingDetails: [];
    _id: string;
    __v: number;
  }[];
  // };
  isWhite: boolean;
}
const Header = (props: any) => {
  const [header, setHeader] = useState(props.data);
  console.log(header, "jkl");
  return (
    <>
      <Navigation />
      <HeaderSection header={header} />
      <br />
      <Footer display="" />
    </>
  );
};

export default Header;
