import {useState} from 'react';
import SuggestionsList from './SuggestionsList'


function Autocomplete({suggestions}) {
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

    const onKeyDown=(key)=>{
        console.log('keydown', key.keyCode);//13 is Enter, 9 is Tab
        if(key.keyCode===13 || key.keyCode===9){
            setInput(filteredSuggestions[activeSuggestionIndex]);
            setFilteredSuggestions([]);
        }
    }
    const onClick=(e)=>{
        setFilteredSuggestions([]);
        setInput(e.target.innerText);
        setActiveSuggestionIndex(0);
        setShowSuggestions(false);
    }

  return (
   <>
   <input type='text' onChange={onChange} onKewDown={onKeyDown} value={input} />
   {showSuggestions && input && <SuggestionsList filteredSuggestions={filteredSuggestions} onClick={onClick} activeSuggestionIndex={activeSuggestionIndex}/>}
   </>
  )
}

export default Autocomplete