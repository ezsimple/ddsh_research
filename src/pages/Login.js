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
import { rgba } from 'polished';

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

          <Flex
            column="column"
            p={0}
            radius={5}
            height={250}
            width="95%"
            mb={10}
            style={{
              background: rgba(136, 198, 235, 0.5),
            }}>
            <Div width="80%">
              <Input
                size="large"
                placeholder="아이디"
                prefix={<UserOutlined />}
                allowClear={true}
              />
            </Div>
            <Div mt={10} width="80%">
              <Input
                type="password"
                size="large"
                placeholder="패스워드"
                prefix={<LockOutlined />}
                allowClear={true}
              />
            </Div>
            <Div mt={10} width="80%">
              <Button fg="white" bg="blue" width="100% !important">
                로그인
              </Button>
            </Div>
          </Flex>
        </Flex>
      </BgImgDiv>
    </React.Fragment>
  );
};

export default Login;
