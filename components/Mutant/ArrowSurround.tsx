import React from 'react';
import styled from "styled-components";


const StyledArrowsIcon = styled.div`

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

`;

const InnerLayer = styled.div`
  display: flex;
  align-items: center;
`;

const TopArrow = styled.div`
  background: url("/images/svg/small-green-arrow.svg") no-repeat center;
  width: 25px;
  height: 25px;
  margin-bottom: 25px;
`;

const BottomArrow = styled.div`
  background: url("/images/svg/small-green-arrow.svg") no-repeat center;
  width: 25px;
  height: 25px;
  rotate: 180deg;
  margin-top: 25px;
`;

const LeftArrow = styled.div`
  background: url("/images/svg/small-green-arrow.svg") no-repeat center;
  width: 25px;
  height: 25px;
  rotate: 270deg;
  margin-right: 25px;
`;

const RightArrow = styled.div`
  background: url("/images/svg/small-green-arrow.svg") no-repeat center;
  width: 25px;
  height: 25px;
  rotate: 90deg;
  margin-left: 25px;
`;


interface ArrowSurroundProps {
    sideArrows?: boolean;
}

const ArrowSurround = ({
                           children,
                           sideArrows = true,
                           ...rest
                       }: React.HTMLAttributes<HTMLDivElement> & ArrowSurroundProps) => {
    return (
        <StyledArrowsIcon>
            <TopArrow/>
            {sideArrows ? <InnerLayer>
                <LeftArrow/>
                {children}
                <RightArrow/>
            </InnerLayer> : children}

            <BottomArrow/>
        </StyledArrowsIcon>
    );
};

export default ArrowSurround;