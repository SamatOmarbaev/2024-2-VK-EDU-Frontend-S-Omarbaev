import { memo } from "react";
import cn from "classnames";
import styles from "./Button.module.scss";

export const Button = memo(({ children, shadow, animation, onButtonClick }) => {
  return (
    <button
      type="button"
      className={cn(styles.Button, {
        [styles.ButtonShadow]: shadow,
        [styles.AnimationButton]: animation,
      })}
      onClick={onButtonClick}
    >
      {children}
    </button>
  );
});
