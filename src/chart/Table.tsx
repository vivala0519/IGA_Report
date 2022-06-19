import React from 'react';
import styled from 'styled-components';

const Sum = (props: any) => {
  return (
    <SumDiv>
      <Title>Top Referral</Title>
    </SumDiv>
  );
};

export default Sum;

const SumDiv = styled.div`
  margin: 12px 12px;
`;

const Title = styled.div`
  font-size: 13px;
  color: blue;
  font-weight: bold;
`;
