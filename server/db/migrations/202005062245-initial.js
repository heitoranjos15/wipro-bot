module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('bot', {
      id: {
        type: Sequelize.BIGINT,
        primaryKey: true,
        autoIncrement: true
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      created_at: {
        type: Sequelize.DATE
      },
      updated_at: {
        type: Sequelize.DATE
      }
    })
    await queryInterface.createTable('conversation', {
      id: {
        type: Sequelize.BIGINT,
        primaryKey: true,
        autoIncrement: true
      },
      userId: {
        type: Sequelize.STRING,
        allowNull: false
      },
      bot: {
        type: Sequelize.BIGINT,
        model: 'bot',
        key: 'id',
        allowNull: false
      },
      created_at: {
        type: Sequelize.DATE
      }
    })
    await queryInterface.createTable('message', {
      id: {
        type: Sequelize.BIGINT,
        primaryKey: true,
        autoIncrement: true
      },
      text: {
        type: Sequelize.STRING,
        allowNull: false
      },
      conversation: {
        type: Sequelize.BIGINT,
        references: {
          model: 'conversation',
          key: 'id'
        },
        allowNull: false
      },
      created_at: {
        type: Sequelize.DATE
      },
      updated_at: {
        type: Sequelize.DATE
      }
    })
  },
  down: async queryInterface => {
    await queryInterface.dropTable('bot')
    await queryInterface.dropTable('conversation')
    await queryInterface.dropTable('message')
  }
}
