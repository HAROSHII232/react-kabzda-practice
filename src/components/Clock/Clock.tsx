import { useEffect, useState } from "react";

const get2DigitsString = (num: number) => (num < 10 ? "0" + num : num);

export const Clock = () => {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const intervalID = setInterval(() => {
      setDate(new Date());
    }, 1000);

    return () => {
      clearInterval(intervalID); //таким образом можно очистить сетИнтервал или любой другой сайд эффект (очистить мусор) когда компонента умирает/демонтируется
    };
  }, []);

  return (
    <div>
      <span>{get2DigitsString(date.getHours())}</span>:
      <span>{get2DigitsString(date.getMinutes())}</span>:
      <span>{get2DigitsString(date.getSeconds())}</span>
    </div>
  );
};
