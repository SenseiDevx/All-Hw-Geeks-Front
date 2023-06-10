import './App.css';
import Card from "./Components/Components";
import img from './assets/img.png'

function App() {
    const handleButtonClick = () => {
        console.log('Button clicked!');
    }
    return (
        <div className="App">
            <Card
                imageUrl={img}
                title="Card 1"
                subtitle="Subtitle 1"
                buttonLabel="Button 1"
                onButtonClick={handleButtonClick}
            />

            <Card
                imageUrl={img}
                title="Card 2"
                subtitle="Subtitle 2"
                buttonLabel="Button 2"
                onButtonClick={handleButtonClick}
            />

            <Card
                imageUrl={img}
                title="Card 3"
                subtitle="Subtitle 3"
                buttonLabel="Button 3"
                onButtonClick={handleButtonClick}
            />
        </div>
    );
}

export default App;
