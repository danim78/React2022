import React, {Component, Fragment } from "react";
import { Card } from 'react-bootstrap'

class CicloDeVida extends Component {
    constructor(props) {
        super(props);
        console.log('0');
        this.state = {
            api : null  /* Se define el estado que va a guardar la info de la API */ 
        };
    }

    componentDidMount(){
        console.log('2');
        this.setState({api:["elemento uno"]})
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

export default CicloDeVida