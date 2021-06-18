import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import AppLayout from '../layout/AppLayout';
import AppRouteList from './AppRouteList';
import { Login, Logout } from '../pages';

const getRouteInfo = () => {
  const pathname = window.location.pathname;
  const row = AppRouteList.find((page) => page.uri === pathname);
  return row;
};

const findRouteTable = (props) => {
  // 미인증 사용자 접근 금지 기능
  // if (!SessionUtil.isLogined())
  //  return <Redirect to={Const.AUTO_LOGOUT_PAGE} />;

  const { url } = props.match;
  const row = getRouteInfo();
  if (row === undefined) {
    // 404 일 경우
    return <Route render={(props) => <Login {...props} />} />;
  }

  const { page } = row;
  return (
    <AppLayout {...props}>
      <Route path={url} component={page ? page : Login} />
    </AppLayout>
  );
};

const AppRoute = (props) => {
  return (
    <BrowserRouter>
      <React.Suspense fallback={<div className="loading-indicator" />}>
        <Switch>
          {/* path 순서에 먼저 걸리면 땡! */}
          <Route path={'/login'} render={(props) => <Login {...props} />} />
          <Route path={'/logout'} render={(props) => <Logout {...props} />} />
          <Route render={(props) => findRouteTable({ ...props })} />
        </Switch>
      </React.Suspense>
    </BrowserRouter>
  );
};

export default AppRoute;
