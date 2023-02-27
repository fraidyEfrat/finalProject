   const {sequelize,DataTypes} = require('./sequelize');

    const User_Request = sequelize.define(
        "user_request",
        {
            iduser_request: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true
            },
            subject: {
                type: DataTypes.STRING,
                allowNull: false,
            },

            request: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            response: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            date: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            status: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            iduser: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
           
        },
        {
            timestamps: false,
        }
    );
    module.exports=User_Request

