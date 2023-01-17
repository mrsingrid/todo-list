import { PlusCircle } from "phosphor-react";
import { ChangeEvent, useState } from 'react';
import { NewTaskButton, Input, InputContainer } from './styles';

interface InputNewTaskProps {
  handleCreateNewTask: (task: string) => void;
}

export function InputNewTask({handleCreateNewTask}: InputNewTaskProps) {
  const [newTask, setNewTask] = useState('');

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    setNewTask(event.target.value);
  }

  return (
    <InputContainer>
      <Input 
        type="text" 
        name="task" 
        id="task" 
        placeholder='Adicione uma nova tarefa'
        onChange={handleChange}
      />

      <NewTaskButton onClick={() => handleCreateNewTask(newTask)}>
        Criar
        <PlusCircle />
      </NewTaskButton>
    </InputContainer>
  )
}