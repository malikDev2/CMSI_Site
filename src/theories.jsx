import { Link } from 'react-router-dom';
import { useState } from 'react';
import './App.css';
import Card2 from './card2.jsx';
import images from './images.jsx';


function Theories(){
    // useState to change selected theory
    const [ selectedTheory, setSelectedTheory] = useState('');

    const handleSelectChange = (e) => {
    setSelectedTheory(e.target.value);
    }

    return(<>
    <div className="theories">
        <select name="theo" id="theorySelector" className="selector" onChange={handleSelectChange}>
            <option value="">Select a theory</option>
            <option value="Util">Utilitarianism</option>
            <option value="Raw">Rawls theory of justice</option>
            <option value="Norm">Normative Theories</option>
            <option value="SCT">Social Contract Theory</option>
        </select>
    <Link to='/' className='homeButton'>
        <h1>Home</h1>
    </Link>
    </div>
        </>);
}

export default Theories