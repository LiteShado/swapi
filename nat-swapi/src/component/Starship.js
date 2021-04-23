import axios from 'axios'
import React from 'react'


const Starship = (props) => {
    return (
        <ul>
            {props.allStarship.map((starship, i) => {
            return <li key={starship.id}>{starship.description}
            {starship.completed ?
            <span> DONE! </span>

            :

            <button onClick={() => {
                axios.put(`${env.BACKEND_URL}/todos/${starship.id}`, {
                completed: true })
                .then(() => { props.fetchTodos() })
                }}
            > Next Starship</button>
            }
            </li>
            })}
        </ul>
    )
}

export default Starship
