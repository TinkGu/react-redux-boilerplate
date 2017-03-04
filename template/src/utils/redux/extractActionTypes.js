export default function extractActionTypes(creatorMap = {}) {
    return Object.keys(creatorMap).reduce((typeMap, actionType) => ({
        ...typeMap,
        [actionType]: `${creatorMap[actionType].namespace}/${actionType}`,
    }), {});
}
