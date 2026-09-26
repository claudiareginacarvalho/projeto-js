import React, { Component } from 'react';
import firebase from '../../Firebase';

class Login extends Component {
    constructor (props){
        super(props);
        this.state = {
            email:"",
            senha: ""
           
        }
        
        this.acessar = this.acessar.bind(this);
    }

    async acessar(){
        this.setState({ erro: "" });

        await firebase.auth().signInWithEmailAndPassword (this.state.email, this.state.senha)
        .then(()=> {
            window.location.href = "./principal";
        })
        .catch((erro)=>{
            this.setState({ erro: "Erro ao acessar: E-mail ou senha incorretos ou não cadastrado." });
        });
    }

    render() {
        return (
            <div>
            
                <h1>Login</h1>
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
                <button onClick={this.acessar}>Acessar</button>

                {this.state.erro && (
                    <p style={{ color: 'red' }}>{this.state.erro}</p>
                )}

            </div>
        );
    }
}

export default Login;