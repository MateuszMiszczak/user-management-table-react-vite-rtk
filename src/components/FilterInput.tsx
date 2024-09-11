import { FilterInputProps } from "../definitions/types";
import styles from "../styles/styles";

export default function FilterInput({
  label,
  placeholder,
  name,
  value,
  onChange,
}: FilterInputProps) {
  return (
    <>
      <label htmlFor={name}>{label}</label>
      <input
        type="text"
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
        className={styles.tableInput}
      />
    </>
  );
}
