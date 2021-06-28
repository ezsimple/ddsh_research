import React, { useEffect } from 'react';
import {
  AimOutlined,
  AlertOutlined,
  AuditOutlined,
  // EditOutlined,
  FileDoneOutlined,
  LogoutOutlined,
  MonitorOutlined,
  CloseCircleOutlined,
  ExclamationCircleOutlined,
} from '@ant-design/icons';
import { Menu, Popconfirm, Modal } from 'antd';
import { Redirect } from 'react-router-dom';
import { fnLink } from '../utils/RouteUtil';

const AppMenu: React.FC = (props) => {
  const { location, setTitle, onClose } = props;

  const handleOk = () => {
    // console.log('handleOk', props);
    const { history } = props; // props가 살아있뇌 ...
    history.push('/logout');
    // window.location.href = '/logout';
  };

  const confirm = () => {
    Modal.confirm({
      icon: <ExclamationCircleOutlined />,
      title: '경고',
      content: '로그아웃 하시겠습니까?',
      okText: '확인',
      cancelText: '취소',
      onOk: async () => handleOk(),
    });
  };

  const fnClickMenu = (e, search, props) => {
    const { onClose } = props;
    if (e.key === '/close') {
      return onClose();
    }
    if (e.key === '/logout') {
      confirm();
      return;
    }
    onClose();
    const location = {
      pathname: e.key,
      search: search,
    };
    props.history.push(location);
  };

  useEffect(() => {
    setTitle(); // 최상단 메뉴이름 변경
  });

  return (
    <>
      <Menu
        theme="light"
        onClick={(e) => fnClickMenu(e, null, props)}
        // defaultSelectedKeys={this.state.selectedKeys}
        // defaultOpenKeys={this.state.openKeys}
        selectedKeys={[location.pathname]}
        mode="inline">
        <Menu.Item key="/close" icon={<CloseCircleOutlined />}>
          닫기
        </Menu.Item>
        <Menu.Item key="/dashboard" icon={<FileDoneOutlined />}>
          대시보드
        </Menu.Item>
        <Menu.Item key="/action/detect" icon={<MonitorOutlined />}>
          실시간 행동 감지
        </Menu.Item>
        <Menu.Item key="/stats/anal" icon={<AimOutlined />}>
          이상행동 분석 통계
        </Menu.Item>
        <Menu.Item key="/alarm/setting" icon={<AlertOutlined />}>
          알림 설정
        </Menu.Item>
        <Menu.Item key="/alarm/log" icon={<AuditOutlined />}>
          알림 로그
        </Menu.Item>
        {/*
      <Menu.Item key="/config/modify" icon={<EditOutlined />}>
        정보 수정
      </Menu.Item>
      */}
        <Menu.Item key="/logout" icon={<LogoutOutlined />}>
          로그아웃
        </Menu.Item>
      </Menu>
    </>
  );
};

export default AppMenu;
