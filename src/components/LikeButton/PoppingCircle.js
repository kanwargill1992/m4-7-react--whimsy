import React from "react";
import styled, { keyframes } from "styled-components";

const turnBlue = keyframes`
from{
  transfrom:scale(0);
}
to{
  transform:scale(1);
}
`;

const turnOut = keyframes`
from{
  opacity:1;
}
to{
  opacity:0;
}
`;

const Wrapper = styled.div`
  position: absolute;
  border-radius: 50%;
  background-color: pink;
  width: 100px;
  height: 100px;
  animation: ${turnOut} 500ms forwards, ${turnBlue} 700ms forwards;
`;

const PoppingCircle = ({ color }) => {
  return <Wrapper color={color} />;
};

export default PoppingCircle;
