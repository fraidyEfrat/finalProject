const {sequelize,DataTypes} = require('./sequelize');
    const Login = sequelize.define(
        "login",
        {
            idlogin: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true
            },
            iduser: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },

            password: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            role: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            email: {
                type: DataTypes.STRING,
                allowNull: false,           
            },
           
        },
        {
            timestamps: false,
        }
    );

    module.exports=Login
