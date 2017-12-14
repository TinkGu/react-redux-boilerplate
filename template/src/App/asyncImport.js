import React, { Component } from 'react'
import store from './store'

function asyncImportDuck(ducks) {
    return Promise.all(ducks.filter(x => typeof x === 'function').map(duck => {
        return duck().then(x => x.default).then(x => {
            store.injectAsyncDuck(x)
        })
    }))
}

export default function asyncImport(importComponent, ducks = []) {
    class AsyncComponent extends Component {
        constructor(props) {
            super(props)

            this.state = {
                component: null
            }
        }

        async componentDidMount() {
            asyncImportDuck(ducks).then(async () => {
                const { default: component } = await importComponent()
                this.setState({
                    component
                })
            })
        }

        render() {
            const C = this.state.component
            return C ? <C {...this.props} /> : null
        }
    }

    return AsyncComponent
}
