import { Link } from 'react-router-dom';
import Card from "./card";

function Home(){
    return(<div className="cards">
        <Link to="/figures">
            <Card title="Figures" body="Learn about the individuals who altered our understanding of human relations!" />
        </Link>
        <Link to="/units">
            <Card title="Units" body="Explore the various topics covered throughout the course!" />
        </Link>
        <Link to="/theories">
            <Card title="Theories" body="Discover the theories and ideas that reshaped the world of philosophy!" />
        </Link>
        </div>);
}

export default Home

