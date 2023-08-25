import { useState } from 'react';
import { Input } from '@chakra-ui/react';
import { useDispatch } from 'react-redux';
import { register } from 'redux/authOperations';
import { Container } from 'components/Layout/Layout.styled';
import { RegisterSection, RegisterForm, RegisterLabel, RegisterBtn } from './Register.styled';

function Register() {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onFormSubmit = e => {
    e.preventDefault();
    dispatch(register({ name, email, password }));
    setName('');
    setEmail('');
    setPassword('');
  };

  const inputValue = e => {
    const key = e.target.name;
    const value = e.target.value;

    switch (key) {
      case 'name':
        setName(value);
        break;
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
      <RegisterSection>
        <RegisterForm onSubmit={onFormSubmit}>
          <RegisterLabel>
            User name:
            <Input
              value={name}
              name="name"
              onChange={inputValue}
              size="medium"
              width="300px"
              type=" text"
            />
          </RegisterLabel>
          <RegisterLabel>
            Email:
            <Input
              value={email}
              name="email"
              onChange={inputValue}
              size="medium"
              width="300px"
              type=" text"
            />
          </RegisterLabel>
          <RegisterLabel>
            Password:
            <Input
              minLength="7"
              value={password}
              name="password"
              onChange={inputValue}
              size="medium"
              width="300px"
              type=" text"
            />
          </RegisterLabel>
          <RegisterBtn
            width="300px"
            colorScheme="linear-gradient(to right, #00b4db, #0083b0);"
            height="40px"
            type="submit"
          >
            Register
          </RegisterBtn>
        </RegisterForm>
      </RegisterSection>
    </Container>
  );
}

export { Register };
