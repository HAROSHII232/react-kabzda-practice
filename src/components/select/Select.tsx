import { KeyboardEvent, useEffect, useState } from "react";
import styles from "./Select.module.css";

type SelectPropsType = {
  value?: any;
  items: ItemType[];
  onChange: (value: any) => void;
};

type ItemType = {
  title: string;
  value?: any;
};

export const Select = ({ items, value, onChange }: SelectPropsType) => {
  const [active, setActive] = useState(false);
  const [hoveredElementValue, setHoveredElementValue] = useState(value);

  const selectedItem = items.find((i) => i.value === value);
  const hoveredItem = items.find((i) => i.value === hoveredElementValue);

  useEffect(() => {
    setHoveredElementValue(value);
  }, [value]);

  const toggleItems = () => setActive(!active);
  const onItemClick = (value: any) => {
    onChange(value);
    toggleItems();
  };
  const onKeyUp = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "ArrowDown" || e.key === "ArrowUp") {
      for (let i = 0; i < items.length; i++) {
        if (items[i].value === hoveredElementValue) {
          const pretendentElement =
            e.key === "ArrowDown" ? items[i + 1] : items[i - 1];
          if (pretendentElement) {
            onChange(pretendentElement.value);
            return;
          }
        }
      }
      if (!selectedItem) {
        onChange(items[0].value);
      }
    }

    if (e.key === "Enter" || e.key === "Escape") {
      setActive(false);
    }
  };

  return (
    <div className={styles.select} onKeyUp={onKeyUp} tabIndex={0}>
      <span className={styles.main} onClick={toggleItems}>
        {selectedItem && selectedItem.title}
      </span>
      {active && (
        <div className={styles.items}>
          {items.map((i) => (
            <div
              onMouseEnter={() => {
                setHoveredElementValue(i.value);
              }}
              key={i.value}
              onClick={() => {
                onItemClick(i.value);
              }}
              className={
                styles.item + " " + (hoveredItem === i ? styles.selected : "")
              }
            >
              {i.title}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
