import styles from "./Button.module.css";

const Button = ({ children }) => {
  return (
    <>
      <button className={styles.feedBackBtn}>{children} </button>
    </>
  );
};
export default Button;
