import React, {
    MouseEvent,
    useCallback,
    useEffect,
    useId,
    useState,
  } from "react";
  import styled from "styled-components";
  
  interface SelectProps
    extends Omit<React.HTMLAttributes<HTMLDivElement>, "onChange"> {
    options: string[];
    value?: number;
    onChange?: (id: number) => void;
    selectedOption: string | undefined;
  }
  
  const StyledSelectContainer = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: min-content;
    width: 100%;
  `;
  
  const SelectContent = styled.div`
    width: 100%;
    height: inherit;
    padding: 10px 45px;
  
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
  
    border: 1.5px solid #f5989a;
    border-radius: 500px;
    background-color: transparent;
  
    cursor: pointer;
    transition: all 0.3s ease 0s;
  `;
  
  const SelectWrap = styled.div`
    display: flex;
    justify-content: center;
    text-transform: uppercase;
    font-style: italic;
    font-weight: 700;
    font-size: 14px;
    line-height: 140%;
    margin: -1.5px;
    color: #ff0420;
  `;
  
  const DownArrowWrapper = styled.div<{ isRotate: boolean }>`
    width: 24px;
    height: 24px;
    position: absolute;
    right: 0;
    top: 20%;
    bottom: 37.44%;
    z-index: 3;
    background: url("/images/svg/down-arrow.svg") no-repeat center;
    transform: ${({ isRotate }) =>
      isRotate ? "rotate(180deg)" : "rotate(0deg)"};
    transition: all 0.3s ease 0s;
  `;
  
  const VisibleOptions = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    display: flex;
    flex-direction: column;
    width: 100%;
    background: #f0ebdf;
    border: 1.5px solid #f5989a;
    border-radius: 20px;
    z-index: 1;
  `;
  
  const Option = styled.div<{ selected: boolean }>`
    width: 100%;
    padding: 10px 45px;
    margin: -1.5px;
  
    display: flex;
    justify-content: center;
  
    text-transform: uppercase;
    font-style: italic;
    font-weight: 700;
    font-size: 14px;
    line-height: 140%;
    color: ${(props) => (props.selected ? `#ff0420` : `#f5989a`)};
  
    background-color: transparent;
    border-bottom: 1.5px solid #f5989a;
    cursor: pointer;
    transition: 0.3s;
  
    &:last-of-type {
      border-bottom: none;
    }
  `;
  
  export const Select: React.FC<SelectProps> = ({
    value,
    options,
    onChange,
    selectedOption,
  }) => {
    const [activeOption, setActiveOption] = React.useState(
      selectedOption ? selectedOption : options?.[0]
    );
    const [selectedId, setSelectedId] = useState(value ?? 0);
    const [isShowOptions, setIsShowOptions] = useState(false);
    const id = useId();
  
    useEffect(() => {
      onChange?.(selectedId);
    }, [selectedId, onChange]);
  
    useEffect(() => {
      setSelectedId(selectedId ? selectedId : 0);
    }, [selectedId]);
  
    const handleChangeIsShowOptions = useCallback(
      (e: MouseEvent<HTMLElement>) => {
        setIsShowOptions(!isShowOptions);
        e.stopPropagation();
      },
      [isShowOptions]
    );
  
    const closeSelectOptions = useCallback(() => {
      setIsShowOptions(false);
    }, []);
  
    useEffect(() => {
      isShowOptions
        ? document?.body.addEventListener("click", closeSelectOptions)
        : document?.body.removeEventListener("click", closeSelectOptions);
      return () =>
        document?.body.removeEventListener("click", closeSelectOptions);
    }, [closeSelectOptions, isShowOptions]);
  
    return (
      <StyledSelectContainer>
        <SelectContent onClick={handleChangeIsShowOptions}>
          <SelectWrap>{activeOption}</SelectWrap>
          <DownArrowWrapper isRotate={isShowOptions} />
        </SelectContent>
        {isShowOptions && (
          <VisibleOptions>
            {options?.map((option, index) => (
              <Option
                selected={selectedId === index}
                onClick={() => {
                  setSelectedId(index);
                  setActiveOption(option);
                }}
                key={id + index}
              >
                {option}
              </Option>
            ))}
          </VisibleOptions>
        )}
      </StyledSelectContainer>
    );
  };
  