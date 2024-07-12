import React from "react";
import { useMemo } from "react";
import { useState } from "react";

export default {
  title: "useMemo",
};

export const DifficultCountingExample = () => {
  const [a, setA] = useState<number>(3);
  const [b, setB] = useState<number>(3);

  let resultA = 1;
  let resultB = 1;

  resultA = useMemo(() => {
    let tempResultA = 1;
    for (let i = 1; i <= a; i++) {
      let fake = 0;
      while (fake < 1000000) {
        fake++;
        const fakeValue = Math.random();
      }
      tempResultA *= i;
    }
    return tempResultA;
  }, [a]);

  for (let i = 1; i <= b; i++) {
    resultB *= i;
  }

  return (
    <>
      <input value={a} onChange={(e) => setA(+e.currentTarget.value)} />
      <input value={b} onChange={(e) => setB(+e.currentTarget.value)} />
      <hr />
      <div>Result for a: {resultA}</div>
      <div>Result for b: {resultB}</div>
    </>
  );
};

const UsersSecret = (props: { users: Array<string> }) => {
  return (
    <div>
      {props.users.map((u, i) => (
        <div key={i}>{u}</div>
      ))}
    </div>
  );
};

const Users = React.memo(UsersSecret);

export const HelpsForReactMemoExample = () => {
  const [counter, setCounter] = useState(0);
  const [users, setUsers] = useState(["Karl", "Gregor", "Igor"]);

  const newArray = useMemo(() => {
    return users.filter((u) => u.toLocaleLowerCase().indexOf("a") > -1);
  }, [users]);
  const addUser = () => {
    setUsers([...users, "Sveta" + new Date().getTime()]);
  };

  return (
    <>
      <button onClick={() => setCounter(counter + 1)}>+</button>
      <button onClick={addUser}>addUser</button>
      {counter}
      <Users users={newArray} />
    </>
  );
};
