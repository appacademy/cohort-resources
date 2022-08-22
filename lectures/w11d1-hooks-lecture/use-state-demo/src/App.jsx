import {Route, Switch} from "react-router-dom";
import NumberDisplay from "./numberDisplay";
import StudentIndex from "./studentIndex";
import Form from "./form"
import StudentShow from "./studentShow";
function App(props) {
    

    return (
        <>
        <NumberDisplay/>
        <Form/>
        <StudentIndex/> 

        <Switch>
            <Route path="/students/:studentName">
                <StudentShow/>
            </Route>
        </Switch>
            
        </>
    )
}

export default App;