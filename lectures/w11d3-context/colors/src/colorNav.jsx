import { NavLink } from "react-router-dom"

export default function ColorNav({colorData}) {
    console.log(colorData)

    return (
        <>
            {colorData.map((colorObj, idx)=> <NavLink to={`/colors/${colorObj.name}`} >{colorObj.name}</NavLink>)}
        </>
    )
}
