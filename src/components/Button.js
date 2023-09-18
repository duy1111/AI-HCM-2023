
import React from "react";


const Button =  ({
  label,
  onClick,
  disabled,
  outline,
  small,
  Icon,
}) => {
  return (
    <button
        onClick={onClick}
        disabled={disabled}
      className={`relative disabled:opacity-70 disabled:cursor-not-allowed rounded-lg hover:opacity-80 transition w-full ${
        outline ? "bg-white" : "bg-rose-400"
      } ${outline ? "border-black" : "border-rose-400"} ${
        outline ? "text-black" : "text-white"
      } ${small?'py-1 w-[100px] text-sm font-light border':'py-3 text-md font-semibold border-2'}`}
    >

      {Icon && (
        <Icon size={24} className="absolute left-4 top-3" />
      )}
      {label}
    </button>
  );
};

export default Button;