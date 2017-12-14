import { duck } from 'redurex'

const user = duck({
    namespace: 'user',
    state: {
        name: 'Please Login',
    },
    reducers: {
        login: (state, payload) => ({
            ...state,
            name: payload.name,
        })
    },
})

export default [user]
