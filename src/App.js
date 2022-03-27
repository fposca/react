
import './App.css';
import NavbarComponent from './components/NavbarComponent';
import Itemlist from './components/containers/Itemlist';
import FooterComponent from './components/FooterComponent';




function App() {

  
  const bienvenido ="Bienvenido";


  return (
    <div>
     <NavbarComponent />
     <Itemlist greeting={bienvenido} />
     <div className="height"></div>
     <FooterComponent></FooterComponent>
 

    </div>
  );
}

export default App;
