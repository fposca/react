import './App.css';
import NavBarComponent from './components/NavbarComponent';
import FooterComponent from './components/FooterComponent';
import ItemDetailContainer from './components/containers/ItemDetailContainer';
import ItemListContainer from './components/containers/ItemListContainer'
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import NotFound from './components/NotFound';
import Cart from './components/Cart';

function App() {
  return (
    <BrowserRouter>
      <NavBarComponent/>
      <Routes>
        <Route path = '/' element = {<ItemListContainer/>}/>
        <Route path = '/category/:id' element = {<ItemListContainer/>} />
        <Route path = '/item/:id' element = {<ItemDetailContainer/>} />
        <Route path = '/cart' element = {<Cart/>} />
        <Route path = '*' element = {<NotFound/>} />

      {/* <ItemListContainer greeting={"Bienvenidos a nuestra after app"}/> */}
      {/* <ItemDetailContainer/> */}
      </Routes>
      <FooterComponent></FooterComponent>
    </BrowserRouter>
    );
}

export default App;
