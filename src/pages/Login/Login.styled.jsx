import styled from 'styled-components';

export const LoginSection = styled.section`
  padding: 200px 0px;
`

export const LoginBtn = styled.button`
  color: rgb(104, 85, 224);
  background-color: rgba(255, 255, 255, 1);
  border: 1px solid rgba(104, 85, 224, 1);
  cursor: pointer;
  border-radius: 4px;
  font-weight: 600;
  margin: 0 10px;
  width: 200px;
  padding: 10px 0;
  box-shadow: 0 0 20px rgba(104, 85, 224, 0.2);
  transition: 0.4s;
  &:hover {
  color: white;
  box-shadow: 0 0 20px rgba(104, 85, 224, 0.6);
  background-color: rgba(104, 85, 224, 1);
}
`

export const LoginInput = styled.input`
  border: 1px solid rgba(104, 85, 224, 1);
`

export const LoginForm = styled.form`
  display: flex;
  width: 300px;
  flex-direction: column;
  gap: 40px;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
`

export const LoginLabel = styled.label`
  display: flex;
  font-weight: 500;
  font-size: 18px;
  flex-direction: column;
`
