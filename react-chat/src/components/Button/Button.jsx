import cn from "classnames";
import styles from "./Button.module.scss";

export const Button = ({
  children,
  shadow,
  animation,
  onButtonClick,
  normal,
}) => {
  return (
    <button
      type="button"
      className={cn(styles.Button, {
        [styles.ButtonShadow]: shadow,
        [styles.AnimationButton]: animation,
        [styles.NormalButton]: normal,
      })}
      onClick={onButtonClick}
    >
      {children}
    </button>
  );
};
