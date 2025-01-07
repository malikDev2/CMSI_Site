import { useState } from 'react';
import { Link } from 'react-router-dom';
import './App.css';
import Card from './card.jsx';

function Units(){

    const [selectedUnit, setSelectedUnit] = useState('');

    const unitData = {};

    const handleSelectChange = (e) => {
        setSelectedUnit(e.target.value);
    };

    return(
    <>
    <div className = "units">
        <select name="uns" id="unitSelector" className="selector" onChange={handleSelectChange}>
            <option value="">Select a unit</option>

        </select>

    
    <Link to='/' className='homeButton'>
        <h1>Home</h1>
    </Link>
    </div>     
    </>);
}

export default Units