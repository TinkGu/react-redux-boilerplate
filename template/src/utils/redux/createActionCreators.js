export default function createActionCreators(namespace = '', actionsMap = {}) {
    return Object.keys(actionsMap).reduce((creatorsMap, actionType) => ({
        ...creatorsMap,
        [actionType]: createActionCreator(namespace, actionType, actionsMap[actionType]),
    }), {});
}

function createActionCreator(namespace, type, payloadFunc) {
    const creator = (...args) => {
        const action = {
            type: `${namespace}/${type}`,
        };

        if (args[0] instanceof Error) {
            action.payload = args[0];
            action.error = true;
        } else {
            const payload = typeof payloadFunc === 'function'
                ? payloadFunc(...args)
                : undefined;
            if (payload !== null && payload !== undefined) {
                action.payload = payload;
            }
        }

        return action;
    }

    creator.namespace = namespace;
    return creator;
}
