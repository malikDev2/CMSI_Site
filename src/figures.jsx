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
        aristotle: { title: "Aristotle", 
            body: "Ancient Greek philosopher, dubbed the father of classical ethics.", 
            image: images.aristotle,
            color: "rgb(165, 56, 243)"},
        kant: { 
            title: "Kant", 
            body: "A German philosopher known for deontological ethics, which asserts that moral actions are based on universal duties and principles, epitomized by his categorical imperative: 'Act as if your actions could become universal law.'", 
            image: images.kant,
            color: "rgb(25, 169, 39)"},
        rawls: { title: "John Rawls", 
            body: "A 20th-century American philosopher who proposed a theory of justice based on fairness, advocating for principles of equality and liberty determined from the 'original position' behind a 'veil of ignorance.'", 
            image: images.rawls,
            color: "rgb(237, 38, 38)"},
        nietzsche: {title: "Friedrich Nietzsche", 
            body: "A 19th-century German philosopher who critiqued traditional moral values, championing the idea of 'master morality' over 'slave morality' and emphasizing the creation of one's own values through the will to power.", 
            image: images.nietzsche,
            color: "rgb(20, 131, 8)"},
        plato: {title: "Plato", 
            body: "A foundational Greek philosopher who explored ethics through the concept of justice in his dialogues, emphasizing the alignment of the soul's three parts—reason, spirit, and appetite—for a harmonious and virtuous life.", 
            image: images.plato,
            color: "rgb(38, 34, 238)"},
        socrates: {title: "Socrates", 
            body: "Plato’s mentor and the father of Western philosophy, who developed a method of ethical inquiry through dialogue, urging people to seek self-knowledge and define virtue as the key to living a morally good life.", 
            image: images.socrates,
            color: "rgb(234, 178, 37)"},
        hume: {title: "David Hume", 
            body: "An 18th-century Scottish philosopher who argued that morality is rooted in human emotions and that reason serves as a guide for our passions, emphasizing the role of sympathy in ethical judgments.", 
            image: images.hume,
            color: "rgb(238, 33, 112)"},

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
                <option value="hume">Hume</option>
                <option value="kant">Kant</option>
                <option value="nietzsche">Nietzsche</option>
                <option value="plato">Plato</option>
                <option value="rawls">Rawls</option>
                <option value="socrates">Socrates</option>
            </select>

            {/* If selectedFigure has figure data, display a card using its data */}
            {selectedFigure && (
                <Card2
                    title={figureData[selectedFigure].title}
                    body={figureData[selectedFigure].body}
                    image={figureData[selectedFigure].image}
                    color={figureData[selectedFigure].color}
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
