import { TaskCounterTitle, TaskCounterContainer, 
  ToDoListContainer, 
  TaskCounter,
  TaskCounterContent} from './styles';

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
    </ToDoListContainer>
  )
}