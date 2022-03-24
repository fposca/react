
import './App.css';
import NavbarComponent from './components/NavbarComponent';
import ItemlistContainer from './components/containers/ItemlistContainer';
import FooterComponent from './components/FooterComponent';



function App() {

  
  const bienvenido ="Bienvenido";


  return (
    <div>
     <NavbarComponent />
     <ItemlistContainer greeting={bienvenido} />
     <FooterComponent></FooterComponent>
     

    </div>
  );
}

export default App;
