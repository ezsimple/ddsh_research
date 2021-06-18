import React from 'react';
import { Div } from '../../components/styled/shared';
import { Select } from 'antd';

const { Option } = Select;

const Action = (props) => {
  return (
    <Div>
      <Select
        showSearch
        style={{ width: 200 }}
        placeholder="양식장 선택"
        optionFilterProp="children"
        filterOption={(input, option) =>
          option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
        }>
        <Option value="A">양식장A</Option>
        <Option value="B">양식장B</Option>
        <Option value="C">양식장C</Option>
      </Select>
    </Div>
  );
};

export default Action;
