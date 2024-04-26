import logo from './logo.svg';
import Nav from './navbar';
import Home from './home';
import Divider from './divider';
import Main from './contenu';
import News from './info';
import './home.css';

function App() {
  return (
    <div className="App">
        <Nav/>
        <Home/>
        <Divider/>
        <Main/>
        <News/>
    </div>
  );
}

export default App;
