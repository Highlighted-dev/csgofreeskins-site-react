import background from './../images/csgofreeskins.png'
import "./Home.css"

const Home = () => {
    return (
        <div className="container">
            <img src={background} alt="csgofreeskins" className="image"></img><br />
            <div className="card">
                <h3>CSGOROLL</h3>
            </div>
            <div className="card">
                <h3>CSGOROLL</h3>
            </div>
            <div className="card">
                <h3>CSGOROLL</h3>
            </div>
            <div className="card">
                <h3>CSGOROLL</h3>
            </div>
        </div>
    )
}

export default Home
