import React, { useState } from 'react';
import {
  ComposedChart,
  Line,
  Area,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import { AgGridColumn, AgGridReact } from 'ag-grid-react';
import { Checkbox, DatePicker, Select } from 'antd';
import { Button, Div, Flex, Right } from '../../components/styled/shared';

const { Option } = Select;
const { RangePicker } = DatePicker;

const Anal: React.FC = (props) => {
  const [tempChecked, setTempChecked] = useState(true); // 수온
  const [feedChecked, setFeedChecked] = useState(true); // 급이
  const [rmTmChecked, setRmTmChecked] = useState(true); // 계측제외시간
  const [defaultColDef, setDefaultColDef] = useState({
    filter: true,
    resizable: true,
    sortable: true,
    editable: false,
    cellClass: 'text-center',
    enableColResize: true,
    // suppressSizeToFit: false,
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

  const onRowDataChanged = (params) => {
    params.api.getDisplayedRowAtIndex(0).setSelected(true);
  };

  const onFirstDataRendered = (params) => {
    // console.log(params);
    params.api.sizeColumnsToFit();
  };

  const data = [
    {
      name: 'Page A',
      uv: 590,
      pv: 800,
      amt: 1400,
    },
    {
      name: 'Page B',
      uv: 868,
      pv: 967,
      amt: 1506,
    },
    {
      name: 'Page C',
      uv: 1397,
      pv: 1098,
      amt: 989,
    },
    {
      name: 'Page D',
      uv: 1480,
      pv: 1200,
      amt: 1228,
    },
    {
      name: 'Page E',
      uv: 1520,
      pv: 1108,
      amt: 1100,
    },
    {
      name: 'Page F',
      uv: 1400,
      pv: 680,
      amt: 1700,
    },
  ];

  const onTempChange = (e) => {
    setTempChecked(e.target.checked);
  };
  const onFeedChange = (e) => {
    setFeedChecked(e.target.checked);
  };
  const onRmTmChange = (e) => {
    setRmTmChecked(e.target.checked);
  };

  return (
    <>
      <Flex nowrap mt={5}>
        <Select
          allowClear
          showSearch
          style={{ width: '20%' }}
          placeholder="수조 선택"
          optionFilterProp="children"
          filterOption={(input, option) =>
            option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
          }>
          <Option value="A1">수조 A-1</Option>
          <Option value="A2">수조 A-2</Option>
          <Option value="A3">수조 A-3</Option>
        </Select>
        <RangePicker
          width="60%"
          placeholder={['시작일자', '종료일자']}
          style={{ marginLeft: '2px' }}
        />
        <Right>
          <Button fg="white" bg="blue">
            조회
          </Button>
        </Right>
      </Flex>
      <Div nowrap mt={5}>
        <Checkbox checked={tempChecked} onChange={onTempChange}>
          수온
        </Checkbox>
        <Checkbox checked={feedChecked} onChange={onFeedChange}>
          급이
        </Checkbox>
        <Checkbox checked={rmTmChecked} onChange={onRmTmChange}>
          계측제외시간
        </Checkbox>
      </Div>
      <Div nowrap mt={5} height="300px">
        <ResponsiveContainer width="100%" height="100%">
          <ComposedChart
            width={500}
            height={400}
            data={data}
            margin={{
              top: 5,
              right: 10,
              bottom: 0,
              left: 0,
            }}>
            <CartesianGrid stroke="#f5f5f5" />
            <XAxis
              dataKey="name"
              label={{
                /* value: 'Pages', */
                position: 'insideBottomRight',
                offset: 0,
              }}
              scale="band"
            />
            <YAxis
              label={{
                /* value: 'Index',*/
                angle: -90,
                position: 'insideLeft',
              }}
            />
            <Tooltip />
            <Legend />
            <Area
              type="monotone"
              dataKey="amt"
              fill="#8884d8"
              stroke="#8884d8"
            />
            <Bar dataKey="pv" barSize={20} fill="#413ea0" />
            <Line type="monotone" dataKey="uv" stroke="#ff7300" />
          </ComposedChart>
        </ResponsiveContainer>
      </Div>
      <Div className="ag-theme-balham" width="100%" height="300px" mt={5}>
        <AgGridReact
          defaultColDef={defaultColDef}
          // rowSelection={onRowSelection}
          pagination={true}
          paginationSize={10}
          onGridReady={onGridReady}
          onFirstDataRendered={onFirstDataRendered}
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

export default Anal;
