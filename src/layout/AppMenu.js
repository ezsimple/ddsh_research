import {
  AimOutlined,
  AlertOutlined,
  AuditOutlined,
  EditOutlined,
  FileDoneOutlined,
  LogoutOutlined,
  MonitorOutlined,
} from '@ant-design/icons';
import { Menu } from 'antd';
import React, { useEffect } from 'react';
import { Div } from '../components/styled/shared';

const AppMenu = (props) => {
  const { location } = props;

  useEffect(() => {
    return fnSetTitle(location, props);
  });

  return (
    <Menu
      theme="light"
      onClick={(e) => fnGoto(e, null, props)}
      // defaultSelectedKeys={this.state.selectedKeys}
      // defaultOpenKeys={this.state.openKeys}
      selectedKeys={[location.pathname]}
      mode="inline">
      <Menu.Item key="/dashboard" icon={<FileDoneOutlined />}>
        대시보드
      </Menu.Item>
      <Menu.Item key="/detection/action" icon={<MonitorOutlined />}>
        실시간 행동 감지
      </Menu.Item>
      <Menu.Item key="/stats/dispose" icon={<AimOutlined />}>
        이상행동 분석 통계
      </Menu.Item>
      <Menu.Item key="/alarm/setting" icon={<AlertOutlined />}>
        알림 설정
      </Menu.Item>
      <Menu.Item key="/alarm/log" icon={<AuditOutlined />}>
        알림 로그
      </Menu.Item>
      <Menu.Item key="/config/modify" icon={<EditOutlined />}>
        정보 수정
      </Menu.Item>
      <Menu.Item key="/logout" icon={<LogoutOutlined />}>
        로그아웃
      </Menu.Item>
    </Menu>
  );
};

export default AppMenu;

const fnSetTitle = (location, props) => {
  switch (location.pathname) {
    case '/dashboard':
      return props.setTitle('※ 대시보드');
    case '/detection/action':
      return props.setTitle('※ 실시간 행동 감지');
    case '/stats/dispose':
      return props.setTitle('※ 이상행동 분석 통계');
    case '/alarm/setting':
      return props.setTitle('※ 알림 설정');
    case '/alarm/log':
      return props.setTitle('※ 알림 로그');
    case '/config/modify':
      return props.setTitle('※ 정보 수정');
    default:
  }
};

const fnGoto = (e, search, props) => {
  console.log(props);
  const location = {
    pathname: e.key,
    search: search,
  };
  props.history.push(location);
};
