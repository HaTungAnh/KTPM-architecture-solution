import {models} from "../models/index.js";
import {generateShortenId} from "../utils/utils.js";
import errorMessage from "../utils/errorMessage.js";

const getDataFromObject = (object) => {
    return {
        short: object.short,
        original: object.original,
        createdTime: object.createdTime,
        validTime: object.validTime,
    }
}

const getOriginal = async (req, res) => {
    try {
        const id = req.params.id;
        const object = await models.ShortenLink.findOne({
            where: {
                short: id
            }
        });

        if (object == null) {
            res.status(404).json(errorMessage('URL not found', 404));
        }
        else {
            const jsonString = JSON.stringify(getDataFromObject(object));
            res.json(jsonString);
        }
    } catch (err) {
        res.status(500).json(errorMessage('Internal Server Error:\n' + err, 500));
    }
}

const redirect = async (req, res) => {
    try {
        const id = req.params.id;
        const object = await models.ShortenLink.findOne({
            where: {
                short: id
            }
        });

        if (object == null) {
            res.status(404).json(errorMessage('URL not found', 404));
        }
        else {
            const original = object.original;
            res.redirect(original);
        }
    } catch (err) {
        res.status(500).json(errorMessage('Internal Server Error:\n' + err, 500));
    }
}

const create = async (req, res) => {
    try {
        const url = req.query.url;
        const newID = generateShortenId(url);
        const validTime = req.requestTime + 30 * 24 * 60 * 60 * 1000; // 1 month

        const object = await models.ShortenLink.create({
            short: newID,
            original: url,
            createdTime: req.requestTime,
            validTime: validTime
        });

        const jsonString = JSON.stringify(getDataFromObject(object));
        res.json(jsonString);
    } catch (err) {
        res.json(err);
    }
}


export { create, getOriginal, redirect };