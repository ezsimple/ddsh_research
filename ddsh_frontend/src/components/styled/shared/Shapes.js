import styled from 'styled-components';
import * as cs from '../CoreStyles';
import { getValue } from '../Util';
import { color } from '../Properties';

export const TriangleUp = styled.div`
  display: inline-block;
  width: 0;
  height: 0;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  ${(props) => `border-bottom: 7px solid ${color[props.bg] || color.green}`};
  ${cs.padding};
  ${cs.margin};
`;

export const TriangleDown = styled.div`
  display: inline-block;
  width: 0;
  height: 0;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  ${(props) => `border-top: 7px solid ${color[props.bg] || color.green}`};
  ${cs.padding};
  ${cs.margin};
`;

//말풍선
export const WordBalon = styled.div`
  position: relative;
  padding: 15px;
  width: ${(props) => getValue(props.width)};
  color: ${(props) => color[props.fg] || color.white};
  background-color: ${(props) => color[props.bg] || color.danger};
  -webkit-border-radius: 10px;
  -moz-border-radius: 10px;
  border-radius: 10px;

  ${cs.padding};
  ${cs.margin};

  &::after {
    content: '';
    position: absolute;
    bottom: -13px;
    left: 50px;
    border-width: 13px 0 0px 13px;
    border-style: solid;
    border-color: ${(props) => color[props.bg] || color.danger} transparent;
    display: block;
    width: 0;
  }
`;
