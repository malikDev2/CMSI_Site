import './App.css';

function Card3({title, body, color}){
    return(<>
    <div className="body" style={{ '--card-bg-color': color }}>
    <h1>{title}</h1>
    <p>{body}</p>
    </div>
            </>);
}

export default Card3