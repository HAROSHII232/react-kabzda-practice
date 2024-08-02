import { useEffect, useState } from "react";

export default {
  title: "UseEffect demo",
};

export const SimpleExample = () => {
  const [counter, setCounter] = useState(1);
  const [fake, setFake] = useState(1);

  console.log("SimpleExample");

  useEffect(() => {
    console.log("useEffect every render");
    document.title = counter.toString();
  });

  useEffect(() => {
    console.log("useEffect only first render (componentDidMount)");
    document.title = counter.toString();
  }, []);

  useEffect(() => {
    console.log("useEffect first render and every counter change");
    document.title = counter.toString();
  }, [counter]);

  return (
    <>
      Hello, {counter} {fake}
      <button onClick={() => setFake(fake + 1)}>fake+</button>
      <button onClick={() => setCounter(counter + 1)}>counter+</button>
    </>
  );
};

export const SetTimeoutExample = () => {
  const date = new Date();
  const [seconds, setSeconds] = useState(date.getSeconds());
  const [minutes, setMinutes] = useState(date.getMinutes());
  const [hours, setHours] = useState(date.getHours());

  useEffect(() => {
    setInterval(() => {
      const date = new Date();
      const seconds = date.getSeconds();
      setSeconds(seconds);
    }, 1000);
  }, []);

  useEffect(() => {
    setInterval(() => {
      const date = new Date();
      const minutes = date.getMinutes();
      setMinutes(minutes);
    }, 1000);
  }, []);

  useEffect(() => {
    setInterval(() => {
      const date = new Date();
      const hours = date.getHours();
      setHours(hours);
    }, 1000);
  }, []);

  return (
    <>
      <time>
        {hours}:{minutes}:{seconds < 10 ? "0" + seconds : seconds}
      </time>
    </>
  );
};
