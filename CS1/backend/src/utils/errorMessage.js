const errorMessage = (message, status) => {
    return JSON.stringify({
        message: message,
        status: status
    });
}

export default errorMessage;