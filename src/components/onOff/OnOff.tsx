type OnOffPropsType = {
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
