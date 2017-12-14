import { duck } from 'redurex'
import { put } from 'redux-saga/effects'

export default duck({
    namespace: 'counter',
    state: {
        count: 0,
    },
    reducers: {
        add: (state) => ({
            ...state,
            count: state.count + 1,
        }),
        minus: (state) => ({
            ...state,
            count: state.count <= 0 ? state.count : state.count - 1,
        }),
        clear: (state) => ({
            ...state,
            count: 0,
        })
    },
    sagas: {
        * clearLater(payload, _actions) {
            yield put(_actions.clear())
        }
    }
})
