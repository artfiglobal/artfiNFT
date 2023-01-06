import { serverURI } from "../config";

async function addToWaitlist(
    email: string,
    subscription: boolean,
    referralCode: string | string[] | undefined | "",
    UserRedirectFrom:string,
    artistId:string,
    offeringId:string,
    
) {
  if (email !== "") {
    let response = await fetch(`${process.env.NEXT_PUBLIC_React_App_Base_Url}/api/send-mail`, {
      method: "POST",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        referral: referralCode,
        subscription: subscription,
        ArtistId:artistId,
        offeringId:offeringId,
        UserRedirectFrom:UserRedirectFrom
      }),
    });
    let data = await response.json();
    return data;
  }
}

export { addToWaitlist };
