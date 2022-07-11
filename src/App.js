import logo from './logo.svg';
import './App.css';
import Product from './components/Product'
import NavBar from './components/NavBar';
import Items from './components/Items';


function App() {
  return (
    <div className="App">
      <NavBar/>
      <Items/>
      {/* <Product/> */}
    </div>
  );
}

export default App;
