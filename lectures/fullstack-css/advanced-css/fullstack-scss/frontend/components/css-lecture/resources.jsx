import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'

const Resources = () => (
    <div className="resources">
        <div>
            <Link to="/">
                <button>
                    Go back
                    <FontAwesomeIcon icon="arrow-alt-circle-left" />
                </button>
            </Link>
            <h2>CSS</h2>
            <ul>
                <li>
                    <a href="https://www.w3schools.com/css/" >W3Schools</a>
                </li>
                <li>
                    <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/Reference" >MDN Docs</a>
                </li>
                <li>
                    <a href="https://css-tricks.com/" >CSS-Tricks</a>
                </li>
            </ul>
            <h2>Flex</h2>
            <ul>
                <li>
                    <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox" >MDN Guide</a>
                </li>
                <li>
                    <a href="https://css-tricks.com/snippets/css/a-guide-to-flexbox/" >CSS-Tricks Complete Guide to Flexbox</a>
                </li>
                <li>
                    <a href="https://flexboxfroggy.com/" >Flexbox Froggy</a>
                </li>
            </ul>
            <h2>Grid</h2>
            <ul>
                <li>
                    <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout/Basic_Concepts_of_Grid_Layout" >MDN Guide</a>
                </li>
                <li>
                    <a href="https://css-tricks.com/snippets/css/complete-guide-grid/" >CSS-Tricks Complete Guide to Grid</a>
                </li>
                <li>
                    <a href="https://cssgridgarden.com/" >Grid Garden</a>
                </li>
            </ul>
            <h2>SCSS</h2>
            <ul>
                <li>
                    <a href="https://sass-lang.com/guide" >SASS Language Guide</a>
                </li>
                <li>
                    <a href="https://www.w3schools.com/sass/" >W3Schools Tutorial</a>
                </li>
                <li>
                    <a href="https://www.youtube.com/results?search_query=scss" >YouTube Video Tutorials</a>
                </li>
            </ul>
            <h2><a href="#">Google</a></h2>
        </div>
    </div>
)

export default Resources