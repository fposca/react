import './App.css';
import NavBarComponent from './components/NavbarComponent';
import ItemDetailContainer from './components/containers/ItemDetailContainer';
import ItemListContainer from './components/containers/ItemListContainer'
import { BrowserRouter, Route, Routes} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <NavBarComponent/>
      <Routes>
        <Route path = '/' element = {<ItemListContainer/>}/>
        <Route path = '/category/:id' element = {<ItemListContainer/>} />
        <Route path = '/item/:id' element = {<ItemDetailContainer/>} />
      {/* <ItemListContainer greeting={"Bienvenidos a nuestra after app"}/> */}
      {/* <ItemDetailContainer/> */}
      </Routes>
    </BrowserRouter>
    );
}

export default App;
