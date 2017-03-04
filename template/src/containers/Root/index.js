import React, { PropTypes } from 'react';
import { Provider } from 'react-redux';

import Routes from '_routes';

export default function Root(props) {
    const { store, history } = props;
    return (
        <Provider store={ store }>
            <Routes history={ history } />
        </Provider>
    );
}
