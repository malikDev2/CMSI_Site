import './App.css'

function Card2({title, body, image}){
    return(<>
    <div className="body">
    <h1>{title}</h1>
    <img src={image} alt="image" />
    <p>{body}</p>
    </div>
            </>);
}

export default Card2

/*
Friedrich Nietzsche
David Hume
Socrates
Plato


*/