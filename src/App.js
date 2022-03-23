
import './App.css';
import NavbarComponent from './components/NavbarComponent';
import BodyComponent from './components/BodyComponent';
import FooterComponent from './components/FooterComponent';
import ComponenteStateFull from './components/ComponenteStateFull';


function App() {
  
  const bienvenido ="Bienvenido";
  
  return (
    <div>
     <NavbarComponent />
     <BodyComponent firstName={bienvenido} />
     <ComponenteStateFull valorInicial={"estado inicial"}></ComponenteStateFull>
     <FooterComponent></FooterComponent>
  
 
    </div>
  );
}

export default App;
