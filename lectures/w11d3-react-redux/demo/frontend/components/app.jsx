import React from 'react';
import TeaIndexContainer from './tea_index_container'

const App = () => {
    // debugger
    return (
        <div>
            <TeaIndexContainer /> 
            {/* connect(mapStateToProps, mapDispatchToProps)(TeaIndex) */}
        </div>
    )
}

export default App;