import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import firebase from '../../Firebase';
import './cadastro.css';

class Cadastro extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            senha: '',
            nome: '',
            sobrenome: '',
            dataNascimento:'',
     
        };

        this.gravar = this.gravar.bind(this);
    }

    async gravar() {
               
        await firebase.auth().createUserWithEmailAndPassword(this.state.email,this.state.senha).
        then(async(retorno) =>{
            firebase.firestore().collection("usuario").doc(retorno.user.uid).set({
                nome: this.state.nome,
                sobrenome: this.state.sobrenome,
                dataNascimento: this.state.dataNascimento
            })
            this.setState({ erro: '' });
        })
       

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
            <div className="cadastro">
               <h1>Bem vindo a Pagina de Cadastro do meu projeto de Desenvolvimento Web</h1>

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
                <input
                    type="date"
                    placeholder="Data de Nascimento"
                    onChange={(e) => this.setState({ dataNascimento: e.target.value })}
                />

                <br />

                <button onClick={this.gravar}>Cadastrar</button>
                
                <br />
                <br />
                <span>se já tem uma conta siga para o login</span>
                <br />
                <Link to="/login">
                    <button>login</button>
                </Link>
            </div>
        );
    }
}

export default Cadastro;