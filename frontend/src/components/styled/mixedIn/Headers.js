import styled from 'styled-components';
import { color } from '../Properties';
import { Flex } from '../shared';
import { getValue } from '../Util';

export const Header = styled(Flex)`
  align-items: center;
  border: 1px solid ${color.light};
  border-left: 0;
  border-right: 0;
  padding: 18px 16px;
  background-color: ${(props) => props.background || color.background};
  ${(props) => props.height && `height: ${getValue(props.height)}`}
`;
