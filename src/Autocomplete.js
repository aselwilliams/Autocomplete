import {useState} from 'react'

function Autocomplete() {
    const [filteredSuggestions,setFilteredSuggestions]= useState([]);
    const [activeSuggestionIndex,setActiveSuggestionIndex]= useState(0);
    const [showSuggestions, setShowSuggestions] = useState(false);
    const [input,setInput] =useState('');

    const onChange=(e)=>{
        const userInput=e.target.value;
        //filter suggestions that don't contain the user's input
        const unLinked=suggestions.filter((suggestion)=>suggestion.toLowerCase().indexOf(userInput.toLowerCase())>-1)
      setInput(e.target.value);
      setFilteredSuggestions(unLinked);
      setActiveSuggestionIndex(0);
      setShowSuggestions(true);
    };
    
  return (
   <>
   <Input type='text' onChange={onChange} onKewDown={onKeyDown} value={input} />
   {showSuggestions && input && <SuggestionsListComponent />}
   </>
  )
}

export default Autocomplete