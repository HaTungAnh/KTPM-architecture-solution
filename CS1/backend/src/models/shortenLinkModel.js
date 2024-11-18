import {DataTypes, Sequelize} from 'sequelize';

const ShortenLink = (sequelize) => {
    return sequelize.define('ShortenLink', {
        original: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                isUrl: true,
            },
        },
        short: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        createdTime: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        validTime: {
            type: DataTypes.DATE,
            allowNull: false,
        },
    })
};

export {ShortenLink};

