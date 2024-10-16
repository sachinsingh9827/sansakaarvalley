const sendEmail = require("../utils/nodemailer");
const { generateOtp } = require("../utils/two-factor-auth");

const authMiddleware = async (req, res, next) => {
    // const { role } = req.user;
    try {
        if (role === "admin") {
            const token = await generateOtp();

            if (!token) {
                return res.status(400).json({ message: 'Token not found!' });
            }

            const mailOptions = {
                // from: process.env.NODEMAILER_USERNAME,
                // to: process.env.SEND_TO_EMAIL,
                from: 'sachinsingh020406@gmail.com',
                to: 'sachinsingh020406@gmail.com',
                subject: 'Your OTP for 2FA',
                text: `Your OTP is: ${token}`,
            };

            await sendEmail(mailOptions);
        }
        next();
    } catch (error) {
        console.error("Error: Generating OTP in auth middleware!")
    }
};

module.exports = authMiddleware;