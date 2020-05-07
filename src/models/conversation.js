module.exports = (sequelize, DataTypes) =>
  sequelize.define('Conversation', {
    id: {
      type: DataTypes.BIGINT,
      primaryKey: true,
      autoIncrement: true
    },
    userId: {
      type: DataTypes.STRING,
      allowNull: false
    },
    bot: {
      type: DataTypes.BIGINT,
      references: 'bot',
      referencesKey: 'id',
      allowNull: false
    }
  },
  {
    tableName: 'conversation',
    createdAt: 'created_at',
    updatedAt: false,
    timestamps: true
  }
  )
