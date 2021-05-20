import background from './../images/csgofreeskins.png'
import "./Home.css"
import Card from './../components/Card'

const Home = () => {
    return (
        <div className="container">
            <img src={background} alt="csgofreeskins" className="image"></img><br />
            <Card />
            <Card />
            <Card />
            <Card />
        </div>
    )
}

export default Home
