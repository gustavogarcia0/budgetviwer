import styles from "../Styles/SubmitButton.module.css";

function SubmitButton({text}) {
  return (
    <div>
      <button className={styles.btn}>{text}</button>
    </div>
  );
}

export default SubmitButton;
