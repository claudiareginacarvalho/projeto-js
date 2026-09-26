import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cadastro from './paginas/Cadastro';
import Login from './paginas/Login';

const Rotas = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Cadastro />} />
                <Route path="/Login" element={<Login />} />
            </Routes>
        </BrowserRouter>
    );
};

export default Rotas;