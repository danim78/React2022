import React, {Component, Fragment } from "react";
import { Card, Button } from 'react-bootstrap';

class CardComponent extends Component {


    constructor(props) {
        super(props);

        this.state = {
        };
    }

    render(){
        
        return(
            <Fragment>
               {/*  <Card>
                    <Card.Body>
                        { this.props.titulo }
                    </Card.Body>
                </Card> */}
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={this.props.imgsrc} />
                    <Card.Body>
                        <Card.Title>{this.props.cardt}</Card.Title>
                        <Card.Text>
                        {this.props.card_desc}
                        </Card.Text>
                        <Button variant="primary">Ir al curso</Button>
                    </Card.Body>
                </Card>
            </Fragment>
        )
    }
}

export default CardComponent