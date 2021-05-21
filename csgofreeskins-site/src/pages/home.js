import "./Home.css"
import Card from './../components/Card'

const Home = () => {
    return (
        <div className="container">
            <img src="/images/csgofreeskins.png" alt="csgofreeskins" className="image"></img><br />
            <Card title="keydrop"
                text='Probably the best case-opening site right know. It has about 50 different cases and a daily free chest system, where you can get up to 200 USD. They also have free giveway system.'
                link="https://key-drop.com/en/R/csgofreeskins2"
            />
            <Card title="csgoroll"
                text='Probably the best case-opening site right know. It has about 50 different cases and a daily free chest system, where you can get up to 200 USD. They also have free giveway system.'
                link="https://csgoroll.com/r/CSGOFREESKINS2" />
            <Card title="csgoempire"
                text='Probably the best case-opening site right know. It has about 50 different cases and a daily free chest system, where you can get up to 200 USD. They also have free giveway system.'
                link="https://csgoempire.com/r/csgofreeskins2" />
            <Card title="hellcase"
                text='Probably the best case-opening site right know. It has about 50 different cases and a daily free chest system, where you can get up to 200 USD. They also have free giveway system.'
                link="https://hellcase.com/fcsgofreeskins2"/>
        </div>
    )
}

export default Home
