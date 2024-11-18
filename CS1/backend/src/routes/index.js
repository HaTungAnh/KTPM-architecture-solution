import {Router} from "express";
import * as shorten from "./shorten.js";
import urlValidator from "../middleware/urlValidator.js";

const apiRouter = new Router();

apiRouter.get('/short/:id', shorten.getOriginal);
apiRouter.post('/create', urlValidator, shorten.create);

const publicRouter = new Router();

publicRouter.get('/:id', shorten.redirect);

export {apiRouter, publicRouter};
