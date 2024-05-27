type RatingPropsType = {
  value: 0 | 1 | 2 | 3 | 4 | 5;
};

type StarPropsType = {
  selected: boolean;
};

export const Rating = ({ value }: RatingPropsType) => {
  return (
    <div>
      <Star selected={value > 0} />
      <Star selected={value > 1} />
      <Star selected={value > 2} />
      <Star selected={value > 3} />
      <Star selected={value > 4} />
    </div>
  );
};

const Star = ({ selected }: StarPropsType) => {
  if (selected) {
    return (
      <span>
        <b>Star </b>
      </span>
    );
  } else {
    return <span>Star </span>;
  }
};
