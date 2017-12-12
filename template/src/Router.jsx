import React from 'react'
import {
    Router,
    Route,
    Switch,
} from 'react-router-dom'
import history from './history'
import App from './App'
import NotMatch from './NotMatch'

export default function Routers() {
    return (
        <Router history={history}>
            <Switch>
                <Route path="/" exact component={App} />
                <Route path="/todos/:id" component={App} />
                <Route path="*" component={ NotMatch } />
            </Switch>
        </Router>
    )
}
