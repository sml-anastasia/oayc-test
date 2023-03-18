import MoaycButton from "../common/buttons/MoaycButton";
import styled, { css } from "styled-components";

export const StakingButton = styled(MoaycButton)`
  background: #ff0420;
  color: white;
  height: 64px;
  border-radius: 100px;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  line-break: revert;
  min-width: 237px;

  ${(props) =>
    props.size === "small" &&
    css`
      height: unset;
      min-width: unset;
    `}
`;
