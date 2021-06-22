import { Switch } from 'antd';
import React, { useState } from 'react';
import {
  Button,
  Div,
  Flex,
  Input,
  Right,
  Span,
} from '../../components/styled/shared';

const Setting: React.FC = (props) => {
  const [type00, setType00] = useState(false);
  const [type01, setType01] = useState(false);
  const [type02, setType02] = useState(false);
  const [type03, setType03] = useState(false);
  const [type04, setType04] = useState(false);

  const onChange = (checked, name) => {
    console.log(`${name} : switch to ${checked}`);
  };
  return (
    <>
      <Div bc="gray" p={5} rounded={5}>
        <Flex width="100%">
          <Span bold>입올림</Span>
          <Right>
            <Switch
              checkedChildren="On"
              unCheckedChildren="Off"
              onChange={(e) => onChange(e, 'type00')}
            />
          </Right>
        </Flex>
        <Div>
          입올림 비율이 <Input height={20} width={60}></Input>% 이상 증가했을
          경우 알림
        </Div>
      </Div>

      <Div bc="gray" mt={15} p={5} rounded={5}>
        <Flex width="100%">
          <Span bold>선회</Span>
          <Right>
            <Switch
              checkedChildren="On"
              unCheckedChildren="Off"
              onChange={(e) => onChange(e, 'type01')}
            />
          </Right>
        </Flex>
        <Div>
          선회 비율이 <Input height={20} width={60}></Input>% 이상 증가했을 경우
          알림
        </Div>
      </Div>

      <Div bc="gray" mt={15} p={5} rounded={5}>
        <Flex width="100%">
          <Span bold>흑화</Span>
          <Right>
            <Switch
              checkedChildren="On"
              unCheckedChildren="Off"
              onChange={(e) => onChange(e, 'type02')}
            />
          </Right>
        </Flex>
        <Div>
          흑화 비율이 <Input height={20} width={60}></Input>% 이상 증가했을 경우
          알림
        </Div>
      </Div>

      <Div bc="gray" mt={15} p={5} rounded={5}>
        <Flex width="100%">
          <Span bold>탈장</Span>
          <Right>
            <Switch
              checkedChildren="On"
              unCheckedChildren="Off"
              onChange={(e) => onChange(e, 'type03')}
            />
          </Right>
        </Flex>
        <Div>
          탈장 상태의 넙치 <Input height={20} width={60}></Input>마리 이상
          발견될 경우 알림
        </Div>
      </Div>

      <Div bc="gray" mt={15} p={5} rounded={5}>
        <Flex width="100%">
          <Span bold>폐사</Span>
          <Right>
            <Switch
              checkedChildren="On"
              unCheckedChildren="Off"
              onChange={(e) => onChange(e, 'type04')}
            />
          </Right>
        </Flex>
        <Div>
          폐사 상태의 넙치<Input height={20} width={60}></Input>마리 이상 발견될
          경우 알림
        </Div>
      </Div>

      <Flex mt={50}>
        <Button fg="white" bg="blue" width="33%" rounded={5} m={2}>
          저장
        </Button>
        <Button fg="white" bg="gray" width="33%" rounded={5} m={2}>
          초기화
        </Button>
        <Button fg="white" bg="danger" width="33%" rounded={5} m={2}>
          취소
        </Button>
      </Flex>
    </>
  );
};

export default Setting;
