module.exports = (sequelize, DataTypes) => {
    const VehicleData = sequelize.define("VehicleData",{
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
          },
        LicensePlate: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        Make: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        VIN: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        Model: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        Type: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        Date: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        MilesDriven: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
    })

    return VehicleData
}