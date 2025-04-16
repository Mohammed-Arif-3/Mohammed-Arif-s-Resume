const express = require("express");
const router = express.Router();
const cors = require("cors");
const nodemailer = require("nodemailer");

// Initialize Express App
const app = express();
app.use(cors());
app.use(express.json());
app.use("/", router);

// Start server
app.listen(5000, () => console.log("🚀 Server Running on http://localhost:5000"));
require("dotenv").config();
// Nodemailer Configuration
const contactEmail = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  },
});

// Verify the transporter
contactEmail.verify((error, success) => {
  if (error) {
    console.error("❌ Email transporter error:", error);
  } else {
    console.log("✅ Email transporter ready");
  }
});

// Contact endpoint
router.post("/contact", (req, res) => {
  const { firstname, lastname, email, phone, message } = req.body;

  const mailOptions = {
    from: `${firstname} ${lastname} <${email}>`,
    to: "mohammedarif6974@gmail.com",
    subject: "📩 Contact Form Submission - Portfolio",
    html: `
      <h2>Contact Form Message</h2>
      <p><strong>Name:</strong> ${firstname} ${lastname}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Message:</strong><br>${message}</p>
    `,
  };

  contactEmail.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error("❌ Failed to send email:", error);
      res.status(500).json({ code: 500, status: "Failed to send message", error });
    } else {
      console.log("✅ Email sent:", info.response);
      res.status(200).json({ code: 200, status: "Message sent successfully!" });
    }
  });
});
