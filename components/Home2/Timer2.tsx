import React, { useEffect, useState } from "react";
import dayjs from "dayjs";

function MyTimer({ endDate }: any) {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  let expiryDate = dayjs(endDate).valueOf() / 1000;

  useEffect(() => {
    const timer = setInterval(() => {
      const now = Date.now() / 1000;
      if (now < expiryDate) {
        setDays(Math.floor((expiryDate - now) / (60 * 60 * 24)));
        setHours(Math.floor((expiryDate - now) / (60 * 60)) % 24);
        setMinutes(Math.floor((expiryDate - now) / 60) % 60);
        setSeconds(Math.floor(expiryDate - now) % 60);
      }
    }, 1000);
    return () => clearInterval(timer);
  }, [expiryDate]);
  return (
    <div style={{ textAlign: "left" }}>
      <div style={{ fontSize: "16px" }}>
        <span>{days > 9 ? days + "d" : "0" + days +"d"}</span>:
        <span>{hours > 9 ? hours + "h" : "0" + hours+"h"}</span>:
        <span>{minutes > 9 ? minutes + "m" : "0" + minutes+"m"}</span>:
        <span>{seconds > 9 ? seconds + "s": "0" + seconds + "s"}</span>
      </div>
    </div>
  );
}

export default function Timer({ endDate }: any) {
  return (
    <div>
      <MyTimer endDate={endDate} />
    </div>
  );
}
