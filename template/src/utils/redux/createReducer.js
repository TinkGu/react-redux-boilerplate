export default function createReducer(funcMap, initialState) {
    return (state = initialState, action = {}) => funcMap.hasOwnProperty(action.type)
        ? funcMap[action.type](state, action)
        : state;
}
