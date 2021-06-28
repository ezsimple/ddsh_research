#!/bin/bash

BUILD_PKG=build.tar.gz
SERVER=air-backup # 54.180.162.128 
IP=210.92.91.232
PORT=3001
DEST=/home/airteam/gov/ddsh_research

if [[ "$1" = "rp2" ]]; then
  SERVER=rp2
  IP=100.100.121.124
  PORT=3001
  DEST=/home/mkeasy/gov/ddsh_research
fi

function _guide() {
  echo "[모바일 적용방법] 크롬 개발자도구활성화(F12),강력 새로고침"
  echo "[모바일 접속방법] http://$IP:$PORT"
}

yarn build;
tar cf - build | gzip -c > $BUILD_PKG ;
scp $BUILD_PKG $SERVER:$DEST;
ssh $SERVER "(cd $DEST; rm -rf build; zcat $BUILD_PKG | tar xf - ;rm -f $BUILD_PKG)"
rm -f $BUILD_PKG;
_guide
