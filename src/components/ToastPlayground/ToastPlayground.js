import React from "react";

import Button from "../Button";
import styles from "./ToastPlayground.module.css";
import ToastShelf from "../ToastShelf/ToastShelf";

const VARIANT_OPTIONS = ["notice", "warning", "success", "error"];

function ToastPlayground() {
  const [variant, setVariant] = React.useState("notice");
  const [message, setMessage] = React.useState('');
  const [toasts, setToasts] = React.useState([]);

  const handleChange = (evt) => {
    setVariant(evt?.target?.value);
  };

  const handleToastSubmit = (evt) => {
    evt.preventDefault();
    const newToasts = [...toasts];
    const toast = {
      id: crypto.randomUUID(),
      variant: variant,
      message: message,
    };
    newToasts.push(toast);
    setToasts(newToasts);
    setMessage('');
    setVariant(VARIANT_OPTIONS[0]);
  };

  const removeToast = (id) => {
    const filteredToasts = toasts.filter(toast => toast.id !== id);
    setToasts(filteredToasts);
  };

  return (
    <div className={styles.wrapper}>
      <header>
        <img alt="Cute toast mascot" src="/toast.png" />
        <h1>Toast Playground</h1>
      </header>

      <ToastShelf toasts={toasts} handleClose={removeToast} />

      <div className={styles.controlsWrapper}>
        <form onSubmit={handleToastSubmit}>
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
                value={message}
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
                      checked={el === variant}
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
              <Button>Pop Toast!</Button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ToastPlayground;

//git commit --author="Name <email>" -m "whatever"
