
module.exports = (sequelize,Sequelize) => {
    const Book = sequelize.define('Book', {
        title: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        publication_date: {
          type: Sequelize.DATEONLY,
        },
        rating: {
          type: Sequelize.INTEGER,
        },
        price: {
          type: Sequelize.DECIMAL(10, 2),
        },
        author_id: {
          type: Sequelize.INTEGER,
          references: {
            model: "Authors",
            key: 'id',
          },
        },
      });
      Book.associate = (models) => {
        Book.belongsTo(models.Author, { foreignKey: 'author_id', as: 'author' });

      };
      return Book
    
}