import './Card.css'

const Card = ({ title, text, link, code }) => {
    
    return (
        <div className="card">
            <a href={link}><img src={`/images/${title}.png`} alt={title} className="images"></img></a>
            <div className="text">
                <h4>{text}</h4>
            </div>
            <div className="affilate">
                <h4><a href={link}>CODE: {code}</a></h4>
            </div>
        </div>
    )
}


export default Card
