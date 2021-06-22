import React, { useState } from 'react';
import { useEffectOnce } from 'react-use';
import { MenuOutlined } from '@ant-design/icons';
import { Layout, Drawer } from 'antd';
import { Div, Flex, Right } from '../components/styled/shared';
import AppMenu from './AppMenu';
import './AppLayout.css';

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
        return setTitle('※ 대시보드');
      case '/detection/action':
        return setTitle('※ 실시간 행동 감지');
      case '/stats/dispose':
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
          <Flex>
            <Div fontSize={16} bold ml={5}>
              {title}
            </Div>
            <Right>
              <MenuOutlined
                onClick={onShow}
                style={{
                  fontSize: '120%',
                  color: 'black',
                  paddingRight: '5px',
                }}
              />
            </Right>
          </Flex>
        </Header>
        <Content
          className="site-layout-background"
          style={{
            margin: '5px 5px',
            padding: 0,
            overflow: 'hidden',
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
