import React from "react";
import { useState } from "react";

export default {
  title: "React.memo demo",
};

const NewMessagesCounter = (props: { count: number }) => {
  return <div>{props.count}</div>;
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

export const Example1 = () => {
  const [counter, setCounter] = useState(0);
  const [users, setUsers] = useState(["Karl", "Gregor", "Igor"]);

  const addUser = () => {
    setUsers([...users, "Sveta" + new Date().getTime()]);
  };
  return (
    <>
      <button onClick={() => setCounter(counter + 1)}>+</button>
      <button onClick={addUser}>add user</button>
      <NewMessagesCounter count={counter} />
      <Users users={users} />
    </>
  );
};
