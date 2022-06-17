
import './App.css';
import { Routes, Route } from "react-router-dom";
import Noticia from './components/Noticia';
import Header from './components/Header';
import ClassComponent from './components/ClassComponent';
import Counter from './components/Counter';
import Home from './pages/Home';
import About from './pages/About';
import Error404 from './components/Error404';
import 'bootstrap/dist/css/bootstrap.min.css'
import Layout from './components/Layout';

function App() {
  return (
    <div className="App">
  {/* <Header></Header>
      <Noticia titulo="Primer noticia" descripcion="detalle de la noticia nro. 1"></Noticia>
      <Noticia titulo="Segunda noticia"></Noticia>
      <ClassComponent titulo="este es el class component"></ClassComponent>
      <Counter></Counter>
      <Noticia></Noticia> 
      <Home></Home> */}
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="*" element={<Error404 />}/>
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
