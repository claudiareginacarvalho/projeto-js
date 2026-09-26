import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import firebase from '../../Firebase';

class Cadastro extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            senha: '',
            nome: '',
            sobrenome: ''
        };

        this.gravar = this.gravar.bind(this);
    }

    async gravar() {
        
        await firebase.auth().createUserWithEmailAndPassword(this.state.email,this.state.senha)
        then((retorno) =>{
            firebase.firestore().collection("usuario").doc(retorno.user.uid).set({
                nome: this.state.nome,
                sobrenome: this.state.sobrenome
            })
        });





       /*firebase.firestore().collection('usuario').add({
            nome: this.state.nome,
            sobrenome: this.state.sobrenome
        });*/
        /*firebase.firestore().collection('usuario').doc("1").set({
            nome: this.state.nome,
            sobrenome: this.state.sobrenome
        });*/
    }

    render() {
        return (
            <div>
                <h1>Pagina de Cadastro</h1>

                <input
                    type="text"
                    placeholder="Email"
                    onChange={(e) => this.setState({ email: e.target.value })}
                />
                <br />

                <input
                    type="password"
                    placeholder="Senha"
                    onChange={(e) => this.setState({ senha: e.target.value })}
                />
                <br />

                <input
                    type="text"
                    placeholder="Nome"
                    onChange={(e) => this.setState({ nome: e.target.value })}
                />

                <br />

                <input
                    type="text"
                    placeholder="Sobrenome"
                    onChange={(e) => this.setState({ sobrenome: e.target.value })}
                />

                <br />

                <button onClick={this.gravar}>Gravar</button>
            </div>
        );
    }
}

export default Cadastro;