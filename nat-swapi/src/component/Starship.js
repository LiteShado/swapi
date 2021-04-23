import { Link } from 'react-router-dom'


const Starship = (props) => {
    return (
    {props.ships.length > 0 ?
        <div>
            {props.ships.map(ship) => {


:

}


                return (
                    <li key={ship.uid}>
                        <Link to={`/ships/${ship.uid}`}>
                        {ship.name}
                        </Link>
                    </li>
                )
            }}}

        </div>
    )
}

export default Starship
