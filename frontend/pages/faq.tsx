import * as React from 'react';
import ListSubheader from '@mui/material/ListSubheader';
import styles from "../components/Home/Landing/Landing.module.scss";
import stylesFaq from "../styles/faq.module.scss"
import { Typography } from '../components/reusables/Atoms';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
// import InboxIcon from '@mui/icons-material/MoveToInbox';
// import DraftsIcon from '@mui/icons-material/Drafts';
// import SendIcon from '@mui/icons-material/Send';
import ExpandLess from '@mui/icons-material/ExpandLess';
   
import ExpandMore from '@mui/icons-material/ExpandMore';
import StarBorder from '@mui/icons-material/StarBorder';
import { Footer, Navigation } from '../components/reusables/Components';
import { Divider } from '@mui/material';

type questions = {
    question:string,
    answer:string,
    open:boolean
}


const questionsList2:Array<questions> = [{
    question:"Which Web3 wallets are supported for the Artfi NFT public mint?  ",
    answer:`The Artfi public mint supports three Web3 wallets: Metamask, Coinbase and WalletConnect. 
    .`,
    open:false
},
{
    question:"Which network must I set my wallet to for the Artfi NFT public mint? ",
    answer:`The Artfi NFT public mint is taking place exclusively on the Polygon blockchain. Connect your 
    wallet to Polygon Mainnet to participate. `,
    open:false
},
{
    question:"Which digital assets can I use to pay for my Artfi NFT? ",
    answer:`Artfi accepts payment in USDT and MATIC. Both assets must be transferred through the 
    Polygon network.`,
    open:false

},
{
    question:"I have never used cryptocurrency before. How do I purchase an Artfi NFT? ",
    answer:`Artfi NFTs can be easily purchased with a debit or credit card. Simply click on the 
    Crossmint/ACME integration button on the minting page and 
    Arcana, ACME, Crossmint.`,
    open:false

},
{
    question:"How many Artfi NFTs can I reserve during the whitelist process?     ",
    answer:`Each unique wallet address can reserve a maximum of 50 Artfi NFTs at whitelist. 
    `,
    open:false

}
,
{
    question:"Can I buy an Artfi NFT with a debit or credit card?",
    answer:`Yes. Artfi NFTs are supported by Crossmint. Simply click on the “Crossmint” button and enter 
    your debit or credit card information. `,
    open:false

}

,
{
    question:"I am having a technical problem trying to mint an Artfi NFT. Can I receive technical support?",
    answer:`Yes. Please reach out to a mod in the dedicated channel #technicalsupport of our Discord 
    server. They will be happy to assist you. `,
    open:false

}

,
{
    question:"What happens if the NFT collection does not sell out?  ",
    answer:`f the Artfi NFT public mint does not sell out at least 90% of the collection within 30 calendar 
    days of beginning, then the full amount paid for the NFT will be returned to the buyer. If more 
    than 90% but less than 100% of the collection has sold out, Artfi will purchase all of the 
    remaining NFTs to ensure that the collection is completely sold. 
    `,
    open:false

}

,
{
    question:"Where is my Artfi NFT stored? ",
    answer:`The Artfi NFT holder is responsible for self-custodian the Artfi NFT in their web3 wallet of 
    choice. Please exercise best security standards for private key custody. 
    Artfi is a Web3 company that fractionalizes high value works of fine art and sells them to the 
    public as NFTs to be collectively owned, traded and celebrated. The company was founded in 
    2022 by art gallerist and connoisseur Asif Kamal.`,
    open:false

}

,
{
    question:"I Whitelisted for Artfi NFTs but I no longer want to purchase them. Is that OK?",
    answer:`No problem. Whitelisters who do not claim and purchase their NFTs within 10 days of the public 
    mint will have their reserved NFTs reallocated without penalty`,
    open:false

}


]

const questionsList1:Array<questions> = [{
    question:"What is Artfi? ",
    answer:`Artfi is a Web3 company that fractionalizes high value works of fine art and sells them to the 
    public as NFTs to be collectively owned, traded and celebrated. The company was founded in 
    2022 by art gallerist and connoisseur Asif Kamal.`,
    open:false
},
{
    question:"How is my NFT connected to the artwork? ",
    answer:`Artfi is a Web3 company that fractionalizes high value works of fine art and sells them to the 
    public as NFTs to be collectively owned, traded and celebrated. The company was founded in 
    2022 by art gallerist and connoisseur Asif Kamal.`,
    open:false
},
{
    question:"How is my NFT connected to the artwork?  ",
    answer:`Artfi NFTs represent a stake in the underlying artwork. If and when Artfi resells the artwork in 
    the future, the full proceeds of the sale (minus a standard commission fee) will be distributed in 
    equal proportion to the Artfi NFTs which correspond to the artwork in question. `,
    
    open:false

},
{
    question:"How is the public sale price of the NFTs determined?  ",
    answer:`When Artfi fractionalizes a painting as NFTs and offers the NFTs on sale the public, the offer 
    price of the NFTs represent the fair market value of the painting as determined by Artfi and 
    external art market experts. Artfi solely accepts consignments at market value. It does not 
    purchase paintings and then resell (“flip”) them to the public. `,
    open:false

},
{
    question:"I already purchased an Artfi NFT. How is its price determined? ",
    answer:`Once an Artfi NFT has been purchased from the public sale, its price will be determined by the 
    secondary market. An efficient market will recognize the value of the underlying painting and 
    price the Artfi NFTs accordingly. Please be aware that the value of the underlying asset (the 
    artwork), will fluctuate, leading to fluctuations in the price of the corresponding Artfi NFTs. 
    Furthermore, Artfi NFTs will likely trade at either a premium or discount to the value of the 
    underlying asset based on how the market gauges the risks and benefits which come from 
    tokenizing a physical artwork. 
 `,
    open:false

},
{
    question:"Will Artfi resell the artwork I co-own for a profit?",
    answer:`Artfi will use its team of experienced art market professionals to determine the best time to sell 
    the artworks in its collection. The timing of a potential sale is not planned in advance and will 
    depend entirely on market conditions. Artfi’s mandate is to achieve equity market-beating 
    returns for Artfi NFT holders. However, it can make no guarantee of future profits. 
    `,
    open:false

},
{
    question:"How does the Artfi royalty system function?",
    answer:`Artfi NFT holders earn royalties depending on their role in the Artfi ecosystem. For a 
    comprehensive list of current royalties earned by ecosystem participants, visit `,
    open:false

},
{
    question:"Who can sell artwork with Artfi? ",
    answer:`Artfi has a set of highly selective criteria that a work of art must meet in order for it to be 
    considered as a candidate for consignment. An artwork must have a fair market value above $1 
    million, verifiable documentation of authenticity, and record of stellar provenance. It must also 
    be assessed positively by Artfi to have long-term financial viability and to advance the working 
    vision of the Artfi Museum. 
    `,
    open:false

}
,{
    question:"How does Artfi make money?  ",
    answer:`Artfi charges a commission fee to the sellers who consign their artworks for sale through the 
    Artfi fractionalization process. A similar commission-based business model is used by leading 
    art auction houses and galleries. 
    `,
    open:false

}
,{
    question:"What happens once I have acquired an Artfi NFT? ",
    answer:`Artfi will custody the painting in Dubai on behalf of all Artfi NFT holders until the painting is sold 
    at an opportune moment to be determined in the future. At that point in time, Artfi will deliver the 
    proceeds to all Artfi NFT holders. 
    `,
    open:false

},{
    question:"How does the $ARTFI token affect my NFT?  ",
    answer:`The $ARTFI token is an entirely separate asset which trades independently of Artfi NFTs.  
    `,
    open:false

},{
    question:"Where is Artfi incorporated? ",
    answer:`Artfi is incorporated in Saint Vincent and the Grenadines.`,
    open:false

}


]

const Faq = () => {
    const [open, setOpen] = React.useState(true);
    const [ques, setQes] = React.useState(questionsList1)
    const [ques2, setQes2] = React.useState(questionsList2)



    function handleClick(index:any)  {
    console.log(index)
       ques[index].open = !ques[index].open
      setOpen(!open);
    };

    function handleClick2(index:any)  {
        console.log(index)
           ques2[index].open = !ques2[index].open
          setOpen(!open);
        };
  return (
    <>
    <Navigation/>
    <div className={stylesFaq.marginBlock}>
    <div className={stylesFaq.textStyle} >
          <span style={{color:"#6231C8"}}>Frequently </span>
          Asked <br/> Questions
    </div>
    <br/><br/>
    <List
        sx={{ width: '100%', bgcolor: 'background.paper',padding:"0",marginTop:"0" }}
        component="nav"
        aria-labelledby="nested-list-subheader"
    >
       {ques.map((question,index:any)=>{
        return(<>
            
      <div style={{display:"flex",margin:"34.5px 0"}}>
        <ListItemText onClick={()=>handleClick(index)} primary={<><span className={stylesFaq.question}>{question.question}</span></>} />
        {question.open ? <ExpandLess  /> : <ExpandMore onClick={()=>handleClick(index)} />}
      </div>
 
      <Collapse in={question.open} sx={{padding:"0"}}timeout="auto" unmountOnExit>
        <List component="div" sx={{marginBottom:"38px",marginTop:"-29px"}} disablePadding >

            <ListItemText sx={{ color:"#585858"}}>
                     <span className={stylesFaq.answer}>{question.answer}

  
                    {index == 7?" If you are an art collector or artist in possession of an artwork that you would like to sell through the Artfi consignment process, please contact management at consignment@artfi.world. ":""}

                    {index == 4?"Regardless of the secondary market price of an Artfi NFT, it will always be redeemable for the  proceeds from the future sale of the physical artwork to which the Artfi NFT corresponds.":""}

                    {index == 2?"For example, if a painting that was fractionalized into 10,000 NFTs is sold by Artfi for $5 million (after commission), and you hold two of the NFTs which correspond to this painting, you will have the option to redeem your NFTs for $1,000 worth of stablecoin or ARTFI token.":""}
                    {index == 6?<a style={{color:"blue"}} href="https://www.artfi.world/how-it-works"><u>https://www.artfi.world/how-it-works</u></a>:""}

                    </span>

            </ListItemText>
        </List>
       
        </Collapse>
        <Divider/>
            </>)
    })}
      
</List>
<div className={stylesFaq.heading2} >
          <span >Artfi Whitelisting and Minting  </span>
</div>
<List
        sx={{ width: '100%', bgcolor: 'background.paper',padding:"0",margin:"0" }}
        component="nav"
        aria-labelledby="nested-list-subheader"
    >
       {ques2.map((question,index:any)=>{
        return(<>
            
      <div style={{display:"flex",margin:"34.5px 0"}}>
        <ListItemText primary={<><span className={stylesFaq.question}>{question.question}</span></>} />
        {question.open ? <ExpandLess onClick={()=>handleClick2(index)} /> : <ExpandMore onClick={()=>handleClick2(index)} />}
      </div>
 
      <Collapse in={question.open} sx={{padding:"0"}}timeout="auto" unmountOnExit>
        <List component="div" sx={{marginBottom:"38px",marginTop:"-29px"}} disablePadding >

            <ListItemText sx={{ color:"#585858"}}>
                     <span className={stylesFaq.answer}>{question.answer}

  
                    {index == 7?" If you are an art collector or artist in possession of an artwork that you would like to sell through the Artfi consignment process, please contact management at consignment@artfi.world. ":""}

                    {index == 4?"Regardless of the secondary market price of an Artfi NFT, it will always be redeemable for the  proceeds from the future sale of the physical artwork to which the Artfi NFT corresponds.":""}

                    {index == 2?"For example, if a painting that was fractionalized into 10,000 NFTs is sold by Artfi for $5 million (after commission), and you hold two of the NFTs which correspond to this painting, you will have the option to redeem your NFTs for $1,000 worth of stablecoin or ARTFI token.":""}
                    {index == 6?<a style={{color:"blue"}} href="https://www.artfi.world/how-it-works"><u>https://www.artfi.world/how-it-works</u></a>:""}

                    </span>

            </ListItemText>
        </List>
       
        </Collapse>
        <Divider/>
            </>)
    })}
      
</List>

</div>

<Footer/>
</>
  )
}

export default Faq
