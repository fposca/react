
import './App.css';
import ComponenteA from './components/ComponenteA';
import ComponenteB from './components/ComponenteB';


function App() {
  
  const bienvenido ="Bienvenido";
  
  return (
    <div>
     <ComponenteA />
     <ComponenteB firstName={bienvenido} />
  
 
    </div>
  );
}

export default App;
