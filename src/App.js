import './App.css';
import HelloWorld from './components/HelloWorld'
import Frase from './components/Frase'
import Pessoa from './components/Pessoa'

function App() {
  return (
    <div>
        <HelloWorld/>
        <Frase/>

        <Pessoa
          foto="https://via.placeholder.com/150"
          nome="Matheus"
          idade="23"
          profissao="Programador"
        />
    </div>

  );
}

export default App;
