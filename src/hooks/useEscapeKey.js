import React from "react";

const useKeyDown = (key, callback) => {
  React.useEffect(() => {
    function handleKeyDown(evt) {
      if (evt.code === key) {
        callback(evt)
      }
    }

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [key, callback]);

	return [];
};

export default useKeyDown;
