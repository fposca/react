
import './App.css';
import NavbarComponent from './components/NavbarComponent';
import BodyComponent from './components/BodyComponent';
import FooterComponent from './components/FooterComponent';


function App() {
  
  const bienvenido ="Bienvenido";
  
  return (
    <div>
     <NavbarComponent />
     <BodyComponent firstName={bienvenido} />
     <FooterComponent></FooterComponent>
  
 
    </div>
  );
}

export default App;
