import React, { Component, Fragment } from "react"
import { Card } from "react-bootstrap"

class Lista extends Component {
    

    state = {
        titulo: "Titulo de la lista",
        elementos: [
            "Algún texto en el cuerpo de la tarjeta",
            "Algún texto en el cuerpo de la tarjeta",
            "Algún texto en el cuerpo de la tarjeta",
        ]
    }

    render (){
        const elementos = [
            "Algún texto en el cuerpo de la tarjeta",
            "Algún texto en el cuerpo de la tarjeta 2",
            "Algún texto en el cuerpo de la tarjeta 3"
        ]
        const { titulo } = this.props
        return (
            <Fragment>
                {
                    elementos.map((item) => {
                        return(
                            <Card>
                                <Card.Body>{item}</Card.Body>
                            </Card>
                        )
                    }
                    )
                } 
            </Fragment>
        )
        }
}

export default Lista