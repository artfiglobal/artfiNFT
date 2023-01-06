import { useState } from "react";
import { Button, Typography } from "../../../reusables/Atoms";
import { FaSpinner, FaTimes } from "react-icons/fa";
import styles from "./Modal.module.scss";
// import { Dialog, Transition } from "@headlessui/react";
import toast from "react-hot-toast";



import { addToWaitlist } from "../../../../utils/waitlistFunctions";
import { Dialog, DialogContent, DialogContentText, DialogTitle } from "@mui/material";

const Modal = ({ setIsOpen,UserRedirectFrom, isOpen, referralCode,offeringId,artistId }) => {
  const [email, setEmail] = useState("");
  console.log(UserRedirectFrom,"UserRedirectFrom")
  //loading state
  const [loading, setIsLoading] = useState(false);
  const [checked, isChecked] = useState(true);
  const [sendEmail, setSendEmail] = useState({
    open:false,
    messege:""
  })
  return (
    <>
    <div className={styles.modal_overlay}>
      <div className={styles.whitelist_modal}>
        <div className={styles.whitelist_close}>
          <FaTimes
            onClick={() => setIsOpen(!isOpen)}
            className={styles.closeBtn}
          />
        </div>
        <div className={styles.whitelist_modal_container} style={{width:"100%"}}>
          <Typography color="black" variant="subheading">
           {UserRedirectFrom == "Waitlist-Now"?"Join the waitlist for early access":(<div style={{marginBottom:"20px"}}>Register your interest<br/></div>)}
          </Typography>
          {UserRedirectFrom == "Waitlist-Now"?<Typography color="black" variant="body">
            After you&#39;re on the waitlist, you&#39;ll get a referral link to
            share. Be first in line for early access by referring others. The
            more you refer, the higher up in line you&#39;ll go.
          </Typography>:""}
          <div className={styles.whitelist_modal_inputs}>
            <input
              type="email"
              placeholder="Email Address"
              
              className={styles.whitelist_modal_input}
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              required
            />
            {UserRedirectFrom == "Waitlist-Now"? <div className={styles.checkBox}>
              <input
                className={styles.checkBox_input}
                type="checkbox"
                checked={checked}
                id="read"
                required
                inputProps={{
                  pattern: '[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+[.]{1}[a-zA-Z]{2,}$',
                }}
                onChange={() => {
                  isChecked(!checked);
                }}
              />
              <label className={styles.checkBox_label} htmlFor="read">
                Yes, please send me the latest news about Artfi NFTs. I
                understand I can unsubscribe at any time.
              </label>
            </div>:""}
            <Button
              extraClass={checked ? "" : styles.modal_btn}
              variant="lg"
              onClick={() => {
                const validEmail = new RegExp(
                  '^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$'
               )
             
                
                setIsLoading(true);
                if( email === "" || !validEmail.test(email))
                  {
                    toast.error("Missing Email Address")
                setIsLoading(false);

                }else
                {
                  addToWaitlist(email, checked, referralCode,UserRedirectFrom,offeringId,artistId).then((res) => {
                      // toast.success("Sucessfully Added to Waitlist");
                      console.log(res.message)
                      if(res.message == "You email was already registed")
                      {
                        setSendEmail({
                          open:true,
                          messege:"You are already Waitlisted!"
                        })
                      }
                      else{
                      setSendEmail({
                        open:true,
                        messege:"Thank you for joining our Waitlist!"
                      })
                    }
                      setEmail("");
                     
                      setIsLoading(false);
                    }).catch((error)=>{
                      setSendEmail({
                        open:true,
                        messege:"You are already Waitlisted!"
                      })
                      setEmail("");
                     
                      setIsLoading(false);
                    })
                  }
              }}
            >
              {loading ? (
                <FaSpinner className={styles.spinner} />
              ) : UserRedirectFrom == "Waitlist-Now"?(
                "Join Waitlist"
              ):("Register your interest")}
            </Button>
          </div>
        </div>
      </div>
     
    </div>
     <Dialog
      open={sendEmail.open}
      onClose={()=>setSendEmail({sendEmail,open:false})}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
      className={styles.models}
    >
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          <img src="/Icons/right.svg"/>
          <h1>
              {sendEmail.messege}
          </h1>
          <button onClick={()=>
            
            {
              setSendEmail({sendEmail,open:false})
              setIsOpen(!isOpen);
            }
            }>
               Okay
          </button>
        </DialogContentText>
      </DialogContent>
    </Dialog>
    </>
  );
};

export default Modal;
