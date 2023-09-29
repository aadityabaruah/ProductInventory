module.exports = (sequelize, DataTypes) => {
    const Review = sequelize.define('Review', {
        productId: {
            type: DataTypes.INTEGER,
            references: {
                model: 'Products',  // 'Products' is the table name after Sequelize has applied plurals.
                key: 'id'
            },
            allowNull: false
        },
        rating: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        comment: {
            type: DataTypes.TEXT,
            allowNull: true
        }
    });

    return Review;
};
