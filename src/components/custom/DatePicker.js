import { DatePicker } from 'antd';
import styled, { css } from 'styled-components';
import './RangePicker.css';

const defaultStyle = css``;

export const RangePicker = styled(DatePicker.RangePicker)`
  ${defaultStyle}/*
  왜? import css 만 동작할 까?
  .ant-picker-time-panel {
    display: none !important;
  }

  .ant-picker-panels > *:first-child button.ant-picker-header-next-btn {
    visibility: visible !important;
  }

  .ant-picker-panels > *:first-child button.ant-picker-header-super-next-btn {
    visibility: visible !important;
  }

  .ant-picker-panels > *:last-child {
    display: none !important;
  }

  .ant-picker-panel-container,
  .ant-picker-footer {
    width: 280px !important;
  }

  .ant-picker-footer-extra > div {
    flex-wrap: wrap !important;
  }
*/
`;
