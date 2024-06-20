const sequelize = require("../../config/connection");
const { QueryTypes } = require("sequelize");

class UserDataAccess {
    async Registration(){
        const results = await sequelize.query(
            "SELECT * FROM master.users",
            {
              type: QueryTypes.SELECT,
            }
          );
          return results;
    }
}

module.exports = new UserDataAccess();