import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class NavPage extends Component {

    render() {
        return (
            <nav className="lecture-nav">
                <h1>Let's Talk CSS and SCSS!</h1>
                <ul>
                    <li>
                        <Link to="/flex-review">Flexbox Review</Link>
                    </li>
                    <li>
                        <Link to="/complete-page">Example End Result</Link>
                    </li>
                    <li>
                        <Link to="/pos-flex-grid">Style the Webpage</Link>
                    </li>
                    <li>
                        <Link to="/resources">External Resources</Link>
                    </li>
                </ul>
            </nav>
        )
    }
}

export default NavPage