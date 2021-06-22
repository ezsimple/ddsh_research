import { AgGridColumn, AgGridReact } from 'ag-grid-react';
import { DatePicker } from 'antd';
import React, { useState } from 'react';
import { useEffectOnce } from 'react-use';
import {
  Cell,
  Legend,
  Pie,
  PieChart,
  PolarAngleAxis,
  PolarGrid,
  PolarRadiusAxis,
  Radar,
  RadarChart,
  ResponsiveContainer,
} from 'recharts';
import { Button, Div, Flex, Right, Span } from '../../components/styled/shared';

const { RangePicker } = DatePicker;

const Log: React.FC = (props) => {
  const [defaultColDef, setDefaultColDef] = useState({
    filter: true,
    resizable: true,
    sortable: true,
    editable: false,
    cellClass: 'text-center',
    suppressSizeToFit: false,
  });
  const [rowData, setRowData] = useState([
    {
      no: 6,
      detectTime: '2021-04-30 11:10:27',
      waterTankNo: 'A_2',
      detectType: '흑화',
    },
    {
      no: 5,
      detectTime: '2021-04-27 21:30:31',
      waterTankNo: 'A_1',
      detectType: '선회/입올림',
    },
  ]);

  // https://www.ag-grid.com/react-grid/rendering-api/
  const [gridApi, setGridApi] = useState(null);
  const [gridColumnApi, setGridColumnApi] = useState(null);
  const onGridReady = (params) => {
    setGridApi(params.api);
    setGridColumnApi(params.columnApi);
    params.api.sizeColumnsToFit();
    // const updateData = (data) => {
    //   params.api.setRowData(data.slice(0, 100));
    // };
    // fetch('https://www.ag-grid.com/example-assets/olympic-winners.json')
    //   .then((resp) => resp.json())
    //   .then((data) => updateData(data));
  };

  // useEffectOnce();

  return (
    <>
      <Flex nowrap mt={5}>
        <RangePicker width="100%" placeholder={['시작일자', '종료일자']} />
        <Right>
          <Button fg="white" bg="blue">
            조회
          </Button>
        </Right>
      </Flex>
      <Div width="100%" height="300px" bc="gray" mt={25} rounded={5}>
        <Span ml={5} bold>
          알림 비율
        </Span>
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie dataKey="value" data={data01} fill="#8884d8" label>
              {data01.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
            <Legend layout="vetical" verticalAlign="middle" align="right" />
          </PieChart>
        </ResponsiveContainer>
      </Div>
      <Div width="100%" height="300px" mt={25} bc="gray" rounded={5}>
        <Span ml={5} bold>
          알림 항목
        </Span>
        <ResponsiveContainer width="100%" height="100%">
          <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data02}>
            <PolarGrid />
            <PolarAngleAxis dataKey="subject" />
            <PolarRadiusAxis />
            <Radar
              name="Mike"
              dataKey="A"
              stroke="#8884d8"
              fill="#8884d8"
              fillOpacity={0.6}
            />
          </RadarChart>
        </ResponsiveContainer>
      </Div>
      <Div className="ag-theme-balham" width="100%" height="300px" mt={25}>
        <AgGridReact
          defaultColDef={defaultColDef}
          // rowSelection={onRowSelection}
          pagination={true}
          paginationSize={10}
          paginationAutoPageSize={true}
          onGridReady={onGridReady}
          rowData={rowData}>
          <AgGridColumn width={80} field="no" headerName="번호" />
          <AgGridColumn
            width={160}
            field="detectTime"
            headerName="최초감지시간"
          />
          <AgGridColumn width={100} field="waterTankNo" headerName="수조번호" />
          <AgGridColumn width={100} field="detectType" headerName="감지결과" />
        </AgGridReact>
      </Div>
    </>
  );
};

export default Log;

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];
const data01 = [
  { name: '비알림', value: 80 },
  { name: '알림', value: 20 },
];

const data02 = [
  {
    subject: '흑화',
    A: 2,
    fullMark: 150,
  },
  {
    subject: '입올림',
    A: 3,
    fullMark: 150,
  },
  {
    subject: '탈장',
    A: 4,
    fullMark: 150,
  },
  {
    subject: '선회',
    A: 5,
    fullMark: 150,
  },
  {
    subject: '폐사',
    A: 6,
    fullMark: 150,
  },
];
