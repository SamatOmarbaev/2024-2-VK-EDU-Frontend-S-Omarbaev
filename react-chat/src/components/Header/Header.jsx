import styles from "./Header.module.scss";

export const Header = ({ children }) => {
  return <header className={styles.Header}>{children}</header>;
};
