import { useSelector } from "react-redux";

function TeasList(){
    const teas = useSelector(state => Object.values(state.teas))
    
    return(
        <>
            <h1>Hello from tea index</h1>
            <ul>
                {teas.map(tea => {
                    return (<li key={tea.id} >{tea.flavor}</li>)
                }
                )}
            </ul>
        </>
    )
}

export default TeasList;