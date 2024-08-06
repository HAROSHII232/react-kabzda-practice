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
    // eslint-disable-next-line react-hooks/exhaustive-deps
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

/* export const SetTimeoutExample = () => { // часы, делал сам, зачистить сет интервалы
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
}; */

export const ResetEffectExample = () => {
  const [counter, setCounter] = useState(1);

  console.log("ResetEffectExample" + counter);

  useEffect(() => {
    console.log("Effect occurred" + counter);

    return () => {
      console.log("RESET EFFECT" + counter); // в данном случае из за зависимости counter, при каждом рендере происходит зачистка старого useEffect и в консоль выводится "RESET EFFECT", и только потом отрабатывает новый useEffect
    };
  }, [counter]);

  const increase = () => setCounter(counter + 1);

  return (
    <>
      Hello, counter {counter}
      <button onClick={increase}>counter+</button>
    </>
  );
};

export const KeysTrackerExample = () => {
  const [text, setText] = useState("");

  console.log("Component rendered with " + text);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      console.log(e.key);
      setText(text + e.key);
    };
    window.addEventListener("keypress", handler); // эту тему надо зачищать, как и сетИнтервалы и сетТаймауты, чтобы когда мы уходим с компоненты (анмаунтим её) у нас не срабатывал этот листнер (эффект)

    return () => {
      window.removeEventListener("keypress", handler);
    };
  }, [text]);

  return <>Typed text: {text}</>;
};
