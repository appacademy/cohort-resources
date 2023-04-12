import { useParams } from "react-router-dom"
import Form from "./form";

export default function ColorShow(props) {
    const {colorName} = useParams();
    console.log(colorName)
    const correctColor = props.colorData.find(color => color.name === colorName)
    console.log(correctColor)
    return (
        <>
        <h1>{correctColor.name}</h1>
        <h3>category: {correctColor.category}</h3>
            <div style={{backgroundColor: correctColor.name, height:200, width:200, border:"1px solid black"}}></div>
            <Form/>
        </>
    )
}
