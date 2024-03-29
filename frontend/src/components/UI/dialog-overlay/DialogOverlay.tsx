import React, { FC } from "react";
import classes from "./DialogOverlay.module.css";
type Props = {
  onClick: () => void;
  onClose: () => void;
  header: string;
};

const DialogOverlay: FC<Props> = ({ onClick, onClose, header }) => {
  return (
    <div className={classes.overlay}>
      <div className={classes.container}>
        <div className={classes.main_content}>
          <h3>{header}</h3>
        </div>
        <div className={classes.button_container}>
          <button onClick={onClick}>Confirm</button>
          <button onClick={onClose}>Close</button>
        </div>
      </div>
    </div>
  );
};

export default DialogOverlay;
