import logo from '../logo.svg';
import { Navbar, Container, Col, Form } from 'react-bootstrap'
import { Fragment } from 'react';

function Header(){
    return(
      <Fragment>
        <Navbar bg="primary" variant="dark">
          <Container>
            <Navbar.Brand href="">React & Material-UI Sample Application</Navbar.Brand>
            
            {/* <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#features">Features</Nav.Link>
              <Nav.Link href="#pricing">Pricing</Nav.Link>
            </Nav> */}
          </Container>
        </Navbar> 
        <Col xs={5}>
          <Form.Control placeholder="Busqueda por curso" />
        </Col>        
      </Fragment>
    )
}

export default Header