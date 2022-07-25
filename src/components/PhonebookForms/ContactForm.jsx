import styles from '../../Styles/PageStyles.module.css';

export const ContactForm = ({
  formId,
  type,
  inputName,
  value,
  pattern,
  title,
  setName,
  inputRef,
  placeholder,
}) => {
  return (
    <label htmlFor={formId}>
      {inputName}
      <input
        ref={inputRef}
        onChange={setName}
        id={formId}
        type={type}
        name={inputName}
        value={value}
        pattern={pattern}
        title={title}
        placeholder={placeholder}
        required
        className={styles.input__field}
      />
    </label>
  );
};
