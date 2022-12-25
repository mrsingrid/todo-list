import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './styles/global';
import { defaultTheme } from './styles/themes/default';
import { CheckCircle, Circle, PlusCircle
} from "phosphor-react";
import { Header } from './components/Header';
import { InputNewTask } from './components/InputNewTask';
import { ToDoList } from './components/ToDoList';

export function App() {

  return (
    <ThemeProvider theme={defaultTheme}>
      <Header />
      <InputNewTask />

      <ToDoList />

      <ul>
        <li><Circle /> Meditar</li>
        <li><CheckCircle />Comprar manteiga</li>
      </ul>
      <GlobalStyle />
    </ThemeProvider>
  )
}
