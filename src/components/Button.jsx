import React from "react";

function Button(props) {
  return (
    <button
      className="w-58 h-10 mt-10 rounded-full text-white text-[18px] 
                 bg-[rgba(255,255,255,0.1)] border border-[rgba(255,255,255,0.2)] 
                 backdrop-blur-[20px] cursor-pointer"
    >
      {props.butname}
    </button>
  );
}

export default Button;
