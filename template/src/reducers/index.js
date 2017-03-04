import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
{{#needExample}}

import books from './books';
{{/needExample}}

export default combineReducers({
    {{#needExample}}
    books,
    {{/needExample}}
    routing,
});
