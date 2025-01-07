import './App.css'

function Card({title, body}){
    return(<>
    <div className="body">
    <h1>{title}</h1>
    <p>{body}</p>
    </div>
            </>);
}

export default Card