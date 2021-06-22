import React from 'react';
import { Switch } from 'antd';
import { CloseOutlined, CheckOutlined } from '@ant-design/icons';
import { Flex, Div, Right, Input, Span } from '../../components/styled/shared';
import { Header, HrThin } from '../../components/styled/mixedIn';

const onChange = (checked) => {
  console.log(`switch to ${checked}`);
};

const Setting: React.FC = (props) => {
  return (
    <>
      <Div bc="black" p={5} rounded={5}>
        <Flex width="100%">
          <Span bold>입올림</Span>
          <Right>
            <Switch
              checkedChildren="On"
              unCheckedChildren="Off"
              onChange={onChange}
            />
          </Right>
        </Flex>
        <Div>
          입올림 비율이 <Input height={20} width={60}></Input>% 이상 증가했을
          경우 알림
        </Div>
      </Div>
      <HrThin />

      <Div bc="black" mt={15} p={5} rounded={5}>
        <Flex width="100%">
          <Span bold>선회</Span>
          <Right>
            <Switch
              checkedChildren="On"
              unCheckedChildren="Off"
              onChange={onChange}
            />
          </Right>
        </Flex>
        <Div>
          선회 비율이 <Input height={20} width={60}></Input>% 이상 증가했을 경우
          알림
        </Div>
      </Div>
      <HrThin />

      <Div bc="black" mt={15} p={5} rounded={5}>
        <Flex width="100%">
          <Span bold>흑화</Span>
          <Right>
            <Switch
              checkedChildren="On"
              unCheckedChildren="Off"
              onChange={onChange}
            />
          </Right>
        </Flex>
        <Div>
          흑화 비율이 <Input height={20} width={60}></Input>% 이상 증가했을 경우
          알림
        </Div>
      </Div>
      <HrThin />

      <Div bc="black" mt={15} p={5} rounded={5}>
        <Flex width="100%">
          <Span bold>탈장</Span>
          <Right>
            <Switch
              checkedChildren="On"
              unCheckedChildren="Off"
              onChange={onChange}
            />
          </Right>
        </Flex>
        <Div>
          탈장 상태의 넙치 <Input height={20} width={60}></Input>마리 이상
          발견될 경우 알림
        </Div>
      </Div>
      <HrThin />

      <Div bc="black" mt={15} p={5} rounded={5}>
        <Flex width="100%">
          <Span bold>폐사</Span>
          <Right>
            <Switch
              checkedChildren="On"
              unCheckedChildren="Off"
              onChange={onChange}
            />
          </Right>
        </Flex>
        <Div>
          폐사 상태의 넙치<Input height={20} width={60}></Input>마리 이상 발견될
          경우 알림
        </Div>
      </Div>
      <HrThin />
    </>
  );
};

export default Setting;
