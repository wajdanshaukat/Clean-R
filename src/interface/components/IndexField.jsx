import React from "react";

const IndexField = ({
  sx,
  name,
  onChange,
  value,
  variant,
  type,
  label,
  placeholder,
}) => {
  return (
    <div>
      <input
        className={sx}
        id={name}
        variant={variant}
        onChange={onChange}
        label={label}
        type={type}
        value={value}
        placeholder={placeholder}
      />
    </div>
  );
};

export default IndexField;
