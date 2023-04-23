import './App.css';
import {Link, Route, Routes} from "react-router-dom";
import Todos from "./components/Todos/Todos";
import Albums from "./components/Albums/Albums";
import Comments from "./components/Comments/Comments";
import Post from "./components/Post/Post";
function App() {
  return (
    <>
      <ul>
        <li><Link to={'/'}>Home</Link></li>
        <li><Link to={'/todos'}>todos</Link></li>
        <li><Link to={'/albums'}>albums</Link></li>
        <li><Link to={'/comments'}>comments</Link></li>
      </ul>
      <Routes>
        <Route path={'/'}/>
        <Route path={'/todos'} element={<Todos/>}/>
        <Route path={'/albums'} element={<Albums/>}/>
          <Route path={'/comments'} element={<Comments/>}>
              <Route path={'posts/:id'} element={<Post/>}/>
          </Route>
      </Routes>
    </>
  );
}
export default App;
