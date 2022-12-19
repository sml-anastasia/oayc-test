// import React from 'react';
//
// const MoaycRectButton = () => {
//     return (
//         <div>
//
//         </div>
//     );
// };
//
// export default MoaycRectButton;


import styled from "styled-components";

export const MoaycRectButton = styled.button`

  background: linear-gradient(159.53deg, #B4D109 1.07%, #87CC00 72.47%);
  border-radius: 6px;
  border: none;

  font-family: 'Rubik', sans-serif;
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


  &:hover {
    cursor: pointer;
    opacity: 0.5;
    filter: brightness(75%);
    transition: 0.3s;
  }

`;