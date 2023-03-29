import logo from './logo.svg';
import './App.css';
import NavBar from './components/Nav/Nav';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer greeting={'Bienvenido!'}/>
      
    </div>
  );
}

export default App;
