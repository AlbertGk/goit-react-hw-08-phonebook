import styles from '../../Styles/PageStyles.module.css';

export const Filter = ({
  setName,
  inputId,
  type,
  inputName,
  value,
  placeholder,
}) => {
  return (
    <input
      onChange={setName}
      id={inputId}
      type={type}
      name={inputName}
      value={value}
      placeholder={placeholder}
      className={styles.input__field}
    />
  );
};
