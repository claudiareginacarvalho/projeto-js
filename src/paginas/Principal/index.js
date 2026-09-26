import React, { Component } from 'react';
import firebase from '../../Firebase';
import './principal.css';

class Principal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nome: '',
            sobrenome: '',
            dataNascimento: ''
        }
    }

    async componentDidMount(){
        await firebase.auth().onAuthStateChanged(async (usuario) => {
            if (usuario) {
                var uid = usuario.uid;
                await firebase.firestore().collection("usuario").doc(uid).get()
                .then((retorno) => {
                    this.setState({
                        nome: retorno.data().nome,
                        sobrenome: retorno.data().sobrenome,
                        dataNascimento: retorno.data().dataNascimento

                    });
               }); 
            } 
        });
    }



    render(){
        return(
            <div className="principal">
                    Nome: {this.state.nome} <br/>
                    Sobrenome: {this.state.sobrenome}<br/>
                    Data de Nascimento: {this.state.dataNascimento}
            </div>
        )
    }
}

export default Principal;