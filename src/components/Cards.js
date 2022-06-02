import React, { Component } from "react";
import CardComponent from "./CardComponent";
import { Col, Container, Row } from "react-bootstrap";
import img1 from "../media/react.png";
import img2 from "../media/04.png";
import img3 from "../media/05.png";

class Cards extends Component{

    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render(){
        return(
            <Container>
                <Row>
                    <Col className="row">
                        <CardComponent 
                        imgsrc={img1} 
                        cardt="Curso completo Desarrolador Web React (con Redux)"
                        card_desc="Aprenda a crear y lanzar aplicaciones web React
                                    usando React v16, Redux, Webpack, React-Router v4 y más!">
                        </CardComponent>
                    </Col>
                    <Col className="row">
                        <CardComponent 
                        imgsrc={img2} 
                        cardt="React - La guía definitiva"
                        card_desc="Sumérgete y aprende React desde cero! ¡Aprenda los conceptos
                        básicos de Reactjs, Redux, React Routing, Animaciones,
                        Next.js y mucho más!">
                        </CardComponent>
                    </Col>
                    <Col className="row">
                        <CardComponent 
                        imgsrc={img3} 
                        cardt="Render Side Server con React y Redux"
                        card_desc="Cree aplicaciones React, Redux y React Router usando
                        técnicas de Render Side Server (SSR), Isomorfismo, y 
                        Universal JS">
                        </CardComponent>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default Cards;