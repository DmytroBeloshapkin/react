import './App.css';
import Simpsons from "./components/simpson/Simpsons";
import Morty from "./components/RicKandMorty/RicKandMorty";





function App() {

    return (
        <div className="App">
            <h2>Simpson family</h2>
            <Simpsons/>
            <h2>The Rick and Morty</h2>
            <Morty/>
        </div>
    );
}
export default App;






// id, name, status, species, gender, image
// https://rickandmortyapi.com/
// https://rickandmortyapi.com/api/character