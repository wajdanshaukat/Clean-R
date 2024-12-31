import React, { useRef } from "react";
import "./css/tokenform.css";

const TokenField = () => {
  const inputRefs = useRef([]);

  const handleInput = (index, event) => {
    const value = event.target.value;

    if (value.length > 1) {
      event.target.value = value.slice(0, 1);
    }

    if (value && inputRefs.current[index + 1]) {
      inputRefs.current[index + 1].focus();
    }
  };

  return (
    <div>
      <form>
        {[0, 1, 2, 3].map((_, index) => (
          <input
            key={index}
            type="number"
            min="0"
            max="9"
            placeholder=" "
            onInput={(event) => handleInput(index, event)}
            ref={(el) => (inputRefs.current[index] = el)}
            autoFocus={index === 0} // Autofocus only on the first input
          />
        ))}

        <span className="indicator"></span>
      </form>
    </div>
  );
};

export default TokenField;
