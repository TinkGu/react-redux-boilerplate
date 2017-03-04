import createActionCreators from '_createActionCreators';

export default createActionCreators('books', {
    load: (books=[]) => books,
    selectOne: (targetId) => ({
        targetId,
    }),
});
