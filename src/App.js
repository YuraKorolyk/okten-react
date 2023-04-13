import './App.css';
import Posts from "./components/Posts/Posts";
import Spaceships from "./components/Spaceships/Spaceships";
import Users from "./components/Users/Users";
function App() {
  return (
      <div className='App'>
          <Posts/>
          <hr/>
          <Spaceships/>
          <hr/>
          <Users/>
      </div>
  );
}
export default App;
