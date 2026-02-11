
import './App.css';
import Home from './pages/home';
import Header from './components/header';
import Footer from './components/Footer';
import { BrowserRouter as Router, Routers, Route} from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <Header/>
      <Home/>
      <Footer/>
    </div>
  );
}

export default App;
