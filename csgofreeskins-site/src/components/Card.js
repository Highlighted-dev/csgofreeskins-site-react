import './Card.css'

const Card = ({ title, text, link }) => {
    
    return (
        <div className="card">
            <img src={`/images/${title}.png`} alt={title} width="100%"></img>
            <div className="text">
                <h4>{text}</h4>
            </div>
            <div className="affilate">
                <h4><a href={link}>[Go to {title}]</a></h4>
            </div>
        </div>
    )
}


export default Card
