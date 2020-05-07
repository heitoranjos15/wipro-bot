module.exports = (sequelize, DataTypes) =>
  sequelize.define('Bot', {
    id: {
      type: DataTypes.BIGINT,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    }
  },
  {
    tableName: 'bot',
    createdAt: 'created_at',
    updatedAt: 'updated_at',
    timestamps: true
  }
  )
