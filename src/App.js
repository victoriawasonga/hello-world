import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import Karibu from './components/Welcome'
import Hello from './components/Hello';
import Greet1 from './components/Greet1'

function App() {
  return (
    <div className="App">
      <Greet/>
      <Karibu/>
      <Hello/>
      <Greet1 name="Kelly" heroName='LadyBird'>
      <p>Ella Atieno</p>
      </Greet1>
      <Greet1 name="Ella" heroName='LadyBird'/>

      <Karibu name="Kelly" heroName='LadyBird'/>
      <Karibu name="Ella" heroName='LadyBird'/>

    </div>
  );
}

export default App;
