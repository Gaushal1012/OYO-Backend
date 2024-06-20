const UserDataAccess = require("../DataAccess/UserDataAccess");
const OTPService = require("../Services/OTPService");
const GenericResponse = require("../Common/Logging");

class User {
    async Registration(req, res){
        try {
            const { mobileNo } = req.body;
            await OTPService.sendOTP(mobileNo);
            const data = await UserDataAccess.Registration();
            
            GenericResponse.Status = 200;
            GenericResponse.Message = "Registration successful"; 
            GenericResponse.ExtraData = data; 
            
            res.status(200).json(GenericResponse);
        } catch (error) {
            GenericResponse.Status = 500;
            GenericResponse.Message = "Internal Server Error";
            res.status(500).json(GenericResponse);
        }
    }
}

module.exports = new User();