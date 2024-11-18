import {isWebUri} from 'valid-url';
import errorMessage from "../utils/errorMessage.js";

const urlValidator = (req, res, next) => {
    const url = req.query.url;
    if (url === undefined) {
        res.status(400).send(errorMessage('URL is required', 400));
    } else {
        if (isWebUri(url)) {
            next();
        }
        else {
            res.status(400).send(errorMessage('URL is invalid', 400));
        }
    }
}

export default urlValidator;