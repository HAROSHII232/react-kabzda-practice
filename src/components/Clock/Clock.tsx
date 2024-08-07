import { useEffect, useState } from "react";
import { DigitalClockView } from "./DigitalClockView";
import { AnalogClockView } from "./AnalogClockView";

type PropsType = {
  mode?: "digital" | "analog";
};

export type ClockViewPropsType = {
  date: Date;
};

export const Clock: React.FC<PropsType> = (props) => {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const intervalID = setInterval(() => {
      setDate(new Date());
    }, 1000);

    return () => {
      clearInterval(intervalID); //таким образом можно очистить сетИнтервал или любой другой сайд эффект (очистить мусор) когда компонента умирает/демонтируется
    };
  }, []);

  let view;

  switch (props.mode) {
    case "analog":
      view = <AnalogClockView date={date} />;
      break;
    case "digital":
    default:
      view = <DigitalClockView date={date} />;
  }

  return <div>{view}</div>;
};
