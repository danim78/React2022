import logo from '../logo.svg';
import { Nav, Navbar, Container } from 'react-bootstrap'
import { Link } from "react-router-dom";
import { useEffect, useState } from 'react';

function Header(props){
  const [titulo, setTitulo] = useState('React Info 2022')

  useEffect(()=>{
    setTitulo("titulo modificado")
  },[props.loquesea])

  useEffect(()=>{
    setTitulo("titulo modificado")
  },[titulo])

  useEffect(()=>{
    setTitulo("titulo modificado")
  },[])


      return(
      <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="#home">{titulo}</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
            <Nav.Link>
              <Link className="link" to="/about">About</Link>
            </Nav.Link>
            
          </Nav>
        </Container>
      </Navbar> 
    )
}

export default Header