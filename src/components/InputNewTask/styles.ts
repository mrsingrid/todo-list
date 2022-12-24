import styled from 'styled-components';

export const InputContainer = styled.div`
  width: 100%;
  display: flex;
  gap: 0.5rem;
  justify-content: center;
  margin-top: -1.68rem;
`

export const Input = styled.input`
  padding: 1rem;
  width: 39.16rem;
  background: ${props => props.theme['gray-500']};
  color: ${props => props.theme['gray-100']};
  border-radius: 8px;
  border: none;

  &:focus {
    outline: 0;
    box-shadow: 0 0 0 2px ${props => props.theme['purple-dark']};
  }

  ::placeholder {
    color: ${props => props.theme['gray-300']};
  }
`

export const NewTaskButton = styled.button`
  padding: 1rem;
  color: ${props => props.theme['gray-100']};
  background: ${props => props.theme['blue-dark']};
  font-size: 0.875rem;
  border-radius: 8px;
  display: flex;
  gap: 0.5rem;
  align-items: center;
  border: none;
  cursor: pointer;

  &:hover {
    background: ${props => props.theme.blue};
    transition: background-color 1s;
  }
`