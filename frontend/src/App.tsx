import './App.css';
import { Counter } from './features/counter/Counter';
import Posts from './features/posts/Posts'

function App() {
  return (
    <div className="App container">
      <Counter/>
      <Posts />
    </div>
  );
}

export default App;
