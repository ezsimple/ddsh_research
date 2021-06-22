import * as Page from '../pages';

const AppRouteList = [
  { uri: '/dashboard', page: Page.Dashboard },
  { uri: '/action/detect', page: Page.Detect },
  { uri: '/stats/anal', page: Page.Anal },
  { uri: '/alarm/setting', page: Page.Setting },
  { uri: '/alarm/log', page: Page.Log },
  { uri: '/config/modify', page: Page.Modify },
];

export default AppRouteList;
