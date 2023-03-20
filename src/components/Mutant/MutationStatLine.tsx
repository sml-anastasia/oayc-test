import React, { FunctionComponent } from "react";
import styled from "styled-components";

interface MutationStatLineProps {
  name: string;
  value: string | number;
}

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 4px;

  & > p {
    margin: 0;
    padding: 0;

    font-family: "Rubik", sans-serif;
    font-style: italic;
    font-weight: 700;
    font-size: 12px;
    line-height: 130%;
    display: flex;
    align-items: center;
    text-transform: uppercase;
    background: linear-gradient(159.53deg, #b4d109 1.07%, #87cc00 72.47%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

const MutationStatLine: FunctionComponent<
  React.HTMLAttributes<HTMLDivElement> & MutationStatLineProps
> = ({ name, value, ...rest }) => {
  return (
    <Container {...rest}>
      <p>{name}</p>
      <p>{value}</p>
    </Container>
  );
};

export default MutationStatLine;
