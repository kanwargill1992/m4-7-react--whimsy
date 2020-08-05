import React from "react";
import Styled from "styled-components";

const Stat = ({ input1, input2 }) => (
  <Wrapper>
    <Wrapper2>{input1}</Wrapper2>
    {input2}
  </Wrapper>
);

const Wrapper = Styled.div`
font-size:17px;
margin-right:20px;

`;

const Wrapper2 = Styled.span`
font-weight:bold;
color:grey;
`;

export default Stat;
