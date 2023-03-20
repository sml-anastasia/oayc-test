import React from "react";
import styled from "styled-components";

const StyledProcessing = styled.div`
  position: relative;
  height: 100%;
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: end;
`;

const Slime = styled.div`
  position: absolute;
  top: -2px;
  left: 0;
  background: url("/images/svg/processing-slime.svg") no-repeat top;
  width: 250px;
  height: 149px;
`;

const Text = styled.div`
  font-family: "Rubik", sans-serif;
  font-style: italic;
  font-weight: 700;
  font-size: 16px;
  line-height: 130%;
  display: flex;
  align-items: center;
  text-transform: uppercase;
  background: linear-gradient(159.53deg, #b4d109 1.07%, #87cc00 72.47%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 31px;
`;

const Processing = () => {
  return (
    <StyledProcessing>
      <Slime />
      <Text>Processing...</Text>
    </StyledProcessing>
  );
};

export default Processing;
