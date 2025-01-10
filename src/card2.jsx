import './App.css'

function Card2({title, body, image, color}){
    return(<>
    <div className="body"  style={{ '--card-bg-color': color }}>
    <h1>{title}</h1>
    <img src={image} alt="image" style={{ width: "100px", height: "100px" }} />
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