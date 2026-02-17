import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import { ThemeProvider, createTheme } from '@mui/material';
import Layout from './components/Layout';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
import { useTodos } from './hooks/useLocalStorage';

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: { main: '#1976d2' },
  },
});

function App() {
  const { todos, addTodo, removeTodo, toggleTodo, editTodo } = useTodos();

  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <TodoInput onAdd={addTodo} />
        <TodoList
          todos={todos}
          onToggle={toggleTodo}
          onRemove={removeTodo}
          onEdit={editTodo}
        />
      </Layout>
    </ThemeProvider>
  );
}

export default App;
