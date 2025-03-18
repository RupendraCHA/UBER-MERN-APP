const captainModel = require("../models/captain.model.js")


module.exports.createCaptain = ({
    firstname, lastname, email, password, color, plate, vehicleType, capacity
}) => {
    if (!firstname || !email || !password || !color || !plate || !capacity || !vehicleType) {
        throw new Error("All fields are required")
    }

    const captain = captainModel.create({
        fullname: {
            firstname,
            lastname
        },
        email,
        password,
        vehicle: {
            color,
            plate,
            vehicleType,
            capacity
        }
    })

    return captain
}