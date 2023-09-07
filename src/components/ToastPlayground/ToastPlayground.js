import React from "react";

import Button from "../Button";

import styles from "./ToastPlayground.module.css";
import Toast from "../Toast/Toast";

const VARIANT_OPTIONS = ["notice", "warning", "success", "error"];

function ToastPlayground() {
  const [variant, setVariant] = React.useState("");
  const [message, setMessage] = React.useState("");
  const [showToast, setShowToast] = React.useState(false);

  const toggleToast = () => {
    setShowToast((prevState) => !prevState);
  };

  const handleChange = (evt) => {
    setVariant(evt?.target?.value);
  };

  return (
    <div className={styles.wrapper}>
      <header>
        <img alt="Cute toast mascot" src="/toast.png" />
        <h1>Toast Playground</h1>
      </header>

      {showToast && (
        <Toast variant={variant} message={message} handleClose={toggleToast} />
      )}

      <div className={styles.controlsWrapper}>
        <div className={styles.row}>
          <label
            htmlFor="message"
            className={styles.label}
            style={{ alignSelf: "baseline" }}
          >
            Message
          </label>
          <div className={styles.inputWrapper}>
            <textarea
              id="message"
              className={styles.messageInput}
              onChange={(evt) => setMessage(evt.target.value)}
            />
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.label}>Variant</div>
          <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
            {VARIANT_OPTIONS.map((el) => (
              <div key={`variant-${el}`}>
                <label htmlFor={`variant-${el}`}>
                  <input
                    id={`variant-${el}`}
                    type="radio"
                    name="variant"
                    value={el}
                    onChange={(evt) => handleChange(evt)}
                  />
                  {el}
                </label>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.label} />
          <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
            <Button onClick={toggleToast}>Pop Toast!</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ToastPlayground;
