import styled, { css } from 'styled-components';
import { color, responsive } from '../Properties';
import { getValue, hasValue } from '../Util';
import {
  position,
  margin,
  padding,
  sticky,
  fixed,
  noti,
  notiNew,
  spin,
} from '../CoreStyles';

const defaultStyle = css`
  width: ${(props) => props.width && getValue(props.width)};
  height: ${(props) => props.height && getValue(props.height)};
  line-height: ${(props) => getValue(props.lineHeight)};
  font-size: ${(props) => getValue(props.fontSize) || 'inherit'};
  font-weight: ${(props) => (props.bold ? 'bold' : 'inherit')};
  ${(props) => props.fontSize && `font-weight: ${props.fontSize};`};
  ${(props) => props.fontWeight && `font-weight: ${props.fontWeight};`};
  ${(props) => props.bold && `font-weight: bold;`}
  ${(props) => props.lighter && `font-weight: lighter;`}

  text-align: ${(props) => props.textAlign};
  color: ${(props) => color[props.fg] || 'inherit'};
  ${(props) => props.bg && `background-color: ${color[props.bg]}`};

  ${(props) =>
    (props.bgFrom || props.bgTo) &&
    `background: linear-gradient(${props.deg || 145}deg, ${
      hasValue(props.bgFrom) ? color[props.bgFrom] || props.bgFrom : color.white
    }, ${
      hasValue(props.bgTo) ? color[props.bgTo] || props.bgTo : color.white
    });`};

  border: ${(props) => (props.bc ? `1px solid ${color[props.bc]}` : 0)};
  border-top: ${(props) =>
    props.bt && `${getValue(props.bt)} solid ${color[props.bc]}`};
  border-right: ${(props) =>
    props.br && `${getValue(props.br)} solid ${color[props.bc]}`};
  border-bottom: ${(props) =>
    props.bb && `${getValue(props.bb)} solid ${color[props.bc]}`};
  border-left: ${(props) =>
    props.bl && `${getValue(props.bl)} solid ${color[props.bc]}`};

  ${position}
  ${margin};
  ${padding};

  ${(props) => props.relative && 'position: relative;'};
  ${(props) => props.absolute && 'position: absolute;'};
  ${(props) => props.fixed && 'position: fixed;'};
  ${(props) => props.sticky && 'position: sticky;'};

  ${(props) => props.xCenter && `transform: translateX(-50%);`};
  ${(props) => props.yCenter && `transform: translateY(-50%);`};
  ${(props) =>
    props.center && `top: 50%; left: 50%; transform: translate(-50%, -50%);`};

  position: ${(props) => props.position};
  display: ${(props) => props.display};
  flex-grow: ${(props) => props.flexGrow};
  flex-basis: ${(props) => props.flexBasis};
  flex-shrink: ${(props) => props.flexShrink && props.flexShrink};
  cursor: ${(props) => props.cursor && 'pointer'}
  z-Index: ${(props) => props.zIndex};
  max-width: ${(props) => getValue(props.maxWidth)};
  min-width: ${(props) => getValue(props.minWidth)};
  max-height: ${(props) => getValue(props.maxHeight)};
  min-height: ${(props) => getValue(props.minHeight)};
  top: ${(props) => getValue(props.top)};
  bottom: ${(props) => getValue(props.bottom)};
  left: ${(props) => getValue(props.left)};
  right: ${(props) => getValue(props.right)};

  overflow: ${(props) => props.overflow};
  border-radius: ${(props) => getValue(props.rounded)}

  ${(props) => props.noti && noti}
  ${(props) => props.notiNew && notiNew};

  ${(props) =>
    props.shadow === 'sm' && 'box-shadow: 1px 1px 3px rgba(0,0,0,0.1);'};
  ${(props) =>
    props.shadow === 'md' && 'box-shadow: 1px 1px 10px rgba(0,0,0,0.1);'};
  ${(props) =>
    props.shadow === 'lg' && 'box-shadow: 1px 1px 15px rgba(0,0,0,0.1);'};

`;

export const Div = styled.div`
  ${defaultStyle};
`;

export const Span = styled.span`
  ${defaultStyle};
`;

export const Img = styled.img`
  width: ${(props) => getValue(props.width) || '100%'};
  height: ${(props) => getValue(props.height) || '100%'};
  object-fit: ${(props) => props.cover && 'cover'};
  ${defaultStyle};
`;

export const Flex = styled(Div)`
  display: ${(props) => props.display || 'flex'}; // flex, inline-flex
  align-items: ${(props) =>
    props.alignItems ||
    'center'}; // flex-start, flex-end, center, baseline, stretch
  /* align-content: ${(props) =>
    props.alignContent ||
    'center'} // flex-start, flex-end, center, space-between, sapce-around, stretch */
  justify-content: ${(props) =>
    props.justifyContent ||
    'center'}; // flex-start, flex-end, center, space-between, space-around
  /* flex-direction: ${(props) =>
    props.flexDirection}; //test 후 삭제(아래 props 로 대체함) */
  flex-wrap: ${(props) => props.flexWrap}; // wrap, wrap-reverse, nowrap
  flex-direction: ${(props) =>
    props.column && 'column'}; // row, row-reverse, column, column-reverse
  margin-left: ${(props) => props.right && 'auto'};
`;

export const Right = styled(Div)`
  margin-left: auto;
`;

export const Hr = styled.hr`
  margin: 0;
  ${margin};
  ${padding};
  border: 1px solid ${color.light};
  border-color: ${(props) => color[props.bc]};
  border-left: 0;
  border-right: 0;
  border-bottom: 0;
`;

export const Sticky = styled(Div)`
  ${sticky};
`;

export const Fixed = styled(Div)`
  ${fixed};

  max-width: ${responsive.maxWidth}; //디폴트 값으로 768 이상일 경우는 더이상 클수 없도록 제어
  ${(props) => props.noResponsive && `max-width: none;`}; //max-width 해제
  max-width: ${(props) => getValue(props.maxWidth)};
`;

export const Mask = styled.div`
  ${fixed};
  top: ${(props) => (props.underNav ? '56px' : '0')};
  width: 100%;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 50;
`;

export const ShadowBox = styled(Div)`
  background: ${color.white};
  border-radius: ${getValue(6)};
  // margin-bottom: ${getValue(16)};
  margin-bottom: ${(props) =>
    hasValue(props.mb) ? getValue(props.mb) : getValue(16)};
  ${(props) =>
    props.p !== 0 &&
    props.p !== '' &&
    `padding: ${getValue(25)} ${getValue(16)};`}
  box-shadow: 1px 1px 3px rgba(0,0,0,0.1);
`;

export const Coupon = styled(Div)`
  display: flex;
  color: ${color.white};
  position: relative;
  width: ${getValue(237)};
  height: ${getValue(130)};
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: ${getValue(10)} ${getValue(20)};

  &::after {
    position: absolute;
    top: 50%;
    right: -26px;
    width: 42px;
    height: 42px;
    margin-top: -21px;
    border-radius: 50%;
    background-color: #ffffff;
    content: '';
  }
`;

export const Spin = styled(Div)`
  ${spin};
  display: inline-block;
`;

export const BgImgDiv = styled.div`
  min-height: ${(props) => getValue(props.height) || '768px'};
  background-image: url(${(props) => props.imgUrl});
  background-size: cover;
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  position: relative;
  z-index: 0;
  &:before {
    padding: 0;
    margin: 0;
    background: rgba(0, 0, 0, 0.3);
    content: '';
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;
    z-index: -1;
  }
`;
