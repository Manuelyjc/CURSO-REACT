import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">

      <AppSegundoMensaje />

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Lo que siento cuando veo a danna:
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Me cae del culo
        </a>
      </header>
    </div>
  );
}

function AppSegundoMensaje() {
  return (
    <div className="App-mensaje">
      <h2>Hola sapa fea metida</h2>
      <p>Una de aqui no esta soportando nada</p>
    </div>
  );
}

export default App;
