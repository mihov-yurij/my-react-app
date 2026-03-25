import './App.css';
import { useGetTodosQuery } from './redux/api/hooks';

import Posts from './components/Posts';

function App() {
  const { data, isLoading } = useGetTodosQuery('');

  console.log('Todos data:', data);
  console.log('Is loading todos:', isLoading);

  return (
    <>
      <Posts />
    </>
  );
}

export default App;
