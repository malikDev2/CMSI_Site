import { Link } from 'react-router-dom';
import { useState } from 'react';
import './App.css';
import Card2 from './card2.jsx';
import images from './images.jsx';


function Theories(){
    // useState to change selected theory
    const [ selectedTheory, setSelectedTheory] = useState('');
    const theoryData = {
        Util: {
            title: "Utilitarianism",
            body: "A consequentialist ethical theory that evaluates actions based on their outcomes. The goal is to maximize overall happiness or utility while minimizing suffering. An action is morally right if it results in the greatest good for the greatest number of people.",
            image: images.util,
            color: "rgb(84, 226, 255)"},
        Raw: {
            title: "Rawls Theory of Justice",
            body: "Proposed by philosopher John Rawls, this theory emphasizes fairness and equality in social arrangements. It is based on two principles: first, that all individuals are entitled to equal basic rights, and second, that social and economic inequalities are acceptable only if they benefit the least advantaged (the difference principle) and are tied to positions accessible to everyone under conditions of fair equality of opportunity.",
            image: images.raw,
            color: "rgb(255, 234, 41)"},
        Norm: {
            title: "Normative Theories",
            body: "Theories that provide frameworks for determining what actions are morally right or wrong. Examples include deontology (duty-based ethics), consequentialism (outcome-based ethics), and virtue ethics (character-based ethics).",
            image: images.norm,
            color: "rgb(165, 56, 243)"},
        SCT: {
            title: "Social Contract Theory",
            body: "Suggests that the legitimacy of a government or social system derives from an implicit contract among individuals to form a society. Individuals consent to certain rules and authority to secure mutual benefits, such as protection and order, often associated with philosophers like Thomas Hobbes, John Locke, and Jean-Jacques Rousseau.",
            image: images.soc,
            color: "rgb(247, 44, 44)"
        }
        
    



        
    }

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

    {/* If selectedTheory has theory data, display a card using its data */}
        {selectedTheory && (
            <Card2
                title={theoryData[selectedTheory].title}
                body={theoryData[selectedTheory].body}
                image={theoryData[selectedTheory].image}
                color={theoryData[selectedTheory].color}
            />
        )}
    <Link to='/' className='homeButton'>
        <h1>Home</h1>
    </Link>
    </div>
        </>);
}

export default Theories