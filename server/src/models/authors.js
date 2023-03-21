module.exports = (sequelize, Sequelize) => {
    const Author = sequelize.define('Author', {
        name: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        birth_date: {
            type: Sequelize.STRING,
            allowNull: true,
        },
    });
    Author.associate = (models) => {
        Author.hasMany(models.Book, { foreignKey: 'author_id', as: 'books' });
    };
    return Author
}