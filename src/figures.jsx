import { useState } from 'react';
import { Link } from 'react-router-dom';
import './App.css';
import Card from './card.jsx';
import Card2 from './card2.jsx';
import images from './images.jsx';

function Figures() {
    // useState to change selected figure
    const [selectedFigure, setSelectedFigure] = useState('');

    // List of figures
    const figureData = {
        aristotle: { title: "Aristotle", body: "The founder of philosophy", image: images.aristotle },
        kant: { title: "Kant", body: "I kant take it anymore" },
        rawls: { title: "Rawls", body: "buddy." },
    };

    // change figure method
    const handleSelectChange = (e) => {
        setSelectedFigure(e.target.value);
    };

    return (
        <>
        {/* Drop down selector */}
        <div className="figures">
            <select name="figs" id="figureSelector" className="selector" onChange={handleSelectChange}>
                <option value="">Select a figure</option>
                <option value="aristotle">Aristotle</option>
                <option value="kant">Kant</option>
                <option value="rawls">Rawls</option>
            </select>

            {/* If selectedFigure has figure data, display a card using its data */}
            {selectedFigure && (
                <Card2
                    title={figureData[selectedFigure].title}
                    body={figureData[selectedFigure].body}
                    image={figureData[selectedFigure].image}
                />
            )}

            {/* Home button */}
            <Link to='/' className='homeButton'>
                <h1>Home</h1>
            </Link>
        </div>
        </>
    );
}

export default Figures;
