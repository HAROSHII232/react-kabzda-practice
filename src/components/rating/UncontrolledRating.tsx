import { useState } from "react";
import { RatingValueType } from "./Rating";

type StarPropsType = {
  selected: boolean;
  setValue: (value: 1 | 2 | 3 | 4 | 5) => void;
  value: 1 | 2 | 3 | 4 | 5;
};

type RatingPropsType = {
  defaultValue?: RatingValueType;
  onChange: (value: RatingValueType) => void;
};

export const UncontrolledRating = ({
  defaultValue,
  onChange,
}: RatingPropsType) => {
  const [value, setValue] = useState<RatingValueType>(
    defaultValue ? defaultValue : 0
  );

  return (
    <div>
      <Star
        selected={value > 0}
        setValue={() => {
          setValue(1);
          onChange(1);
        }}
        value={1}
      />
      <Star
        selected={value > 1}
        setValue={() => {
          setValue(2);
          onChange(2);
        }}
        value={2}
      />
      <Star
        selected={value > 2}
        setValue={() => {
          setValue(3);
          onChange(3);
        }}
        value={3}
      />
      <Star
        selected={value > 3}
        setValue={() => {
          setValue(4);
          onChange(4);
        }}
        value={4}
      />
      <Star
        selected={value > 4}
        setValue={() => {
          setValue(5);
          onChange(5);
        }}
        value={5}
      />
    </div>
  );
};

const Star = ({ selected, setValue, value }: StarPropsType) => {
  const starOnClickHandler = () => setValue(value);
  return (
    <span onClick={starOnClickHandler}>
      {selected ? <b>Star </b> : "Star "}
    </span>
  );
};
