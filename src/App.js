import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Information from './components/Information';
import Cryptotable from './components/Cryptotable';
import Footer from './components/Footer';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Information/>
      <Cryptotable/>
      <Footer/>
    </div>
  );
}

export default App;
