import { css } from 'styled-components';
import { color } from './Properties';
import { getValue } from './Util';

export const margin = css`
  margin: ${(props) => getValue(props.m)};
  margin-top: ${(props) => props.mt && getValue(props.mt)};
  margin-right: ${(props) => props.mr && getValue(props.mr)};
  margin-bottom: ${(props) => props.mb && getValue(props.mb)};
  margin-left: ${(props) => props.ml && getValue(props.ml)};
`;

export const padding = css`
  padding: ${(props) => getValue(props.p)};
  padding-top: ${(props) => props.pt && getValue(props.pt)};
  padding-right: ${(props) => props.pr && getValue(props.pr)};
  padding-bottom: ${(props) => props.pb && getValue(props.pb)};
  padding-left: ${(props) => props.pl && getValue(props.pl)};
`;

export const sticky = css`
  position: sticky;
  z-index: ${(props) => props.zIndex || '30'};
  top: ${(props) => props.top || 0};
  bottom: ${(props) => props.bottom};
  left: ${(props) => props.left};
  right: ${(props) => props.right};
`;

export const fixed = css`
  {/* position: fixed; */''}
  top: ${(props) => props.top && getValue(props.top)};
  bottom: ${(props) => props.bottom && getValue(props.bottom)};
  left: ${(props) => props.left && getValue(props.left)};
  right: ${(props) => props.right && getValue(props.right)};
`;

export const noti = css`
  position: relative;
  &::after {
    content: '';
    display: block;
    width: 4px;
    height: 4px;
    background-color: ${(props) => color[props.notiBg] || color.danger};
    border-radius: 100%;
    position: absolute;
    top: ${(props) => getValue(props.notiTop) || '0'};
    right: ${(props) => getValue(props.notiRight) || '0'};
  }
`;

export const notiNew = css`
  position: relative;
  &::after {
    content: 'N';
    display: flex;
    justify-content: center;
    align-items: center;
    width: 14px;
    height: 14px;
    font-size: 10px;
    line-height: 14px;
    background-color: ${(props) => color[props.notiBg] || color.danger};
    color: ${color.white};
    border-radius: 5px;
    position: absolute;
    font-weight: 700;
    top: ${(props) => getValue(props.notiTop) || '0'};
    right: ${(props) => getValue(props.notiRight) || '0'};
    transform: translate(50%, -50%);
  }
`;

export const flex = css`
  display: flex;
  justify-content: ${(props) => props.justifyContent};
  align-items: ${(props) => props.justifyContent};
`;
