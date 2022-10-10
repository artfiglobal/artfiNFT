import { useState } from "react";
import { Button, Typography } from "../../../reusables/Atoms";
import { FaSpinner, FaTimes } from "react-icons/fa";
import styles from "./Modal.module.scss";
import { Dialog, Transition } from "@headlessui/react";
import toast from "react-hot-toast";

import { addToWaitlist } from "../../../../utils/waitlistFunctions";
const Modal = ({ setIsOpen, isOpen, referralCode }) => {
  const [email, setEmail] = useState("");
  //loading state
  const [loading, setIsLoading] = useState(false);
  const [checked, isChecked] = useState(true);
  return (
    <div className={styles.modal_overlay}>
      <div className={styles.whitelist_modal}>
        <div className={styles.whitelist_close}>
          <FaTimes
            onClick={() => setIsOpen(!isOpen)}
            className={styles.closeBtn}
          />
        </div>
        <div className={styles.whitelist_modal_container}>
          <Typography color="black" variant="subheading">
            Join the waitlist for early access
          </Typography>
          <Typography color="black" variant="body">
            After you&#39;re on the waitlist, you&#39;ll get a referral link to
            share. Be first in line for early access by referring others. The
            more you refer, the higher up in line you&#39;ll go.
          </Typography>
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
            <div className={styles.checkBox}>
              <input
                className={styles.checkBox_input}
                type="checkbox"
                checked={checked}
                id="read"
                required
                onChange={() => {
                  isChecked(!checked);
                }}
              />
              <label className={styles.checkBox_label} htmlFor="read">
                Yes, please send me the latest news about Artfi NFT. I
                understand I can unsubscribe at any time. Privacy Policy
              </label>
            </div>
            <Button
              extraClass={checked ? "" : styles.modal_btn}
              variant="lg"
              onClick={() => {
                setIsLoading(true);
                email === ""
                  ? toast.error("Missing Email Address")
                  : addToWaitlist(email, checked, referralCode).then((res) => {
                      toast.success("Sucessfully Added to Waitlist");
                      setEmail("");
                      setIsOpen(!isOpen);
                      setIsLoading(false);
                    });
              }}
            >
              {loading ? (
                <FaSpinner className={styles.spinner} />
              ) : (
                "Join Waitlist"
              )}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
