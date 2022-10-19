import {useSelector} from "react-redux"

const TeaIndex = () => {
    const teas = useSelector((state) => Object.values(state.teas))

    return(
        <>
            <h1>Here are the BEST TEAS!</h1>
            {teas.map((tea) => (
                <ul key={tea.id}>
                    <li>Flavor: {tea.flavor}</li>
                    <li>Price: {tea.price}</li>
                </ul>
            ))}
        </>
    )
}

export default TeaIndex;