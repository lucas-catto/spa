
import React from 'react';
import ListaNomes from './listaNomes';

import './App.css';

function App() {

    const nomes = ['lucas', 'john', 'larry'];

    return (
        <div className="App">
            <h1>Nomes:</h1>
            <ListaNomes nomes={nomes}/>
        </div>
    );
}

export default App;
