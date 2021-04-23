
const StarshipPage = (props) => {
    return (
        <input value={props.Starship}
        onChange={(e) => { props.setStarship(e.target.value) }}
        />
    )
}

export default StarshipPage
