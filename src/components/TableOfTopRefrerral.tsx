import React from 'react';
import Table from '../chart/Table';
import AxiosHook from '../hooks/AxiosHook';

const TableOfTopReferral = () => {
  const data: any = AxiosHook(
    'https://static.adbrix.io/front/coding-test/event_4.json'
  );
  const tableData: any = {};
  const rows = [];
  const columns = [];
  columns.push({ field: 'country', headerName: 'country' });
  columns.push({ field: 'region', headerName: 'region' });
  columns.push({ field: 'city', headerName: 'city' });
  columns.push({ field: 'viewCount', headerName: 'viewCount', type: 'number' });
  if (data) {
    const row: any = data.rows;
    for (let i = 0; i < row.length; i += 1) {
      rows.push({
        id: i,
        country: row[0] === '' ? 'empty' : row[0],
        region: row[1] === '' ? 'empty' : row[1],
        city: row[2] === '' ? 'empty' : row[2],
        viewCount: row[3],
      });
    }
  }
  tableData['rows'] = rows;
  tableData['columns'] = columns;
  return <Table tableData={tableData} />;
};

export default TableOfTopReferral;
