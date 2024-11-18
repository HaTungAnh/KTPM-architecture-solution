import {models} from "../models/index.js";
import {Op} from "sequelize";

export default async () => {
    await models.ShortenLink.destroy({
        where: {
            validTime: {
                [Op.lt]: new Date()
            }
        }
    });
}