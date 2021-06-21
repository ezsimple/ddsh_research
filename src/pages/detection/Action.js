import React, { useState } from 'react';
import { Div, Flex, Right } from '../../components/styled/shared';
import { Select, Checkbox } from 'antd';
import ReactPlayer from 'react-player/lazy';
import './Player.css'; // width:100% error fix

const { Option } = Select;

const onEnded = () => {
  console.log('학습을 마쳤습니다');
};

const Action = (props) => {
  const file =
    'http://210.92.91.216:3333/videos/1.%20%ED%81%AC%EB%A1%AC%EC%84%A4%EC%B9%98%20%EB%B0%A9%EB%B2%95.mp4';

  const [checked, setChecked] = useState(true);

  const onChange = (e) => {
    setChecked(e.target.checked);
  };

  return (
    <>
      <Flex nowrap>
        <Select
          allowClear
          showSearch
          style={{ width: '50%' }}
          placeholder="양식장 선택"
          optionFilterProp="children"
          filterOption={(input, option) =>
            option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
          }>
          <Option value="A">양식장A</Option>
          <Option value="B">양식장B</Option>
          <Option value="C">양식장C</Option>
        </Select>
        <Select
          allowClear
          showSearch
          style={{ width: '50%' }}
          placeholder="수조 선택"
          optionFilterProp="children"
          filterOption={(input, option) =>
            option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
          }>
          <Option value="A1">수조 A-1</Option>
          <Option value="A2">수조 A-2</Option>
          <Option value="A3">수조 A-3</Option>
        </Select>
      </Flex>

      <Div className="player-wrapper" mt={5} width="100%">
        <ReactPlayer
          className="react-player"
          url={file}
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
        <Flex>AgGrid</Flex>
      </Div>
    </>
  );
};

export default Action;
