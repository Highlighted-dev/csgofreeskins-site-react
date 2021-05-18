import background from './../images/csgofreeskins.png'
import "./Home.css"

const Home = () => {
    return (
        <div className="container">
            <img src={background} alt="csgofreeskins" className="image"></img><br />
            <h1>Hello there!</h1>
        </div>
    )
}

export default Home
