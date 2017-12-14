import React from 'react'
import { Provider } from 'react-redux'
{{#redux}}
import store from './store'
{{/redux}}
import Routers from './Routers'

export default function Root() {
    return (
        {{#redux}}
        <Provider store={store}>
            <Routers />
        </Provider>
        {{else}}
        <Routers />
        {{/redux}}
    )
}
