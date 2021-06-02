import React from 'react'
import { Route, Switch } from 'react-router'
import CompletePage from './complete_page'
import ExamplePage from './ex_page'
import FlexReview from './flex_review'
import NavPage from './nav_page'
import Resources from './resources'

const CSSLecture = () => {

    return (
        <>
            <Switch>
                <Route path="/flex-review" component={ FlexReview } />
                <Route path="/complete-page" component={ CompletePage } />
                <Route path="/pos-flex-grid" render={ () => <ExamplePage comp="" /> } />
                <Route path="/resources" component={ Resources } />
                <Route path="/" component={ NavPage } />
            </Switch>
        </>
    )
}

export default CSSLecture