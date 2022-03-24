
import './App.css';
import NavbarComponent from './components/NavbarComponent';
import ItemlistContainer from './components/containers/ItemlistContainer';
import FooterComponent from './components/FooterComponent';
import ItemCount from './components/ItemCount';


function App() {
  
  const ondAdd = (stock) => {
    console.log({stock});
  }
 
  
  const bienvenido ="Bienvenido";


  return (
    <div>
     <NavbarComponent />
     <ItemlistContainer greeting={bienvenido} />
     <div className='cardContainers'>
  
     <ItemCount stock={10} onAdd={ondAdd}></ItemCount>

     </div>
     <FooterComponent></FooterComponent>
     

    </div>
  );
}

export default App;
