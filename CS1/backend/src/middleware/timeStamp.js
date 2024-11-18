// write a middleware that adds a timestamp to the request object

const timeStamp = (req, res, next) => {
    req.requestTime = new Date().toString();
    next();
}

export default timeStamp;