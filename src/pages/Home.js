import React, {Component, Fragment } from "react";
import CreateForm from "../components/CreateForm"
import CicloDeVida from "../components/CicloDeVida";
import Lista from "../components/Lista";
import ListaPersonajes from "../components/colletions/ListaPersonajes";


class Home extends Component {


    constructor(props) {
        super(props);

        this.state = {
            form : {
                titulo: "Narella"
            }
        };
    }

    handleChange = e => {
        this.setState({
            form : {
                titulo: e.target.value,
            }
        })
    }

    render(){
        
        return(
            <Fragment>
                <ListaPersonajes></ListaPersonajes>
                {/* <CreateForm formValues={this.state.form} onChange={this.handleChange}></CreateForm>
                <CicloDeVida titulo={this.state.form.titulo}></CicloDeVida>
                <Lista></Lista> */}
            </Fragment>
        )
    }
}

export default Home