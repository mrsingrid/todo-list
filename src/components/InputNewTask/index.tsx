import { PlusCircle } from "phosphor-react";
import { NewTaskButton, Input, InputContainer } from './styles';

export function InputNewTask() {
  return (
    <InputContainer>
      <Input 
        type="text" 
        name="task" 
        id="task" 
        placeholder='Adicione uma nova tarefa'
      />

      <NewTaskButton>
        <PlusCircle />
        Criar
      </NewTaskButton>
    </InputContainer>
  )
}