import React, { useState } from 'react';
import { useEffectOnce } from 'react-use';
import { MenuOutlined } from '@ant-design/icons';
import { Layout, Drawer, Select } from 'antd';
import { Div, Flex, Right } from '../components/styled/shared';
import AppMenu from './AppMenu';
import './AppLayout.css';

const { Option } = Select;
const { Header, Content, Footer, Sider } = Layout;

const AppLayout: React.FC = (props) => {
  const [visible, setVisible] = useState(false);
  const [title, setTitle] = useState('');

  // 메뉴 보이기
  const onShow = () => {
    setVisible(true);
  };

  // 메뉴 닫기
  const onClose = () => {
    setVisible(false);
  };

  // 레이아웃 로딩시만 타이틀 변경
  useEffectOnce(() => {
    fnSetTitle();
  });

  const fnSetTitle = () => {
    const { location } = window;
    switch (location.pathname) {
      case '/dashboard':
        return setTitle('※ 실시간 행동 감지');
      case '/action/detect':
        return setTitle('※ 실시간 행동 감지');
      case '/stats/anal':
        return setTitle('※ 이상행동 분석 통계');
      case '/alarm/setting':
        return setTitle('※ 알림 설정');
      case '/alarm/log':
        return setTitle('※ 알림 로그');
      case '/config/modify':
        return setTitle('※ 정보 수정');
      default:
    }
  };

  return (
    <Layout>
      <Layout>
        <Header
          // className="site-layout-background"
          style={{
            padding: 0,
            backgroundColor: '#ffffff',
            textAlign: 'right',
            overflow: 'hidden',
          }}>
          <Flex nowrap>
            <Div fontSize={16} bold ml={5}>
              {title}
            </Div>
            <Right>
              <Select
                // allowClear // 양식장은 clear를 하지 못하도록 합니다.
                showSearch
                bordered
                // showArrow={false}
                style={{ width: '120px' }}
                placeholder="양식장 선택"
                optionFilterProp="children"
                filterOption={(input, option) =>
                  option.children.toLowerCase().indexOf(input.toLowerCase()) >=
                  0
                }>
                <Option value="A">양식장A</Option>
                <Option value="B">양식장B</Option>
                <Option value="C">양식장C</Option>
              </Select>
            </Right>
            <Div width={40} m={0} ml={0}>
              <MenuOutlined
                onClick={onShow}
                style={{
                  fontSize: '120%',
                  color: 'black',
                  paddingRight: '5px',
                  marginLeft: '5px',
                }}
              />
            </Div>
          </Flex>
        </Header>
        <Content
          // className="site-layout-background"
          style={{
            margin: '5px 0px', // margin 색상때문에 top, bottom만  여백을 줍니다
            padding: '2px',
            overflow: 'hidden',
            backgroundColor: '#ffffff',
          }}>
          {props.children}
        </Content>
        {/*
          <Footer style={{ backgroundColor: '#ffffff', textAlign: 'right' }}>
            역학교육 by 피그컬쳐 사업팀
          </Footer>
          */}
        <Drawer
          // title=" "
          className="ant-drawer-body"
          closeIcon
          placement="right"
          closable={false}
          onClose={onClose}
          visible={visible}>
          <AppMenu {...props} setTitle={fnSetTitle} onClose={onClose} />
        </Drawer>
      </Layout>
    </Layout>
  );
};

export default AppLayout;
