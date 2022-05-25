import React, { Component } from "react";

class ClassComponent extends Component {

    render(){
        const { titulo } = this.props;
        return(
            <h1 className="titulo-verde"> { titulo } </h1>
        )
    }
}

export default ClassComponent