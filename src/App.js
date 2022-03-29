
import './App.css';
import NavbarComponent from './components/NavbarComponent';
import ItemlistContainer from './components/ItemlistContainer';
import FooterComponent from './components/FooterComponent';
import ItemDetailContainer from './components/containers/ItemDetailContainer';




function App() {

  
  const bienvenido ="Bienvenido";


  return (
    <div>
     <NavbarComponent />
<ItemDetailContainer></ItemDetailContainer>
{/* <ItemlistContainer greetings={bienvenido}/> */}

<div className="height"></div>
<FooterComponent></FooterComponent>
 

    </div>
  );
}

export default App;
