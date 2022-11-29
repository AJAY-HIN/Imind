import React from "react";
import { CommonButton } from "./Button.style";
import { AiOutlineArrowRight } from "react-icons/ai";

export const Button = (props) => {
  const clicked = () => {
    console.log("clicked");
  };
  return (
    <CommonButton className={`default-button ${props.className}`}>
      <a>
        {props.lable}
        <AiOutlineArrowRight
          style={{ marginLeft: "6px" }}
          className="arrowIcon"
        />
      </a>
    </CommonButton>
  );
};
