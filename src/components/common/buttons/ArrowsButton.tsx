import React from "react";
import OaycButton from "./OaycButton";
import ArrowSurround from "../surrounds/ArrowSurround";

const ArrowsButton = ({
  children,
  ...rest
}: React.HTMLAttributes<HTMLButtonElement>) => {
  return (
    <ArrowSurround>
      <OaycButton {...rest}>{children}</OaycButton>
    </ArrowSurround>
  );
};

export default ArrowsButton;
