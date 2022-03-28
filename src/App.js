
import './App.css';
import NavbarComponent from './components/NavbarComponent';
import ItemlistContainer from './components/ItemlistContainer';
import FooterComponent from './components/FooterComponent';




function App() {

  
  const bienvenido ="Bienvenido";


  return (
    <div>
     <NavbarComponent />

     <ItemlistContainer greetings={bienvenido}/>

     <div className="height"></div>
     <FooterComponent></FooterComponent>
 

    </div>
  );
}

export default App;