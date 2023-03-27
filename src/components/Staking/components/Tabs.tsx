import React, { useEffect, useId, useState } from "react";
import styled, { css } from "styled-components";

interface TabsProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "onChange"> {
  tabs: string[];
  value?: number;
  fullWidth?: boolean;
  onChange?: (id: number) => void;
}

const StyledTabsContainer = styled.div<{ fullWidth?: boolean }>`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1.5px solid #f5989a;
  border-radius: 500px;
  width: max-content;
  height: min-content;
  ${(props) =>
    props.fullWidth &&
    css`
      width: unset;

      & > ${StyledTab} {
        width: 100%;
      }
    `}
`;

const StyledTab = styled.div<{ selected: boolean; fullWidth?: boolean }>`
  display: flex;
  justify-content: center;
  text-transform: uppercase;
  font-style: italic;
  font-weight: 700;
  font-size: 18px;
  margin: -1.5px;

  border-radius: 100px;
  color: ${(props) => (props.selected ? `white` : `red`)};
  width: ${(props) => props.fullWidth && `100%`};
  background-color: ${(props) => (props.selected ? `red` : `transparent`)};
  cursor: pointer;

  transition: 0.3s;

  &:hover {
    opacity: 0.8;
  }
  padding: 10px 30px;
`;

export const Tabs: React.FC<TabsProps> = ({
  value,
  tabs,
  onChange,
  fullWidth,
  ...props
}) => {
  const [selectedId, setSelectedId] = useState(value ?? 0);
  const id = useId();

  useEffect(() => {
    onChange?.(selectedId);
  }, [selectedId, onChange]);

  return (
    <StyledTabsContainer fullWidth={fullWidth} {...props}>
      {tabs.map((tab, index) => (
        <StyledTab
          selected={selectedId === index}
          key={id + index}
          onClick={() => setSelectedId(index)}
        >
          {tab}
        </StyledTab>
      ))}
    </StyledTabsContainer>
  );
};
