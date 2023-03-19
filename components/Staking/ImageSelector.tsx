import React, { useEffect, useState } from "react";
import styled, { css } from "styled-components";

interface ImageSelectorProps<T> extends React.HTMLAttributes<HTMLDivElement> {
  data: T[];
  onSelected?: (selected: T[]) => void;
  selectable?: boolean;
  twoColumns?: boolean;
}

const ImageSelectorContainer = styled.div<{ twoColumns?: boolean }>`
  overflow-y: auto;
  display: grid;
  grid-template-columns: ${({ twoColumns }) =>
    twoColumns ? "repeat(2, 1fr)" : "repeat(auto-fit, minmax(60px, 1fr))"};
  grid-auto-rows: 60px;
  gap: 8px;
  position: relative;
  margin-bottom: 20px
  min-width: ${({ twoColumns }) => (twoColumns ? "auto" : "520px")};
  max-width: ${({ twoColumns }) => (twoColumns ? "100%" : "520px")};
  min-height: ${({ twoColumns }) => (twoColumns ? "auto" : "315px")};
  max-height: ${({ twoColumns }) => (twoColumns ? "auto" : "315px")};

  ::-webkit-scrollbar {
    width: 3px;
  }

  ::-webkit-scrollbar-track {
    background: rgba(0, 0, 0, 0.07);
  }

  ::-webkit-scrollbar-thumb {
    background: #ff0420;
  }
`;

const StyledImage = styled.img`
  border-radius: 5px;
  filter: light(0);
  width: 60px;
  height: 60px;
`;

const ImageContainer = styled.div<{ selected: boolean }>`
  position: relative;
  width: 60px;
  height: 60px;

  & > img {
    ${(props) =>
      props.selected &&
      css`
        border: 1.5px solid #ff0420;
      `};
    border-radius: 5px;
  }

  &::after {
    content: "";
    top: 0;
    left: 0;
    width: 60px;
    height: 60px;
    display: block;
    position: absolute;
    background: linear-gradient(159.53deg, #ff0420 1.07%, #87cc00 72.47%);
    opacity: ${(props) => (props.selected ? 0.35 : 0)};
    border-radius: 5px;
  }

  &:hover::after {
    cursor: pointer;
    opacity: 0.35;
  }
`;

const ImageSelector = <T extends { id: string | number; uri: string }>({
  data,
  onSelected,
  selectable = true,
  twoColumns = true,
  ...props
}: ImageSelectorProps<T>) => {
  const [selected, setSelected] = useState<T[]>([]);

  const handleSelect = (item: T) => {
    if (selectable) {
      if (selected.includes(item)) {
        const index = selected.indexOf(item);
        const newSelected = [...selected];
        newSelected.splice(index, 1);
        setSelected(newSelected);
      } else {
        setSelected([...selected, item]);
      }
    }
  };

  useEffect(() => {
    if (selectable) {
      onSelected?.(selected);
    }
  }, [selected, onSelected, selectable]);

  return (
    <ImageSelectorContainer twoColumns={twoColumns} {...props}>
      {data.map((i, index) => (
        <ImageContainer
          selected={selected.includes(i)}
          key={index}
          onClick={() => handleSelect(i)}
        >
          <StyledImage src={i.uri} alt="" />
        </ImageContainer>
      ))}
    </ImageSelectorContainer>
  );
};

export default ImageSelector;
