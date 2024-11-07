import styles from "./EditInput.module.scss";

const EditInput = ({ labelName, value, onChange, readOnly }) => {
  const handleChange = (e) => onChange(e.target.value);

  return (
    <div className={styles.InputContainer}>
      <label className={value ? styles.LabelActive : styles.Label}>
        {labelName}
      </label>
      <textarea
        type="text"
        value={value}
        onChange={handleChange}
        className={styles.InputName}
        readOnly={readOnly}
      />
    </div>
  );
};

export default EditInput;
