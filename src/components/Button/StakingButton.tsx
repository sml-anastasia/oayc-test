import MoaycButton from "../common/buttons/MoaycButton";
import styled, { css } from "styled-components";

// Добавьте интерфейс для пропсов StakingButton
interface StakingButtonProps {
  size?: "small";
  disabled?: boolean;
}

export const StakingButton = styled(MoaycButton)<StakingButtonProps>`
  background: #ff0420;
  color: white;
  border-radius: 100px;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  line-break: revert;
  width: 50%;
  height: 56px;

  ${(props) =>
    props.size === "small" &&
    css`
      height: unset;
      min-width: unset;
    `}

  ${(props) =>
    props.disabled &&
    css`
      cursor: not-allowed;
      opacity: 0.5;
    `}
`;
