import { useState } from 'react';
import { Link } from 'react-router-dom';
import './App.css';
import Card3 from './card3.jsx';

function Units(){

    const [selectedUnit, setSelectedUnit] = useState('');

    const unitData = {
        util: {
            title: "Utilitarianism",
            body: "Holds that the most ethical choice is the one that will produce the greatest good for the greatest number.",
            color: "red",
        },
        meta: {
            title: "Meta Ethics",
            body: "The branch of ethics that explores the nature, meaning, and foundations of moral values, principles, and judgments.",
            color: "blue",
        },
        ethical: {
            title: "Ethical Relativism",
            body: "Argues that morality depends on cultural or personal perspective.",
            color: "green",
        },
        altruism: {
            title: "Altruism vs Egoism",
            body: "Examines self-interest versus helping others.",
            color: "purple",
        },
        cognative: {
            title: "Cognitive Biases",
            body: "Focuses on how biases influence moral decision-making.",
            color: "orange",
        },
        moral: {
            title: "Moral Agency",
            body: "Discusses who or what qualifies as a moral agent.",
            color: "yellow",
        },
        abortion: {
            title: "Abortion",
            body: "Explores ethical debates around abortion.",
            color: "pink",
        },
        guns: {
            title: "Guns in America",
            body: "Analyzes moral arguments on gun control.",
            color: "rgb(238, 135, 33)",
        },
    };


    const handleSelectChange = (e) => {
        setSelectedUnit(e.target.value);
    };

    return(
    <>
    <div className = "units">
        <select name="uns" id="unitSelector" className="selector" onChange={handleSelectChange}>
            <option value="">Select a unit</option>
            <option value="util">Utilitarianism</option>
            <option value="meta">Meta Ethics</option>
            <option value="ethical">Ethical & Cultural Relativism</option>
            <option value="altruism">Altruism/Egoism</option>
            <option value="cognative">Cogntive Biases</option>
            <option value="moral">Moral Agency/Moral Status</option>
            <option value="abortion">Abortion</option>
            <option value="guns">Guns in America</option>


        </select>

        {/* If selectedFigure has figure data, display a card using its data */}
        {selectedUnit && (
                <Card3
                    title={unitData[selectedUnit].title}
                    body={unitData[selectedUnit].body}
                    color={unitData[selectedUnit].color}
                />
            )}

    
    <Link to='/' className='homeButton'>
        <h1>Home</h1>
    </Link>
    </div>     
    </>);
}

export default Units