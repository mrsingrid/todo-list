import { ClipboardText } from 'phosphor-react';
import { TaskCounterTitle, TaskCounterContainer, 
  ToDoListContainer, 
  TaskCounter,
  TaskCounterContent,
  MessageNoResultsContainer,
  MessageContainer,
  Description,
  Text} from './styles';

export function ToDoList() {
  return (
    <ToDoListContainer>
      <TaskCounterContainer>
        <TaskCounterContent>
          <TaskCounterTitle>
            Tarefas criadas
          </TaskCounterTitle>
          <TaskCounter>
            5
          </TaskCounter>
        </TaskCounterContent>

        <TaskCounterContent>
          <TaskCounterTitle>
            Concluídas
          </TaskCounterTitle>
          <TaskCounter>
            2 de 5
          </TaskCounter>
        </TaskCounterContent>
      </TaskCounterContainer>

      {
        <MessageNoResultsContainer>
          <ClipboardText size={56} />
          <MessageContainer>
            <Text>Você ainda não tem tarefas cadastradas</Text>
            <Description>Crie tarefas e organize seus itens a fazer</Description>
          </MessageContainer>
          
        </MessageNoResultsContainer>
      }
    </ToDoListContainer>
  )
}