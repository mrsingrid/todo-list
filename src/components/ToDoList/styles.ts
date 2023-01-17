import styled from 'styled-components';

export const ToDoListContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding-top: 4rem;
  justify-content: center;
  align-items: center;
`

export const TaskCounterContainer = styled.div`
  width: 45rem;
  display: flex;
  justify-content: space-between;
  padding-bottom: 1.5rem;
`

export const TaskCounterContent = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;
`

export const TaskCounterTitle = styled.span`
  font-size: 0.875rem;
  color: ${props => props.theme.blue};
  font-weight: 700;
`

export const TaskCounter = styled.div`
  display: flex;
  align-items: center;
  padding: 0.125rem 0.5rem;
  border-radius: 999px;
  background: ${props => props.theme['gray-400']};
  font-size: 0.75rem;
  font-weight: 700;
`

export const MessageNoResultsContainer = styled.div`
  width: 45rem;
  display: flex; 
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 4rem;
  gap: 1rem;
  color: ${props => props.theme['gray-300']};
  border-top: 1px solid ${props => props.theme['gray-400']}
`

export const MessageContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`

export const Text = styled.p`
  font-weight: bold;
`

export const Description = styled.span`
`

export const List = styled.ul`
  display: flex;
`;

export const Item = styled.li``;