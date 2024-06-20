const twilio = require("twilio");
require('dotenv').config();

const accountSid = process.env.ACCOUNTSID;
const authToken = process.env.AUTHTOKEN;
const verifySid = process.env.VERIFYSID;
const client = twilio(accountSid, authToken);

class OTPService {
  async sendOTP(mobileNo) {
    try {
      const verification = await client.verify.v2.services(verifySid)
        .verifications.create({ to: mobileNo, channel: "sms" });
        //console.log(verification);
        //console.log(verification.status);
    } catch (error) {
      console.error('Error sending OTP:', error.message);
      throw error;
    }
  }

  async verifyOTP(otpCode, mobileNo) {
    try {
      const verification_check = await client.verify.v2.services(verifySid)
        .verificationChecks.create({ to: mobileNo, code: otpCode });
      console.log(verification_check.status);
    } catch (error) {
      console.error('Error verifying OTP:', error.message);
      throw error;
    }
  }
}

async function exampleUsage() {
  const otpService = new OTPService();

  try {
    // Send OTP
    await otpService.sendOTP('+919313630036');

    // Simulate user input for OTP verification
    const readline = require("readline").createInterface({
      input: process.stdin,
      output: process.stdout
    });

    readline.question("Please enter the OTP:", async (otpCode) => {
      try {
        await otpService.verifyOTP(otpCode, '+919313630036');
      } catch (error) {
        console.error('Error in OTP verification process:', error);
      } finally {
        readline.close();
      }
    });
  } catch (error) {
    console.error('Error in sending OTP:', error);
  }
}

// Example usage
//exampleUsage();

module.exports = new OTPService();
