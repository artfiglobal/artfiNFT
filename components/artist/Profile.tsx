import Image from "next/image";
import React from "react";
import styles from "./profile.module.scss";

type profileValue = {
  title: string;
  value: string;
};

const Profile = ({ artistDetails }: any) => {
  const ProfileData = ({ title, value }: profileValue) => {
    return (
      <div>
        <h5>{title}</h5>
        <label className={styles.profileInfo_p}>{value}</label>
      </div>
    );
  };
  const bornDate =
    artistDetails?.artistBornDay +
    " " +
    artistDetails?.artistBornMonth +
    " " +
    artistDetails?.artistBornYear;
  const deathDate =
    artistDetails?.artistDiedDay +
    " " +
    artistDetails?.artistDiedMonth +
    " " +
    artistDetails?.artistDiedYear;

  return (
    <section className={styles.profileSection}>
      {
        artistDetails && 
        <div>
          <Image
            src={`${process.env.NEXT_PUBLIC_React_App_Base_Url}/${artistDetails?.artistImage}`}
            width={300}
            height={375}
            alt="artist"
          />
        </div>
      }
      <div>
        <h4>
          {artistDetails?.artistFirstName} {artistDetails?.artistLastName}{" "}
          <Image src="/Publiced/Vector.svg" alt="vector" width={24} height={24} />
        </h4>
        <p>
          {artistDetails?.artistDescription}
        </p>
        <div className={styles.profileInfo}>
          {bornDate && <ProfileData title="born" value={bornDate} />}
          {deathDate?.length > 4 && (
            <ProfileData title="Died" value={deathDate} />
          )}
        </div>

        <div className={styles.profileInfo}>
          <ProfileData
            title="Known for"
            value={artistDetails?.artistKnownFor}
          />
          <ProfileData
            title="Nationality"
            value={artistDetails?.artistNationaltiy}
          />
          {artistDetails?.royaltyWalletAddress && (
            <ProfileData
              title="Royalty Wallet Address"
              value={artistDetails?.royaltyWalletAddress}
            />
          )}
        </div>
      </div>
    </section>
  );
};

export default Profile;
