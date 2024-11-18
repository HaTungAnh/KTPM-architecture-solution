import {ShortenLink} from "./shortenLinkModel.js";
import {Sequelize} from "sequelize";

const db = new Sequelize(
    {
        dialect: 'sqlite',
        storage: './db/app.db'
    });

const models = {
    ShortenLink: ShortenLink(db),
}

const dbSync = async () => {
    await db.sync();
    console.log("Database synced");
}

export {db, dbSync, models};