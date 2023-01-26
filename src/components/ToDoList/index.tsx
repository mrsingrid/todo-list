import { ClipboardText, Trash } from 'phosphor-react';
import { Task } from '../../types/task';
import { TaskCounterTitle, TaskCounterContainer, 
  ToDoListContainer, 
  TaskCounter,
  TaskCounterContent,
  MessageNoResultsContainer,
  MessageContainer,
  Description,
  Text,
  List,
  Item,
  StatusTaskButton,
  RemoveButtonContainer,
  TaskDescription} from './styles';

  interface TodoListProps {
    tasks: Task[];
  }

  export function ToDoList({ tasks }: TodoListProps) {

  const finishedTasks = tasks.filter(task => task.inProgress === false).length;

  return (
    <ToDoListContainer>
      <TaskCounterContainer>
        <TaskCounterContent>
          <TaskCounterTitle>
            Tarefas criadas
          </TaskCounterTitle>
          <TaskCounter>
            {tasks.length}
          </TaskCounter>
        </TaskCounterContent>

        <TaskCounterContent>
          <TaskCounterTitle>
            Concluídas
          </TaskCounterTitle>
          <TaskCounter>
            {finishedTasks} de {tasks.length}
          </TaskCounter>
        </TaskCounterContent>
      </TaskCounterContainer>

      {
        tasks.length === 0 ?
        <MessageNoResultsContainer>
          <ClipboardText size={56} />
          <MessageContainer>
            <Text>Você ainda não tem tarefas cadastradas</Text>
            <Description>Crie tarefas e organize seus itens a fazer</Description>
          </MessageContainer>
          
        </MessageNoResultsContainer>

        :

        <List>
          {
            tasks.map(task => (
              <Item key={task.name}>
                <StatusTaskButton />
                <TaskDescription>{task.name}</TaskDescription>
                <RemoveButtonContainer>
                  <Trash size={16} />
                </RemoveButtonContainer>
              </Item>
            ))
          }
        </List>
      }


    </ToDoListContainer>
  )
}