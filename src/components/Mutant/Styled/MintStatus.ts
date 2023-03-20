import styled from "styled-components";
import { device } from "../../../styles/device";

export const MintStatus = styled.div<{ noContent?: boolean }>`
  border: 1.5px solid #87cc01;
  border-radius: 6px;
  font-family: "Rubik", sans-serif;
  font-style: italic;
  font-weight: 700;
  font-size: 12px;
  line-height: 130%;
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
  text-transform: uppercase;
  background: linear-gradient(159.53deg, #b4d109 1.07%, #87cc00 72.47%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  padding: 9.5px 36px;

  margin-bottom: 26px;

  min-width: 257px;
  @media screen and ${device.tablet} {
    min-width: 215px;
  }
`;
