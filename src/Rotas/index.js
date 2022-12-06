/*import React from 'react';
import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";

import Home from '../paginas/Home';
import Contato from '../paginas/Contato';

const Rotas = () => (
    <BrowserRouter>
        <Routes>
            <Route exact path='/' component={ Home } />
            <Route exact path='/contato' component={ Contato } />
        </Routes>
    </BrowserRouter>
);

export default Rotas;*/

import React from 'react';
import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";

import Home from '../paginas/Home';
import Contato from '../paginas/Contato';

export default function Pages(){
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/contato" element={<Contato />} />
            </Routes>
        </BrowserRouter>
    );
}