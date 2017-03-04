import React from 'react';
import { render } from 'react-dom';
import { browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';

import Root from '_containers/Root';
import configureStore from '_store';

const store = configureStore();
const history = syncHistoryWithStore(browserHistory, store);
const rootEl = document.getElementById('app');

render(<Root store={ store } history={ history } />, rootEl);

// hot-replacement
if (module.hot) {
    module.hot.accept('_containers/Root', () => {
        const HotRoot = require('_containers/Root').default;
        render(<Root store={ store } history={ history } />, rootEl);
    });
}
