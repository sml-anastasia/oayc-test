import styled from "styled-components";

export const MoaycRectButton = styled.button`
  background: linear-gradient(159.53deg, #b4d109 1.07%, #87cc00 72.47%);
  border-radius: 6px;
  border: none;

  font-family: "Rubik", sans-serif;
  font-style: italic;
  font-weight: 700;
  font-size: 12px;
  line-height: 130%;
  display: flex;
  align-items: center;
  text-align: center;
  text-transform: uppercase;
  color: #191919;
  padding: 11px;
  justify-content: center;
  transition: 0.3s;

  &[disabled] {
    opacity: 0.5;
  }

  &:hover:not([disabled]) {
    cursor: pointer;
    opacity: 0.5;
    filter: brightness(75%);
    transition: 0.3s;
  }
`;
