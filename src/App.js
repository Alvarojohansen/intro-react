
import './App.css';
// import Prueba from './components/Prueba';
import NavBar from './components/NavBar';
// import Button from './components/Button';
// import Form from './components/Form'
import Login from './components/LocalBailable-parcial1/Login';
import ContainerProducts from './components/parcial2/ContainerProducts';
import FormControl from './components/Ejercicio2.js]/FormControl';



function App() {
  return (
    <div className="App">
       <NavBar/>
      {/*<Prueba nombre="Juan" edad="23" profesion="estudiante" color="white"/>  
      <Prueba nombre="Ernesto" edad="24" profesion="vendedor"color="white"/> 
      <Prueba nombre="Manuelin" edad="21" profesion="narco"color="white"/> 
      <Button className="button"/>
      <Form/> */}
      <Login/>
      <ContainerProducts/>
      <FormControl/>
      
    </div>
  );
}

export default App;
