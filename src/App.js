import logo from './logo.svg';
import './App.css';
import Home from './Components/Home/Home';
import Nav from './Components/Nav/Nav';

function App() {
  return (
    <div className="App">
      {/* <Search/> */}
      <Nav/>
      <Home/>
    </div>
  );
}

export default App;
