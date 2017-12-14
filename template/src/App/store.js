import { createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { decompose } from 'redurex'
import ducks from './ducks'

const sagaMiddleware = createSagaMiddleware()
let mds = [applyMiddleware(sagaMiddleware)]

// devtool
if (__ENV__ === 'development') {
    if (window && window.devToolsExtension) {
        mds = mds.concat(window.devToolsExtension())
    }
}

const { rootReducer, rootWatcher, injectAsyncDuck } = decompose(ducks)
const store = createStore(rootReducer, compose(...mds))
sagaMiddleware.run(rootWatcher)
store.injectAsyncDuck = injectAsyncDuck(store)
export default store
