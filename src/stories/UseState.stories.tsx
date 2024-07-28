import { useState } from "react";

export default {
  title: "UseState demo",
};

const generateData = () => {
  //вшаашсгде сщгтештп
  console.log("generateData");

  return 1;
};

export const Example1 = () => {
  console.log("example1");

  const [counter, setCounter] = useState(generateData);
  const changer = (state: number) => state + 1;

  return (
    <>
      <button onClick={() => setCounter(changer)}>+</button>
      {counter}
    </>
  );
};
// Take 1, если надо сделать сложные вычисления при передачи инишел вэлью в юз стейт, то передаём функцию, которая произведеёт эти вычисления только один раз, а дальше не будет вызываться
//
