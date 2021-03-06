import React from 'react';
import PropTypes from 'prop-types';
import { Content, Item, Input, Label, Icon } from 'native-base';

const InputField = ({
  value,
  onChange,
  text,
  fieldName,
  touched,
  error
}) => (
  <Content>
    <Item error={error && touched} success={!error && touched}>
      <Label style={{ fontSize: 12, color: '#fff' }}> { text } </Label>
      <Input
        ref={c => (this.textInput = c)}
        secureTextEntry={fieldName === 'password' ? true : false}
        onChangeText={(text)=> onChange(text)}
        value={value}
      />
      {error && touched && <Icon name='close-circle' />}
      {!error && touched && <Icon name='checkmark-circle' />}
    </Item>
  </Content>
);

InputField.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
  fieldName: PropTypes.string.isRequired
};

export default InputField;
