import { MenuOutlined } from '@ant-design/icons';
import { Layout } from 'antd';
import React from 'react';
import { Div, Flex, Right } from '../components/styled/shared';
import AppMenu from './AppMenu';

const { Header, Content, Footer, Sider } = Layout;

class AppLayout extends React.PureComponent {
  state = { collapsed: true, title: '' };
  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };
  setTitle = (txt) => {
    this.setState({ title: txt });
  };
  render() {
    return (
      <Layout>
        <Layout>
          <Header
            className="site-layout-background"
            style={{
              padding: 0,
              backgroundColor: '#ffffff',
              textAlign: 'right',
            }}>
            <Flex>
              <Div fontSize={14} bold ml={5}>
                {this.state.title}
              </Div>
              <Right>
                <MenuOutlined
                  onClick={this.toggle}
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
            }}>
            {this.props.children}
          </Content>
          {/*
          <Footer style={{ backgroundColor: '#ffffff', textAlign: 'right' }}>
            역학교육 by 피그컬쳐 사업팀
          </Footer>
          */}
        </Layout>
        <Sider
          theme="light"
          width={190}
          breakpoint={'lg'}
          trigger={null}
          onBreakpoint={(broken) => {
            // this.setState({ collapsed: broken }); // 로딩시 자동 감지
          }}
          collapsible
          collapsedWidth="0"
          collapsed={this.state.collapsed}
          style={{
            height: '100vh',
            overflow: 'auto',
            // position: 'fixed', // 삼선버튼이 사라집니다.
            left: 0,
            zIndex: 1,
          }}>
          <div className="logo" style={{ height: '64px' }}></div>
          {/* 프로그램 메뉴정의 */}
          <AppMenu {...this.props} setTitle={this.setTitle} />
        </Sider>
      </Layout>
    );
  }
}

export default AppLayout;
