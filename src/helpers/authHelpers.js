const bcrypt = require("bcrypt")

const hashPassword = async (password) => {
    try {
        const saltRound = 10;
        const  hashedPassword = bcrypt.hash(password,saltRound);
        return hashedPassword

    } catch (error) {
        console.log("error in hashed password");
    }

}

const comparePassword = async (password,hashedPassword) => {
    try {
        return bcrypt.compare(password,hashedPassword)

    } catch (error) {
        console.log("error in compare password");
    }

}

module.exports = {hashPassword,comparePassword}  