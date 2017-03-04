import React from 'react';
import { Router, Route, IndexRoute } from 'react-router';

import App from '_containers/App';
import NotMatch from '_containers/NotMatch';
import Home from '_containers/Home';

export default function Routes(props) {
    const { history } = props;
    return (
        <Router history={ history }>
            <Route path="/" component={ App }>
                <IndexRoute component={ Home } />
                <Route path="*" component={ NotMatch } />
            </Route>
        </Router>
    );
}
