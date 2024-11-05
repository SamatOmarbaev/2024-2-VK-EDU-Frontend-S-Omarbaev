import { memo } from "react";
import styles from "./Header.module.scss";

export const Header = memo(({ children }) => {
  return <header className={styles.Header}>{children}</header>;
});
