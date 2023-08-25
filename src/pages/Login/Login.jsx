import { Input } from '@chakra-ui/react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from 'redux/authOperations';
import { Container } from 'components/Layout/Layout.styled';
import { LoginSection, LoginForm, LoginLabel, LoginBtn } from './Login.styled';

function Login() {
  const dispatch = useDispatch();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onFormSubmit = e => {
    e.preventDefault();
    dispatch(login({ email, password }));

    setEmail('');
    setPassword('');
  };

  const inputValue = e => {
    const key = e.target.name;
    const value = e.target.value;

    switch (key) {
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;

      default:
        return;
    }
  };

  return (
    <Container>
      <LoginSection>
        <LoginForm onSubmit={onFormSubmit}>
          <LoginLabel>
            Email:
            <Input
              onChange={inputValue}
              value={email}
              name="email"
              size="medium"
              width="300px"
              type=" text"
            />
          </LoginLabel>
          <LoginLabel>
            Password:
            <Input
              name="password"
              onChange={inputValue}
              value={password}
              size="medium"
              width="300px"
              type=" text"
            />
          </LoginLabel>
          <LoginBtn
            width="300px"
            height="40px"
            type="submit"
          >
            Log in
          </LoginBtn>
        </LoginForm>
      </LoginSection>
    </Container>
  );
}

export { Login };
