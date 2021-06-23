import React, { useState } from 'react';
import { Div, Flex, Right, Button, Span } from '../../components/styled/shared';
import { HrThin, HrThick } from '../../components/styled/mixedIn';
import ReactPlayer from 'react-player/lazy';
import { AgGridColumn, AgGridReact } from 'ag-grid-react';
import { Select, Checkbox } from 'antd';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
// import { fnLink } from '../../utils/RouteUtil';

import '../action/Player.css'; // width:100% error fix

const Dashboard: React.FC = (props) => {
  const file =
    'http://210.92.91.216:3333/videos/1.%20%ED%81%AC%EB%A1%AC%EC%84%A4%EC%B9%98%20%EB%B0%A9%EB%B2%95.mp4';

  const [checked, setChecked] = useState(true);
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

  const onChange = (e) => {
    setChecked(e.target.checked);
  };

  const [series, setSeries] = useState([
    {
      name: '흑화',
      data: [
        { category: 'A', value: Math.random() },
        { category: 'B', value: Math.random() },
        { category: 'C', value: Math.random() },
        { category: 'D', value: Math.random() },
        { category: 'E', value: Math.random() },
        { category: 'F', value: Math.random() },
        { category: 'G', value: Math.random() },
        { category: 'H', value: Math.random() },
      ],
    },
  ]);

  const onClick = (type) => {
    // console.log(type);
    setSeries([
      {
        name: type,
        data: [
          { category: 'A', value: Math.random() },
          { category: 'B', value: Math.random() },
          { category: 'C', value: Math.random() },
          { category: 'D', value: Math.random() },
          { category: 'E', value: Math.random() },
          { category: 'F', value: Math.random() },
          { category: 'G', value: Math.random() },
          { category: 'H', value: Math.random() },
        ],
      },
    ]);
  };

  return (
    <>
      <Div className="player-wrapper" mt={5} width="100%">
        <ReactPlayer
          className="react-player"
          width="100%"
          height="100%"
          url={file}
          muted
          controls={true}
          config={{
            file: {
              attributes: {
                onContextMenu: (e) => e.preventDefault(), // 마우스 오른쪽 버튼 금지
                disablePictureInPicture: true, // PIP모드 비활성화
                controlsList: 'nodownload', // 다운로드 메뉴 제거
              },
            },
          }}
        />
      </Div>

      <Div mt={5} width="100%">
        <Div className="ag-theme-balham" width="100%" height="300px" mt={5}>
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
            <AgGridColumn
              width={100}
              field="waterTankNo"
              headerName="수조번호"
            />
            <AgGridColumn
              width={100}
              field="detectType"
              headerName="감지결과"
            />
          </AgGridReact>
        </Div>

        <HrThin mt={20} mb={20} />

        <Div pl={5}>
          <Span bold fontSize={16}>
            ※ 실시간 이상행동 분석 통계
          </Span>
          <Flex mt={15} width="100%">
            <Div width="40%">
              <Flex>
                <Button
                  bg="#576574"
                  fg="white"
                  bc="gray"
                  rounded={5}
                  m={2}
                  width="40%"
                  onClick={() => onClick('폐사')}>
                  폐사
                </Button>
                <Button
                  bg="#000000"
                  fg="white"
                  bc="gray"
                  rounded={5}
                  m={2}
                  width="60%"
                  onClick={() => onClick('탈장출혈')}>
                  탈장출혈
                </Button>
              </Flex>
              <Flex>
                <Button
                  bg="#222f3e"
                  fg="white"
                  bc="gray"
                  rounded={5}
                  ml={2}
                  width="99.2%"
                  onClick={() => onClick('폐사+탈장출혈')}>
                  폐사+탈장출혈
                </Button>
              </Flex>
            </Div>

            <Div width="40%" ml={5} p={0}>
              <Flex>
                <Button
                  bg="#1e3799"
                  fg="white"
                  bc="gray"
                  rounded={5}
                  m={2}
                  width="40%"
                  onClick={() => onClick('선회')}>
                  선회
                </Button>
                <Button
                  bg="#0c2461"
                  fg="white"
                  bc="gray"
                  rounded={5}
                  m={2}
                  width="60%"
                  onClick={() => onClick('입올림')}>
                  입올림
                </Button>
              </Flex>
              <Flex>
                <Button
                  bg="#4a69bd"
                  fg="white"
                  bc="gray"
                  rounded={5}
                  ml={2}
                  width="99.2%"
                  onClick={() => onClick('선회+입올림')}>
                  선회+입올림
                </Button>
              </Flex>
            </Div>
            <Div width="20%" mr={5}>
              <Flex ml={5} p={0} width="100%">
                <Button
                  bg="#e55039"
                  fg="white"
                  bc="gray"
                  rounded={5}
                  width="100%"
                  height={66}
                  onClick={() => onClick('흑화')}>
                  흑화
                </Button>
              </Flex>
            </Div>
          </Flex>
        </Div>
        <Div height="300px" mt={15}>
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              width="100%"
              height={300}
              margin={{
                top: 5,
                right: 10,
                bottom: 0,
                left: 0,
              }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis
                dataKey="category"
                type="category"
                allowDuplicatedCategory={false}
              />
              <YAxis dataKey="value" />
              <Tooltip />
              <Legend />
              {series.map((s) => (
                <Line
                  dataKey="value"
                  data={s.data}
                  name={s.name}
                  key={s.name}
                />
              ))}
            </LineChart>
          </ResponsiveContainer>
        </Div>
      </Div>
    </>
  );
};

export default Dashboard;
