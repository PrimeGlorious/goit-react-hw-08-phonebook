import styled from 'styled-components';

export const RegisterSection = styled.section`
  padding: 200px 0px;
`
export const RegisterBtn = styled.button`
  color: white;
  background-color: rgba(104, 85, 224, 1);
  cursor: pointer;
  border: 0;
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

export const RegisterForm = styled.form`
  display: flex;
  width: 300px;
  flex-direction: column;
  gap: 40px;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
`

export const RegisterLabel = styled.label`
  display: flex;
  font-weight: 500;
  font-size: 18px;
  flex-direction: column;
`
