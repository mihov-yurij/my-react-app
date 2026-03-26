import './App.css';
import { useGetTodosQuery } from './redux/api/hooks/index.ts';

import Posts from './components/Posts.tsx';

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
