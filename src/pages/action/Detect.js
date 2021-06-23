import React, { useState } from 'react';
import { Div, Flex, Right } from '../../components/styled/shared';
import { Select, Checkbox } from 'antd';
import ReactPlayer from 'react-player/lazy';
import { AgGridColumn, AgGridReact } from 'ag-grid-react';
import './Player.css'; // width:100% error fix

const { Option } = Select;

const onEnded = () => {
  console.log('학습을 마쳤습니다');
};

const Detect: React.FC = (props) => {
  const [videoFile, setVideoFile] = useState(
    'http://210.92.91.216:3333/videos/1. 크롬설치 방법.mp4'
  );
  const [videoPlay, setVideoPlay] = useState(false);

  const [checked, setChecked] = useState(true);
  const [defaultColDef, setDefaultColDef] = useState({
    filter: true,
    resizable: true,
    sortable: true,
    editable: false,
    cellClass: 'text-center',
    // suppressSizeToFit: false,
    rowSelection: 'single',
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
  const onRowSelected = () => {
    const rows = gridApi.getSelectedRows();
    // console.log(rows.length, rows[0]);
    const { no } = rows[0];
    if (no === 5)
      setVideoFile(
        'http://210.92.91.216:3333/videos/3. 번식돈관리 주요메뉴 입력방법.mp4'
      );
    if (no === 6)
      setVideoFile(
        'http://210.92.91.216:3333/videos/2.피그플랜3.0 로그인방법.mp4'
      );
    setVideoPlay(true); // 자동 플레이 (리모콘)
  };

  return (
    <>
      <Div nowrap>
        <Select
          allowClear
          showSearch
          style={{ width: '100%' }}
          placeholder="수조 선택"
          optionFilterProp="children"
          filterOption={(input, option) =>
            option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
          }>
          <Option value="A1">수조 A-1</Option>
          <Option value="A2">수조 A-2</Option>
          <Option value="A3">수조 A-3</Option>
        </Select>
      </Div>

      <Div className="player-wrapper" mt={5} width="100%">
        <ReactPlayer
          className="react-player"
          width="100%"
          height="100%"
          url={videoFile}
          playing={videoPlay}
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
          onEnded={() => onEnded()}
        />
      </Div>

      <Div mt={5} width="100%">
        <Flex>
          <Right>
            <Checkbox checked={checked} onChange={onChange}>
              확인된감지제외
            </Checkbox>

            <Select
              allowClear
              showSearch
              placeholder="감지기간"
              optionFilterProp="children"
              filterOption={(input, option) =>
                option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
              }>
              <Option value="24시간">24시간</Option>
              <Option value="7일">7일</Option>
              <Option value="30일">1달</Option>
            </Select>
          </Right>
        </Flex>

        <Div className="ag-theme-balham" width="100%" height="300px" mt={5}>
          <AgGridReact
            defaultColDef={defaultColDef}
            pagination={true}
            paginationSize={10}
            onGridReady={onGridReady}
            rowSelection={'single'}
            onRowSelected={onRowSelected}
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
      </Div>
    </>
  );
};

export default Detect;
