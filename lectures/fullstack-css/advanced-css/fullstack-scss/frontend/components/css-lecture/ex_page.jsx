import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class ExamplePage extends Component {
    constructor(props){
        super(props)
        this.state = {
            comp: props.comp,
            open: false
        }
        this.handleDropdownClick = this.handleDropdownClick.bind(this)
    }

    handleDropdownClick(newVal){
        return e => this.setState({ open: newVal })
    }

    render(){
        const { comp, open } = this.state

        return (
            <div className={ "css-lecture" + comp }>
                <header>
                    <nav className="left">
                        <img src={ window.logoUrl } alt="logo" className="logo" />
                        <button className="dropdown"
                            onFocus={ this.handleDropdownClick(true) }
                            onBlur={ this.handleDropdownClick(false) }
                            >
                            Click Me! <FontAwesomeIcon icon="flask" />
                            { open ? (
                                <div className="content">
                                    <h3>Example dropdown</h3>
                                    <ul>
                                        <li>Lots</li>
                                        <li>Of</li>
                                        <li>Different</li>
                                        <li>Dropdown</li>
                                        <li>Options</li>
                                    </ul>
                                </div>
                            ) : null }
                        </button>
                    </nav>
                    <nav className="right">
                        <FontAwesomeIcon icon={["fab","github-square"]} />
                    </nav>
                </header>
                {/* <div className="page-content"> */}
                    <aside className="left-bar">
                        <button className="hover">
                            You can hover me!
                            <FontAwesomeIcon icon="mouse-pointer" />
                            <div className="tooltip">
                                I'm the hover tooltip!
                            </div>
                        </button>
                    </aside>
                    <section>
                        <h1>Example page</h1>
                        <p>
                            This is an example page with lots of navigation options for the end user. We have a header and sidebars on both sides that come with us wherever we go! Only the content in the main portion of the page (here) scrolls. This sounds like a job for `position: fixed`..........right?
                        </p>
                        <p>
                            There are pitfalls to an over-reliance on position that may require refactoring a good deal of css if you encounter them! D:
                        </p>
                        <p>Luckily, we can bring in Flex or Grid instead! Do this right at the start to avoid having to refactor your entire layout should you run into these issues (like I did).</p>
                    </section>
                    <aside className="right-bar">
                        <Link to="/">
                            <button>
                                Go back
                                <FontAwesomeIcon icon="arrow-alt-circle-left" />
                            </button>
                        </Link>
                    </aside>
                {/* </div> */}
            </div>
        )
    }
}

export default ExamplePage