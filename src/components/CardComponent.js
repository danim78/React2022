import React, {Component, Fragment } from "react";
import { Card } from 'react-bootstrap'

class CardComponent extends Component {
    constructor(props) {
        super(props);
        console.log('0');
        this.state = {};
    }

    componentDidMount(){
        console.log('2');
    }

    render(){
        console.log('1');
        return(
            <Fragment>
                <Card>
                    <Card.Body>
                        { this.props.titulo }
                    </Card.Body>
                </Card>
            </Fragment>
        )
    }
}

export default CardComponent