import React, {useState} from 'react';
import './App.css';
import CartridgeList from './components/CartridgeList';
import {cartridges as ct} from './components/findCartridges';
import SearchForm from './components/SearchForm';
import FilterForm from './components/FilterForm';

function App () {
    const [cartridges, setCartridges] = useState(ct);
    console.log({cartridges})
    return (
        <div className='App'>
            <SearchForm setCartridges={setCartridges} cartridges={cartridges}/>
            <FilterForm setCartridges={setCartridges} cartridges={cartridges}/>
            <CartridgeList setCartridges={setCartridges} cartridges={cartridges}/>
        </div>
    );
}

export default App;
