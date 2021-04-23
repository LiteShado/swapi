import { Link } from 'react-router-dom'
import { useEffect, useState} from 'react'
import axios from 'axios'


const StarshipPage = (props) => {
    const [ship, setShip] = useState({})

    const fetchShip = () => {
        axios.get(`https://www.swapi.tech/api/starships/${props.id}`)
        .then((response) => {
            setShip(response.data.result)
        })
    }
    useEffect(fetchShip, [props])



    return (
        <div>
            {ship.properties} === undefined ?
            <p>Loading...</p>
            :
            <div>
            {ship.properties.name}
            {ship.properties.model}
            {ship.properties.manufacturer}

            <Link className="testing" to="/">Back to All Ships</Link>
            </div>

        </div>


    )
}

export default StarshipPage
