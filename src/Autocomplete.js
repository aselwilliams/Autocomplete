import {useState} from 'react'

function Autocomplete() {
    const [filteredSuggestions,setFilteredSuggestions]= useState([]);
    const [activeSuggestionIndex,setActiveSuggestionIndex]= useState(0);
    const [showSuggestions, setShowSuggestions] = useState(false);
    const [input,setInput] =useState('')
  return (
    <div>Autocomplete</div>
  )
}

export default Autocomplete