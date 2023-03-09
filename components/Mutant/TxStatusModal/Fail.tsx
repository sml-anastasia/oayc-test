import React from 'react';
import styled from "styled-components";
import RoundCloseButton from "../../common/buttons/RoundCloseButton";


const StyledFail = styled.div`
  position: relative;
  height: 100%;
  width: 100%;

  display: flex;
  justify-content: end;
  align-items: center;
  flex-direction: column;
`;


const FailIcon = styled.div`
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: url("/images/svg/fail-icon.svg") no-repeat top;
  width: 73px;
  height: 73px;
`;

const FailText = styled.div`
  font-family: 'Rubik', sans-serif;
  font-style: italic;
  font-weight: 700;
  font-size: 16px;
  line-height: 130%;
  display: flex;
  align-items: center;
  text-align: center;
  text-transform: uppercase;

  color: #C93041;
  margin-bottom: 8px;

`;
const Text = styled.div`
  font-family: 'Rubik', sans-serif;
  font-style: italic;
  font-weight: 700;
  font-size: 12px;
  line-height: 130%;
  display: flex;
  align-items: center;
  text-align: center;
  text-transform: uppercase;
  background: linear-gradient(159.53deg, #B4D109 1.07%, #87CC00 72.47%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 21px;
`;

const CloseButtonContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: end;
  width: 100%;
  padding: 10px;
`;


interface FailProps {
    onClose: () => void;
}

const Fail = ({onClose}: FailProps) => {
    return (
        <StyledFail>
            <CloseButtonContainer>
                <RoundCloseButton onClick={onClose}/>
            </CloseButtonContainer>
            <FailIcon/>
            <FailText>
                Fail!
            </FailText>
            <Text>
                PESKY BUGS CHEWED<br/> THROUGH THE WIRES AGAIN
            </Text>
        </StyledFail>
    );
};

export default Fail;