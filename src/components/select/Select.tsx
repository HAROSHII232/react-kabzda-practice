type SelectPropsType = {
  value: any;
  items: ItemType[];
  onChange: (value: any) => void;
};

type ItemType = {
  title: string;
  value: any;
};

export const Select = ({ items, value, onChange }: SelectPropsType) => {
  return (
    <div>
      <div>{}</div>
      {items.map((i) => (
        <div>{i.title}</div>
      ))}
    </div>
  );
};
