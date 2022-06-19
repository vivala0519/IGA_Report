import React from 'react';
import styled from 'styled-components';

const Sum = (props: any) => {
  const { title, subtitle, total, difference } = props;
  return (
    <SumDiv>
      <Title>{title}</Title>
      <SubTitleDiv>
        <SumSpan>SUM</SumSpan>
        <SubTitle>{subtitle}</SubTitle>
      </SubTitleDiv>
      <TotalDiv>{total.toLocaleString()}</TotalDiv>
      {difference < 0 ? (
        <Differenceblue>↓{difference}</Differenceblue>
      ) : (
        <DifferenceRed>↑{difference}</DifferenceRed>
      )}
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

const SubTitleDiv = styled.div`
  margin-top: 7px;
`;

const SumSpan = styled.span`
  color: grey;
  background-color: #eceeef;
  padding: 2px;
`;

const SubTitle = styled.span`
  font-size: 12px;
  color: grey;
  margin-left: 7px;
`;

const TotalDiv = styled.div`
  font-size: 30px;
  font-weight: bold;
  margin-top: 10px;
  margin-bottom: 3px;
  margin-left: 3px;
`;

const DifferenceRed = styled.div`
  font-size: 14px;
  font-weight: bold;
  margin-left: 10px;
  color: red;
`;

const Differenceblue = styled.div`
  font-size: 14px;
  font-weight: bold;
  margin-left: 10px;
  color: blue;
`;
