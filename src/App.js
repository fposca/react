
import './App.css';
import NavbarComponent from './components/NavbarComponent';
import ItemlistContainer from './components/containers/ItemlistContainer';
import FooterComponent from './components/FooterComponent';
import ItemCount from './components/ItemCount';


function App() {
  
  const bienvenido ="Bienvenido";
  
  return (
    <div>
     <NavbarComponent />
     <ItemlistContainer firstName={bienvenido} />
     <ItemCount valorInicial={"estado inicial"}></ItemCount>
     <FooterComponent></FooterComponent>
  
 
    </div>
  );
}

export default App;
