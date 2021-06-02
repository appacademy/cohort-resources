import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class FlexReview extends Component {
    constructor(props){
        super(props)
        this.state = {
            nestingLevel: 0
        }
    }

    toggleBtn(lvl){
        const { nestingLevel } = this.state
        return (
            <div
                className={`toggle-btn` + (nestingLevel === lvl ? ` selected` : `` )}
                onClick={ () => this.setState({ nestingLevel: lvl })} />
        )
    }

    handleNesting() {
        switch (this.state.nestingLevel) {
            case 0:
                return (

                    <div className="pond">
                        <div className="frog">
                            <div className="eyes" />
                            <div className="eyes" />
                        </div>
                        <div className="frog">
                            <div className="eyes" />
                            <div className="eyes" />
                        </div>
                        <div className="frog">
                            <div className="eyes" />
                            <div className="eyes" />
                        </div>
                    </div>
                            
                )
            
            case 1: 
                return (
                    
                    <div className="pond">
                        <div className="frog-row">
                            <div className="frog">
                                <div className="eyes" />
                                <div className="eyes" />
                            </div>
                            <div className="frog">
                                <div className="eyes" />
                                <div className="eyes" />
                            </div>
                            <div className="frog">
                                <div className="eyes" />
                                <div className="eyes" />
                            </div>
                        </div>
                    </div>

                )
            case 2: 
                return (

                    <div className="pond">
                        <div className="frog-row">
                            <div className="frogs-left">
                                <div className="frog">
                                    <div className="eyes" />
                                    <div className="eyes" />
                                </div>
                                <div className="frog">
                                    <div className="eyes" />
                                    <div className="eyes" />
                                </div>
                            </div>
                            <div className="frog">
                                <div className="eyes" />
                                <div className="eyes" />
                            </div>
                        </div>
                    </div>

                )
            default:
                return <div> Something went wrong! D: </div>;
        }
    }

    render() {
        return (
            <div className="flex-demo">
                <div className="details">
                    <h1>Flex Review</h1>
                    <div className="toggle">
                        <label>No additional nesting:
                            { this.toggleBtn(0) }
                        </label>
                        <label>'frog-row' contains the frogs:
                            { this.toggleBtn(1) }
                        </label>
                        <label>'frogs-left' contains 1st 2 frogs in 'frog-row':
                            { this.toggleBtn(2) }
                        </label>

                    </div>
                    <Link to="/" className="back">
                        <button>
                            Go Back
                            <FontAwesomeIcon icon="arrow-alt-circle-left" />
                        </button>
                    </Link>
                </div>
                { this.handleNesting() }
            </div>
        )
    }
}

export default FlexReview