
import { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'
import './App.css'
import env from "react-dotenv";
import StarshipPage from './component/StarshipPage'
import Starship from './component/Starship';


function App() {
  const [allStarship, setAllStarship] = useState([])
  const [starship, setStarship] = useState('')
  const [filteredStar, setFilteredStar] = useState([])

  const getStar = () => {
    axios.get(`${env.BACKEND_URL}/starships`)
    .then((response) => {
      setAllStarship(response.data.starship)
    })
  }

  useEffect(getStar, [])

  const filterStar = () => {
    const result = allStarship.filter((t) => {
      return t.description.includes(starship)
    })
    setFilteredStar(result)
  }
  useEffect(filterStar, [starship, allStarship])
  // useEffect(filterTodos, [allTodos])

    return (

      <div class="container">
        <StarshipPage starship={starship}
        setStarShip={setStarship}/>
        <Starship allStarship={filteredStar}
        getStar={getStar}/>
      </div>

    );
}


export default App
