import React from 'react';
import Login from 'screens/Login';
import { translate} from 'react-i18next';
import { Field, reduxForm } from 'redux-form';
import { Content, Item, Input, Label, Toast, Form, Icon } from 'native-base';

const required = value => (value ? undefined : 'Required');
const maxLength = max => value =>
  value && value.length > max ? `Must be ${max} characters or less` : undefined;
const maxLength15 = maxLength(15);
const minLength = min => value =>
  value && value.length < min ? `Must be ${min} characters or more` : undefined;
const minLength8 = minLength(8);
const email = value =>
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
    ? 'Invalid email address'
    : undefined;
const alphaNumeric = value =>
  value && /[^a-zA-Z0-9 ]/i.test(value) ? 'Only alphanumeric characters' : undefined;

class LoginForm extends React.Component {
  renderInput({ input, label, type, meta: { touched, error, warning } }) {
    return (
      <Content>
        <Item error={error && touched} success={!error && touched}>
          <Label style={{ fontSize: 12, color: '#fff' }}>
            { input.name.toUpperCase() }
          </Label>
          <Input
            ref={c => (this.textInput = c)}
            secureTextEntry={input.name === 'password' ? true : false}
            {...input}
          />
          {error && touched && <Icon name='close-circle' />}
          {!error && touched && <Icon name='checkmark-circle' />}
        </Item>
      </Content>
    );
  }

  async login() {
    if (this.props.valid) {
      this.props.navigation.navigate('Drawer');
    } else {
      Toast.show({
        text: 'Enter Valid Username & password!',
        duration: 2000,
        type: 'danger',
        position: 'bottom',
        textStyle: { textAlign: 'center' },
      });
    }
  }

  render() {
    const { t } = this.props;
    const form = (
      <Form>
        <Field name={t('login:email')} component={this.renderInput} validate={[email, required]} />
        <Field
          name={t('login:password')}
          component={this.renderInput}
          validate={[alphaNumeric, minLength8, maxLength15, required]}
        />
      </Form>
    );
    return (
      <Login navigation={this.props.navigation} loginForm={form} onLogin={() => this.login()} />
    );
  }
}

const LoginContainer = reduxForm({
  form: 'login',
})(LoginForm);

export default translate(['common'], { wait: true })(LoginContainer);
