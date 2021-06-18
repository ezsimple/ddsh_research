import { LockOutlined, UserOutlined } from '@ant-design/icons';
import React from 'react';
import {
  BgImgDiv,
  Button,
  Div,
  Flex,
  Input,
} from '../components/styled/shared';
import backGroundImage from '../images/넙치.png';

const Login = (props) => {
  return (
    <React.Fragment>
      <BgImgDiv imgUrl={backGroundImage} height="100vh">
        <Flex
          column="column"
          justifyContent="space-between"
          position="relative"
          height="100vh"
          width="100%"
          pt={60}
          mt={0}>
          <Div
            display="block"
            fg="white"
            bold
            fontSize={24}
            textAlign="center"
            mb={20}>
            질병 조기 감지 시스템
            <div style={{ fontWeight: 100, fontSize: 14 }}>
              넙치 행동 생리 기반
            </div>
          </Div>

          <Div p={10} radius={5} height={150} width="85%" bg="white" mb={80}>
            <Div pb={5}>
              <Input
                size="large"
                placeholder="아이디"
                prefix={<UserOutlined />}
                allowClear={true}
              />
            </Div>
            <Div pt={5}>
              <Input
                type="password"
                size="large"
                placeholder="패스워드"
                prefix={<LockOutlined />}
                allowClear={true}
              />
            </Div>
            <Div pt={10}>
              <Button fg="white" bg="blue" width="100%">
                로그인
              </Button>
            </Div>
          </Div>
        </Flex>
      </BgImgDiv>
    </React.Fragment>
  );
};

export default Login;
