/* type OnOffPropsType = {
  isActive: boolean;
};
type ColorPropsType = {
  color?: string;
};

export const OnOff = ({ isActive }: OnOffPropsType) => {
  return (
    <div>
      {isActive && (
        <div>
          <button style={{ backgroundColor: "green" }}>on</button>
          <button>off</button>
          <Circle color="green" />
        </div>
      )}
      {!isActive && (
        <div>
          <button>on</button>
          <button style={{ backgroundColor: "red" }}>off</button>
          <Circle color="red" />
        </div>
      )}
    </div>
  );
};

const Circle = ({ color }: ColorPropsType) => {
  return (
    <button
      style={{
        backgroundColor: `${color}`,
        width: "20px",
        height: "20px",
        borderRadius: "50%",
      }}
    ></button>
  );
};
 */

import { useState } from "react";

/* ---------------------------------------------------------------------------------------- */


export const OnOff = () => {
  const [on, setOn] = useState(false);

  const onStyle = {
    width: "30px",
    height: "20px",
    border: "1px solid black",
    display: "inline-block",
    padding: "2px",
    backgroundColor: on ? "green" : "inherit",
  };
  const offStyle = {
    width: "30px",
    height: "20px",
    border: "1px solid black",
    display: "inline-block",
    marginLeft: "2px",
    padding: "2px",
    backgroundColor: on ? "inherit" : "red",
  };
  const indicatorStyle = {
    width: "10px",
    height: "10px",
    borderRadius: "50%",
    border: "1px solid black",
    display: "inline-block",
    marginLeft: "5px",
    backgroundColor: on ? "green" : "red",
  };

  return (
    <div>
      <div style={onStyle} onClick={() => setOn(true)}>
        on
      </div>
      <div style={offStyle} onClick={() => setOn(false)}>
        off
      </div>
      <div style={indicatorStyle}></div>
    </div>
  );
};
