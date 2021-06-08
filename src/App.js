import './App.css';
import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './components/Product/ItemListContainer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar/>
      </header>
      <ItemListContainer/>
    </div>
  );
}

export default App;