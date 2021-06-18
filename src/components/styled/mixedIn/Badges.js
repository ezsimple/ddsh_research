import styled from 'styled-components';
import { Div } from '../shared';
import { getValue } from '../Util';

export const Badge = styled(Div)`
  font-size: ${getValue(10)};
  border-radius: ${(props) => getValue(props.rounded) || getValue(4)};
  padding: 2px 5px;
`;
