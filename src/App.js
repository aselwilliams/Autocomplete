import Autocomplete from './Autocomplete';
import './App.css';
import countries from './countries'

function App() {
  return (
    <div className="wrapper">
      <h2>Search:</h2>
      <Autocomplete suggestions={countries} />
    </div>
  );
}

export default App;
