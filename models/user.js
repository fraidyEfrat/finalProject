const {sequelize,DataTypes} = require('./sequelize');
const User = sequelize.define(
        "user",
        {
            iduser: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true
            },

            firstName: {
                type: DataTypes.STRING,
                allowNull:false,
            },
            lastName: {
                type: DataTypes.STRING,
                allowNull:false,
            },
            email: {
                type: DataTypes.STRING,
                allowNull:false,
               // unique:true,

            },
            city: {
                type: DataTypes.STRING,
                allowNull:true,
            },
            dateOfBirth: {
                type: DataTypes.DATE,
                allowNull:true,
            },
            address: {
                type: DataTypes.STRING,
                allowNull:true,
            },
            id: {
                type: DataTypes.STRING,
                allowNull:true,
               // unique:true,

            },
            phone: {
                type: DataTypes.STRING,
                allowNull:true,
            },
            watsup: {
                type: DataTypes.STRING,
                allowNull:true,
            },
            
           
        },
        {
            timestamps: false,
        }
    );

    module.exports=User

