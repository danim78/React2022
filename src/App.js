
import './App.css';
import Noticia from './components/Noticia';
import Header from './components/Header';
import ClassComponent from './components/ClassComponent';
import Counter from './components/Counter';
import Home from './pages/Home';
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <div className="App">
 {/*  <Header></Header>
      <Noticia titulo="Primer noticia" descripcion="detalle de la noticia nro. 1"></Noticia>
      <Noticia titulo="Segunda noticia"></Noticia>
      <ClassComponent titulo="este es el class component"></ClassComponent>
      <Counter></Counter>
      <Noticia></Noticia> */}
      <Home></Home>
    </div>
  );
}

export default App;
