import React from 'react';
import { MenuOutlined } from '@ant-design/icons';
import { Layout, Drawer } from 'antd';
import { Div, Flex, Right } from '../components/styled/shared';
import AppMenu from './AppMenu';
import './AppLayout.css';

const { Header, Content, Footer, Sider } = Layout;

class AppLayout extends React.PureComponent {
  state = { visible: false, collapsed: true, title: '' };
  // toggle = () => { this.setState({ collapsed: !this.state.collapsed, }); };

  setTitle = (txt) => {
    this.setState({ title: txt });
  };
  showDrawer = () => {
    this.setState({ visible: true });
  };
  onClose = () => {
    this.setState({ visible: false });
  };

  // 레이아웃 로딩시만 타이틀 변경
  fnSetTitle = (location) => {
    switch (location.pathname) {
      case '/dashboard':
        return this.setTitle('※ 대시보드');
      case '/detection/action':
        return this.setTitle('※ 실시간 행동 감지');
      case '/stats/dispose':
        return this.setTitle('※ 이상행동 분석 통계');
      case '/alarm/setting':
        return this.setTitle('※ 알림 설정');
      case '/alarm/log':
        return this.setTitle('※ 알림 로그');
      case '/config/modify':
        return this.setTitle('※ 정보 수정');
      default:
    }
  };

  render() {
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
              <Div fontSize={14} bold ml={5}>
                {this.state.title}
              </Div>
              <Right>
                <MenuOutlined
                  onClick={this.showDrawer}
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
            {this.props.children}
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
            onClose={this.onClose}
            visible={this.state.visible}>
            <AppMenu {...this.props} setTitle={this.setTitle} />
          </Drawer>
        </Layout>
      </Layout>
    );
  }
}

export default AppLayout;
