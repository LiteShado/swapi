
import { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'
import './App.css'
import env from "react-dotenv";
import BrowserRouter from 'react-router-dom'
import StarshipPage from './component/StarshipPage'
import Starship from './component/Starship';
import { Route } from 'react-dom'


function App() {
const [ships, setShips] = useState([])


const ships = axios.get('https://www.swapi.tech/api/starships').then((response) => {
    setShips(response.data.results)
  })

  .catch((error) => {
    console.log(error)
  })

  useEffect(fetchShips, [])

  return (
    <div>
      <Route
        path="/"
        exact
        render={() => {
        return <Starship ships={ships}/>
        }}
        />
      <Route
        path="/ships/:id"
        render={(routing) => {
          console.log(routing);
            return <StarshipPage id={routing.match.params.id} />

        }}
      />
      <StarshipPage />
    </div>
  )
}




export default App
