import extract from './extractActionTypes';

export default function combineActionTypes(actionCreatorsMap = {}) {
    return Object.keys(actionCreatorsMap).reduce((typesMap, creator) => ({
        ...typesMap,
        [creator]: extract(actionCreatorsMap[creator]),
    }), {});
}
