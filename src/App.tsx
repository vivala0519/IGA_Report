import { DashboardLayoutComponent } from '@syncfusion/ej2-react-layouts';
import React from 'react';
import styled from 'styled-components';
import SumOfUsers from './components/SumOfUsers';
import SumOfCount from './components/SumOfCount';
import DAU from './components/DAU';
import PieOfTopReferral from './components/PieOfTopReferral';
import TableOfTopReferral from './components/TableOfTopRefrerral';

const App = () => {
  const cellSpacing: number[] = [10, 10];
  const resize: any[] = [
    'e-south-east',
    'e-east',
    'e-west',
    'e-north',
    'e-south',
  ];
  const panels: any = [
    {
      sizeX: 6,
      sizeY: 1,
      row: 0,
      col: 0,
      content: SumOfUsers,
    },
    {
      sizeX: 6,
      sizeY: 1,
      row: 0,
      col: 7,
      content: SumOfCount,
    },
    {
      sizeX: 12,
      sizeY: 2,
      row: 1,
      col: 0,
      content: DAU,
    },
    {
      sizeX: 6,
      sizeY: 2,
      row: 3,
      col: 0,
      content: PieOfTopReferral,
    },
    {
      sizeX: 6,
      sizeY: 2,
      row: 3,
      col: 0,
      content: TableOfTopReferral,
    },
  ];

  function onResizeStart() {
    // console.log('Resize start');
  }
  //Dashboard Layout's drag event function
  function onResize(args: any) {
    // console.log('Resizing');
  }

  //Dashboard Layout's dragstop event function
  function onResizeStop(args: any) {
    // console.log('Resize stop');
  }

  return (
    <PageDiv>
      <div id="container">
        <DashboardLayoutComponent
          id="defaultLayout"
          cellSpacing={cellSpacing}
          panels={panels}
          allowResizing={true}
          columns={12}
          resizableHandles={resize}
          resizeStart={onResizeStart.bind}
          resize={onResize.bind}
          resizeStop={onResizeStop.bind}
        />
      </div>
    </PageDiv>
  );
};

export default App;

const PageDiv = styled.div`
  width: 1824px;
`;
