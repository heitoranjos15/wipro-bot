module.exports = (sequelize, DataTypes) =>
  sequelize.define('Message', {
    id: {
      type: DataTypes.BIGINT,
      primaryKey: true,
      autoIncrement: true
    },
    text: {
      type: DataTypes.STRING,
      allowNull: false
    },
    conversation: {
      type: DataTypes.BIGINT,
      references: {
        model: 'conversation',
        key: 'id'
      },
      allowNull: false
    }
  },
  {
    tableName: 'message',
    createdAt: 'created_at',
    updatedAt: false,
    timestamps: true
  }
  )
