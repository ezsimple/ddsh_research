import { css } from 'styled-components';
import aniKey from './Keyframes';
import { activeColor, color, hoverColor } from './Properties';
import { getValue, hasValue } from './Util';

export const position = css`
  ${(props) => props.relative && 'position: relative;'};
  ${(props) => props.absolute && 'position: absolute;'};
  ${(props) => props.fixed && 'position: fixed;'};
  ${(props) => props.sticky && 'position: sticky;'};
  ${(props) => props.position && `position: ${props.position};`};
`;

export const margin = css`
  margin: ${(props) => getValue(props.m)};
  margin-top: ${(props) => hasValue(props.mt) && getValue(props.mt)};
  margin-right: ${(props) => hasValue(props.mr) && getValue(props.mr)};
  margin-bottom: ${(props) => hasValue(props.mb) && getValue(props.mb)};
  margin-left: ${(props) => hasValue(props.ml) && getValue(props.ml)};

  ${(props) =>
    hasValue(props.my) &&
    `margin-top: ${getValue(props.my)}; margin-bottom: ${getValue(props.my)};`}
  ${(props) =>
    hasValue(props.mx) &&
    `margin-left: ${getValue(props.mx)}; margin-right: ${getValue(props.mx)};`}
`;

export const padding = css`
  padding: ${(props) => getValue(props.p)};
  padding-top: ${(props) => props.pt && getValue(props.pt)};
  padding-right: ${(props) => props.pr && getValue(props.pr)};
  padding-bottom: ${(props) => props.pb && getValue(props.pb)};
  padding-left: ${(props) => props.pl && getValue(props.pl)};

  ${(props) =>
    props.py &&
    `padding-top: ${getValue(props.py)}; padding-bottom: ${getValue(
      props.py
    )};`}
  ${(props) =>
    props.px &&
    `padding-left: ${getValue(props.px)}; padding-right: ${getValue(
      props.px
    )};`}
`;

export const sticky = css`
  position: sticky;
  z-index: ${(props) => props.zIndex || '10'};
  top: ${(props) => props.top || 0};
  bottom: ${(props) => props.bottom};
  left: ${(props) => props.left};
  right: ${(props) => props.right};
`;

export const fixed = css`
  position: fixed;

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

// const flex = css`
//     display: flex;
//     justify-content: ${props => props.justifyContent};
//     align-items: ${props => props.justifyContent};
// `;

// ?????? ??????
export const spin = css`
  animation: ${aniKey.spin} ${(props) => props.duration || 3}s infinite linear;
`;

// ???????????? ???????????? ????????? ?????? ???????????? ?????????
export const scaleUp = css`
  animation: ${aniKey.scaleUp} 0.3s ease-in-out;
`;

// ?????? ???????????? ?????????
export const moveDown = css`
  animation: ${aniKey.moveDown} 0.3s ease-in-out;
`;

// ?????? ???????????? ?????????
export const moveUp = css`
  animation: ${aniKey.moveUp} 0.3s ease-in-out;
`;

//TODO : pc??? ????????? hover??? ????????? ???????????????
const hover = css`
  ${(props) =>
    props.bg &&
    !props.noHover &&
    `&:hover{background-color: ${hoverColor[props.bg]}}`};
`;

const active = css`
  ${(props) =>
    props.bg &&
    !props.noActive &&
    `&:active{background-color: ${activeColor[props.bg]}}`};
`;

export const pseudo = {
  hover: hover,
  active: active,
  moveDown: moveDown,
  moveUp: moveUp,
};
