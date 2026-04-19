'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class Order extends Model {
        static associate(models) {
            Order.belongsTo(models.User, {
                foreignKey: 'userId',
                as: 'user'
            });
        }
    }

    Order.init(
        {
            productName: {
                type: DataTypes.STRING,
                allowNull: false
            },
            quantity: {
                type: DataTypes.INTEGER,
                allowNull: false
            },
            totalPrice: {
                type: DataTypes.FLOAT,
                allowNull: false
            },
            userId: {
                type: DataTypes.INTEGER,
                allowNull: false
            }
        },
        {
            sequelize,
            modelName: 'Order'
        }
    );

    return Order;
};