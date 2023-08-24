import React, { useState } from "react";
import { Select } from "@mantine/core";
import styles from "./GroupPicker.module.css";

export default function GroupPicker({ groups, handleChange, value }) {
  const [isOpen, setIsOpen] = useState(false);
  const [displayLabel, setDisplayLabel] = useState("");

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (optionValue, label) => {
    setDisplayLabel(label);
    handleChange(optionValue);
    setIsOpen(false);
  };

  return (
    groups.length && (
      <>
        <div className={styles.customSelect}>
          <div
            style={{
              borderRadius: isOpen ? "10px 10px 0 0" : "10px",
              borderBottom: isOpen ? "none" : "1px solid #ccc",
            }}
            className={styles.selectedValue}
            onClick={toggleDropdown}
          >
            {displayLabel}
          </div>
          {isOpen && (
            <ul className={`${styles.optionsList} ${isOpen ? styles.open : ""}`}>
              {groups.map((option) => (
                <li
                  key={option.value}
                  className={styles.option}
                  onClick={() => handleOptionClick(option.value, option.label)}
                >
                  {option.label}
                </li>
              ))}
            </ul>
          )}
        </div>
      </>
    )
  );
}
