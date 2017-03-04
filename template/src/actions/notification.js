import createActionCreators from '_createActionCreators';

export default createActionCreators('notification', {
    info: notifyWithType('info'),
    success: notifyWithType('success'),
    warning: notifyWithType('warning'),
    error: notifyWithType('error'),
    clear: null,
});

function notifyWithType(type) {
    return (message, wait) => ({
        message,
        wait,
        type,
    });
}
