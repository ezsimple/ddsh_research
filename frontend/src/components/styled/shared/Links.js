import { Link as link } from 'react-router-dom';
import styled, { css } from 'styled-components';
import { color } from '../Properties';
import { getValue } from '../Util';
import * as cs from '../CoreStyles';

const defaultStyle = css`
  text-decoration: ${(props) => props.textDecoration || 'none'} !important;
  ${(props) => props.height && `height: ${getValue(props.height)};`};
`;

export const A = styled.a`
  ${defaultStyle};
  ${cs.margin};
  ${cs.padding};
  display: ${(props) => props.display || 'inline-block'};
  color: ${(props) => color[props.fg] || color.black};
  ${cs.pseudo.hover};
  ${cs.pseudo.active};
  ${(props) => props.noti && cs.noti};
  ${(props) => props.notiNew && cs.notiNew};
`;

export const Link = styled(link)`
  ${defaultStyle};
  ${cs.margin};
  ${cs.padding};
  display: ${(props) => props.display || 'inline-block'};
  color: ${(props) => color[props.fg] || color.black};
  ${cs.pseudo.hover};
  ${cs.pseudo.active};
  ${(props) => props.noti && cs.noti};
  ${(props) => props.notiNew && cs.notiNew};
`;
