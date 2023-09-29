module.exports = (sequelize, DataTypes) => {
    const Product = sequelize.define('Product', {
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        description: {
            type: DataTypes.TEXT,
            allowNull: true
        },
        date: {
            type: DataTypes.DATE,
            allowNull: true
        },
        price: {
            type: DataTypes.DECIMAL(10,2),
            allowNull: false
        },
        image_url: {
            type: DataTypes.STRING(512),
            allowNull: true
        }
    });

    return Product;
};
