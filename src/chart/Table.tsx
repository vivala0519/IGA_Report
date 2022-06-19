import React from 'react';
import { DataGridPremium } from '@mui/x-data-grid-premium';
import { useMovieData } from '@mui/x-data-grid-generator';
import styled from 'styled-components';

const Sum = (props: any) => {
  const { tableData } = props;
  console.log(useMovieData());
  console.log(tableData);
  return (
    <SumDiv>
      <Title>Top Referral</Title>
      <div style={{ height: 270, width: '90%' }}>
        <DataGridPremium
          {...tableData}
          disableSelectionOnClick
          initialState={{
            rowGrouping: {
              model: ['country', 'city'],
            },
          }}
        />
      </div>
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
