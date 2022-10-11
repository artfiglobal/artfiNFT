import { serverURI } from "../config";

async function addToWaitlist(
    email: string,
    subscription: boolean,
    referralCode: string | string[] | undefined | ""
) {
  if (email !== "") {
    let response = await fetch(`${serverURI}/api/waitlist`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        referral: referralCode,
        subscription: subscription,
      }),
    });
    let data = await response.json();
    return data;
  }
}

export { addToWaitlist };
