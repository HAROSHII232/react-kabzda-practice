import { useState } from "react";

type StarPropsType = {
  selected: boolean;
};

export const UncontrolledRating = () => {
  const [value, setValue] = useState(0);

  return (
    <div>
      <Star selected={value > 0} />
      <Star selected={value > 1} />
      <Star selected={value > 2} />
      <Star selected={value > 3} />
      <Star selected={value > 4} />
      <button onClick={() => setValue(1)}>1</button>
      <button onClick={() => setValue(2)}>2</button>
      <button onClick={() => setValue(3)}>3</button>
      <button onClick={() => setValue(4)}>4</button>
      <button onClick={() => setValue(5)}>5</button>
    </div>
  );
};

const Star = ({ selected }: StarPropsType) => {
  return selected ? (
    <span>
      <b>Star</b>
    </span>
  ) : (
    <span>Star</span>
  );
};
