import { useEffect, useState } from "react";
import ChuckNorris from './app/assets/Chuck_Norris.png'
import "./app/sass/styles.css";
import Trivia from './app/components/Trivia';
import Searchbar from "./app/components/Searchbar";

function App() {

  const [trivia, setTrivia] = useState(undefined)
  const [loadingFact, setLoadingFact] = useState('idle')

    
  const fetchChuckFact = () => {
    fetch('https://api.chucknorris.io/jokes/random')
    .then(res => res.json())
    .then(data => {
      setTrivia(data.value)
      setLoadingFact('succeeded')
    })
    .catch(err=> {
      console.log(err)
    })
  }

  useEffect(() => {
      setLoadingFact('pending')
      fetchChuckFact()
    return () => {}
  }, [])

  const handleSubmit = (e, query, resetFn) => {
    e.preventDefault()
    setLoadingFact('pending')
    fetch(`https://api.chucknorris.io/jokes/search?query=${query}`)
    .then(res=>res.json())
    .then(data => {
      if(data.total){
        const randomIdx = data.total > 1 ? Math.floor(Math.random()*data.total)+1 : 0
        setTrivia(data.result[randomIdx].value)
        setLoadingFact('succeeded')
      }else{
        setTrivia('uh-oh. Chuck Norris senses something was wrong.')
        setLoadingFact('rejected')
      }
        resetFn('')
    })
  }
  
  return (
    <div className="App">
      <header>
        <img id='header-img' src={ChuckNorris} alt='Chuck Norris Random Facts'/>
        <h1 className='main-header'>Chuck Norris</h1>
        <h2 className='secondary-header'>Random Facts</h2>
      </header>
      <div className='main-body'>
          <Trivia triviaFact={trivia} loadingFact={loadingFact}/>
        <Searchbar handleSubmit={handleSubmit} loadingFact={loadingFact} fetchChuckFact={fetchChuckFact}/>
      </div>
      <footer>built with <a href='https://api.chucknorris.io' target='blank'>https://api.chucknorris.io</a></footer>
    </div>
  );
}

export default App;
