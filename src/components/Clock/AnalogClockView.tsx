import { ClockViewPropsType } from "./Clock";
import styles from "./AnalogClockView.module.css";

export const AnalogClockView: React.FC<ClockViewPropsType> = ({ date }) => {
  const secondsDegrees = date.getSeconds() * 6;
  const minutesDegrees = date.getMinutes() * 6 + date.getSeconds() / 10;
  const hoursDegrees = date.getHours() * 30 + date.getMinutes() / 2;

  const secondsStyle = {
    transform: `rotate(${secondsDegrees}deg)`,
  };
  const minutesStyle = {
    transform: `rotate(${minutesDegrees}deg)`,
  };
  const hoursStyle = {
    transform: `rotate(${hoursDegrees}deg)`,
  };

  return (
    <div className={styles.clock}>
      <div className={styles["analog-clock"]}>
        <div
          className={`${styles.dial} ${styles.seconds}`}
          style={secondsStyle}
        />
        <div
          className={`${styles.dial} ${styles.minutes}`}
          style={minutesStyle}
        />
        <div className={`${styles.dial} ${styles.hours}`} style={hoursStyle} />
      </div>
    </div>
  );
};
