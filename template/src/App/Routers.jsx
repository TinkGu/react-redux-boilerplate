import React from 'react'
import {
    Router,
    Route,
    Switch,
} from 'react-router-dom'
import history from './history'
{{#redux}}
import asyncImport from './asyncImport'
{{/redux}}
import Home from '../Home'
import NotMatch from '../NotMatch'

{{#redux}}
const AsyncCounter = asyncImport(
    () => import('../Counter'),
    [() => import('../Counter/duck')]
)
{{/redux}}

export default function Routers() {
    return (
        <Router history={history}>
            <Switch>
                <Route path="/" exact component={Home} />
                {{#redux}}
                <Route path="/counter" component={AsyncCounter} />
                {{/redux}}
                <Route component={NotMatch} />
            </Switch>
        </Router>
    )
}
