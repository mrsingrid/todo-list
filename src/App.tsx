import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './styles/global';
import { defaultTheme } from './styles/themes/default';
import { CheckCircle, Circle, PlusCircle
} from "phosphor-react";
import { Header } from './components/Header';
import { InputNewTask } from './components/InputNewTask';
import { ToDoList } from './components/ToDoList';
import { useState } from 'react';
import { Task } from './types/task';

export function App() {
  const [tasks, setTasks] = useState<Task[]>([]);

  function handleCreateNewTask(task: string) {
    setTasks([
      ...tasks, 
      {
        name: task, 
        status: 'inProgress'
      }
    ])
  }

  return (
    <ThemeProvider theme={defaultTheme}>
      <Header />
      <InputNewTask handleCreateNewTask={handleCreateNewTask}/>

      <ToDoList tasks={tasks}/>

      {/* <ul>
        <li><Circle /> Meditar</li>
        <li><CheckCircle />Comprar manteiga</li>
      </ul> */}
      <GlobalStyle />
    </ThemeProvider>
  )
}
