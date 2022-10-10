/* eslint-disable @next/next/no-img-element */
import style from "./Timer.module.scss";
import Countdown from "react-countdown";

type TimerProps = {
  seconds: number;
};

export const Timer = ({ seconds }: TimerProps): JSX.Element => {
  const milli = seconds * 1000;

  return (
    <div className={style.countdown}>
      {/* <img src="/Clock.png/" alt="clock" /> */}
      Whitelist ends in :<Countdown date={Date.now() + milli} />
    </div>
  );
};

export default Timer;
