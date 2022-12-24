import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './styles/global';
import { defaultTheme } from './styles/themes/default';
import { CheckCircle, Circle, PlusCircle
} from "phosphor-react";
import { Header } from './components/Header';
import { InputNewTask } from './components/InputNewTask';

export function App() {

  return (
    <ThemeProvider theme={defaultTheme}>
      <Header />
      <InputNewTask />

      <div>
        <p>Tarefas criadas</p>
        <span>
          5
        </span>
      </div>

      <div>
        <p>Concluídas</p>
        <span>
          2 de 5
        </span>
      </div>

      <ul>
        <li><Circle /> Meditar</li>
        <li><CheckCircle />Comprar manteiga</li>
      </ul>
      <GlobalStyle />
    </ThemeProvider>
  )
}
