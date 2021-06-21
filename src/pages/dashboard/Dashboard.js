import React from 'react';
import { Button } from '../../components/styled/shared';
import { fnLink } from '../../utils/RouteUtil';

const Dashboard = (props) => {
  return (
    <div>
      <Button
        fg="white"
        bg="blue"
        rounded={5}
        onClick={() => fnLink(props, '/login', null)}>
        로그인
      </Button>
    </div>
  );
};

export default Dashboard;
