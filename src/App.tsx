import { DashboardLayoutComponent } from '@syncfusion/ej2-react-layouts';
import * as React from 'react';

import SumOfUsers from './components/SumOfUsers';
import SumOfCount from './components/SumOfCount';
import DAU from './components/DAU';
import PieOfTopReferral from './components/PieOfTopReferral';
import TableOfTopReferral from './components/TableOfTopRefrerral';

export default class App extends React.Component<
  Record<string, never>,
  Record<string, never>
> {
  private cellSpacing: number[] = [20, 20];
  private resize: any[] = [
    'e-south-east',
    'e-east',
    'e-west',
    'e-north',
    'e-south',
  ];
  private panels: any = [
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

  public onResizeStart() {
    console.log('Resize start');
  }
  //Dashboard Layout's drag event function
  public onResize(args: any) {
    console.log('Resizing');
  }

  //Dashboard Layout's dragstop event function
  public onResizeStop(args: any) {
    console.log('Resize stop');
  }

  public render() {
    return (
      <div>
        <div id="container">
          <DashboardLayoutComponent
            id="defaultLayout"
            cellSpacing={this.cellSpacing}
            panels={this.panels}
            allowResizing={true}
            columns={12}
            resizableHandles={this.resize}
            resizeStart={this.onResizeStart.bind(this)}
            resize={this.onResize.bind(this)}
            resizeStop={this.onResizeStop.bind(this)}
          />
        </div>
      </div>
    );
  }
}
