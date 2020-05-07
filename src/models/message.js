module.exports = (sequelize, DataTypes) =>
  sequelize.define('Message', {
    id: {
      type: DataTypes.BIGINT,
      primaryKey: true,
      autoIncrement: true
    },
    text: {
      type: DataTypes.String,
      allowNull: false
    },
    conversation: {
      type: DataTypes.BIGINT,
      references: 'conversation',
      referencesKey: 'id',
      allowNull: false
    }
  },
  {
    tableName: 'message',
    createdAt: 'created_at',
    timestamps: true
  }
  )
