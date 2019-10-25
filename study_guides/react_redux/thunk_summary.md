* Special thanks to elliot for writing this out on the white board!

# Thunk's Purpose 
* dispatch actions that are of type functions
- Ex: we can dispatch a function that think will invoke to make an AJAX req then dispatch a normal action to update our store 


# Thunk function 
```javascript 
const thunk = ({dispatch}) => next => action => {
    if(typeOf action === "function"){
        return action(dispatch);
    }
    return next(action)
}
```

* another way to write
```javascript 
function thunk(store){
    return function(next){
        return function(action){
            if(typeof action === "function){
                return action(store.dispatch);
            }
            return next(action);
        }
    }
}
}
```

# actions file 
```javascript
export const RECEIVE_TODOS = "..."
```

## action creator 
```javascript
export receiveTodos = todos => ({
    type: RECEIVE_TODOS,
    TODOS
})
```

## thunk action creator 
```javascript
export fetchAllTodos = () => dispatch => ( //this dispatch is coming from the thunk middle ware if you look above
    ApiUtil.fetchAllTodos().then((todos) =>{
        dispatch(receiveTodos(todos))
    },(err) => {
        console.error(err.responseJSON)
    })
)
```
* another way to write this
```javascript 
function fetchAllTodos() {
    return function(dispatch){
        return (
            ApiUtil.fetchAllTodos().then((todos) =>{
                dispatch(receiveTodos(todos))
            },(err) => {
                console.error(err.responseJSON)
            })
        )
    }
}
```

# TodosIndexContainer
```javascript 
import TodosIndex from "......"

const msp = state => ({
    todos: Object.values(state.enetities.todos)
})

const mdp = dispatch =>({
    fetchTodos: () => dispatch(fetchAllTodos())
})

export default connect(msp,mdp)(TodosIndex)
```

# TodosIndex (todos.jsx)

```javascript
class TodosIndex extends React.component {
    //...
    componentDidMount(){
        this.props.fetchTodos()
    }
    //..

    render(){
        return (
            <div>
                {this.props.todos.map(todo => ...)} 
            </div>
        )
    }
}
```
![reac-redux-cycle](images/1_QERgzuzphdQz4e0fNs1CFQ.gif)


