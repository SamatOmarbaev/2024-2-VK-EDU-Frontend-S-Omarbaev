import { memo } from "react";
import styles from "./Button.module.scss";

import cn from "classnames";

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
