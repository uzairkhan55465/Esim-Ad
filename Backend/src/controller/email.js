
const jwt = require("jsonwebtoken");
const OTPController = require("./OTPController.js");
const path = require("path");
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const otpGenerator = require('otp-generator');

const emailConfig = {
  user: 'support@selectezi.com',
  pass: 'MAV6TJ3YZDVAWYDX',
};

const transporter = nodemailer.createTransport({
  // service: 'gmail',
  host: "selectezi.com",
  port: 465,
  secure: true,
  auth: {
    user: 'support@selectezi.com',
    pass: 'SyeD752@.',
  },
});



exports.postNew = async function (req, res) {
  try {
    const { color, images, depth, email, length, message, name, phNum, productInfo, units, width, stock } = req.body;
    const mailOptions = {
      from: emailConfig.user,
      to: "starcmarcus5@gmail.com",
      subject: 'Your New Order On Pentagon Packaging',
      html: `
     <div style="max-width: 650px; margin: 0px auto; padding: 50px 0px">
      <table style="width: 100%">
        <tr>
          <td style="padding: 0px 10px; text-align: center">
            <img
              src="."
              alt="Pentagon logo"
              height="130px"
              style="margin-bottom: 30px"
            />
          </td>
        </tr>
        <tr>
          <td>
            <center>
              <h1 style="margin-bottom: 15px; color: #30acd2">
                Hi! Pentagon Packaging Team
              </h1>
            </center>
          </td>
        </tr>
        <td><h3>Your New Order Information is:</h3></td>
        <tr></tr>
        <tr>
          <td>
            <div
              style="
                border: 1px solid #ddd;
                padding: 15px;
                border-radius: 5px;
                background-color: #f9f9f9;
              "
            >
              <h2>Information:</h2>
              <p><strong>Name:</strong> ${name}</p>
              <p><strong>Email:</strong> ${email}</p>
              <p><strong>Phone Number:</strong> ${phNum}</p>
              <p><strong>Product Information:</strong> ${productInfo}</p>
              <p><strong>Units:</strong> ${units}</p>
              <p><strong>Color:</strong> ${color}</p>
              <p><strong>Depth:</strong> ${depth}</p>
              <p><strong>Length:</strong> ${length}</p>
              <p><strong>Width:</strong> ${width}</p>
              <p><strong>Stock:</strong> ${stock}</p>
              <p><strong>Message:</strong> ${message}</p> 
            </div>
          </td>
        </tr>
        <tr>
          <td>
            <a
              href="https://www.pentagonpackaging.com/"
              target="_blank"
              style="
                display: block;
                margin: 15px 0px;
                background-color: #30acd2;
                width: 175px;
                text-align: center;
                padding: 15px 25px;
                border-radius: 5px;
                color: white !important;
                text-decoration: none;
              "
              >Visit Website</a
            >
          </td>
        </tr>
        <tr>
          <td>
            <p style="margin-top: 20px">Regards,</p>
            <p>PentagonePackaging Team</p>
          </td>
        </tr>
        <tr>
          <td>
            <p style="margin-top: 30px; text-align: center">
              <small style="font-size: 12px"
                >Write us at
                <a href="mailto:--">info@pentagonpackaging.pk</a> in
                case of any inconvenience.</small
              >
            </p>
            <p style="text-align: center">
              <small style="font-size: 12px"
                >&copy; 2023 - All rights reserved by PentagonPackaging.com</small
              >
            </p>
          </td>
        </tr>
      </table>
    </div>

      `,
    };

    await transporter.sendMail(mailOptions);

    res.status(200).send('Email sent successfully!');
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).send('Error sending email');
  }
};

exports.verifyUserEmail = async function (req, current, res) {
  let email = req.email;
  // console.log("start email proc", current)
  let ID = current._id;
  let GeneratedOTP = await OTPController.OTPGenerate(req);
  try {
    const mailOptions = {
      from: emailConfig.user,
      to: email,
      subject: 'Confirm Email',
      html: `
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Email Confirmation</title>
    <style>
        body {
            font-family: 'Arial', sans-serif;
            background-color: #000;
            color: #fff;
            margin: 0;
            padding: 0;
            display: flex;
            align-items: center;
            justify-content: center;
            height: 100vh;
        }

        .email-container {
            background-color: #111;
            color: #fff;
            padding: 20px;
            border-radius: 10px;
            width: 100%;
            max-width: 500px;
            text-align: center;
            box-sizing: border-box;
        }

        .confirmation-text {
            font-size: 18px;
            margin-bottom: 20px;
        }

        .button {
            display: inline-block;
            padding: 10px 20px;
            background-color: #00ff00;
            color: #000;
            text-decoration: none;
            border-radius: 5px;
            font-weight: bold;
            cursor: pointer;
        }

        .button:hover {
            background-color: #007700;
        }
    </style>
</head>

<body>
    <div class="email-container">
        <h1>Email Confirmation</h1>
        <p class="confirmation-text">
            Thank you for signing up at Select EZI!
            To complete your registration, please click the button below.
        </p>
       

        <p>
This is your OTP,         ${GeneratedOTP} 
        </p>
 
    </div>
</body>

</html>
      `,
    };

    await transporter.sendMail(mailOptions);
    console.log("email send!")
    return 'Email sent successfully!'
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).send('Error sending email');
  }
};


exports.forgotPassVerifyEmail = async function (req, current, res) {
  let email = req.email;
  let GeneratedOTP = await OTPController.OTPGenerate(req);
  try {
    const mailOptions = {
      from: emailConfig.user,
      to: email,
      subject: 'Select Ezi || Forgot Password OTP',
      html: `
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>OTP</title>
    <style>
        body {
            font-family: 'Arial', sans-serif;
            background-color: #000;
            color: #fff;
            margin: 0;
            padding: 0;
            display: flex;
            align-items: center;
            justify-content: center;
            height: 100vh;
        }

        .email-container {
            background-color: #111;
            color: #fff;
            padding: 20px;
            border-radius: 10px;
            width: 100%;
            max-width: 500px;
            text-align: center;
            box-sizing: border-box;
        }

        .confirmation-text {
            font-size: 18px;
            margin-bottom: 20px;
        }

        .button {
            display: inline-block;
            padding: 10px 20px;
            background-color: #00ff00;
            color: #000;
            text-decoration: none;
            border-radius: 5px;
            font-weight: bold;
            cursor: pointer;
        }

        .button:hover {
            background-color: #007700;
        }
    </style>
</head>

<body>
    <div class="email-container">
        <h1>Email Confirmation</h1>
        <p class="confirmation-text">
            Please Don't share this OTP with anyone else!
        </p>
        <p>
            This is your OTP,         ${GeneratedOTP} 
        </p>
    </div>
</body>

</html>
      `,
    };
    await transporter.sendMail(mailOptions);
    console.log("email send!")
    return 'Email sent successfully!'
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).send('Error sending email');
  }
};



exports.requestNameChangeShop = async function (detail, shop, res) {
  console.log("detail=====", detail)
  console.log("shop=====", shop)

  let link = `http://localhost:3000/shopNameChange/${shop._id}`
  try {
    const mailOptions = {
      from: emailConfig.user,
      to: 'support@selectezi.com',
      subject: 'Select Ezi || Shop Name Change Request',
      html: `
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Shop Deletion Request</title>
</head>
<body style="font-family: Arial, sans-serif;">

<div style="max-width: 600px; margin: 0 auto;">
  <h2 style="text-align: center; color: #333;">Shop Deletion Request</h2>
  <p>Dear Admin,</p>

  <p>A shop owner has requested to delete their shop. Below are the details of the shop:</p>

  <ul>
    <li><strong>Shop ID:</strong> ${shop._id} </li>
    <li><strong>Shop Name:</strong> ${shop.shopname}</li>
    <li><strong>Contact:</strong> ${detail.email}</li>
    <li><strong>Old Name:</strong> ${detail.oldname}</li>
    <li><strong>New Name:</strong> ${detail.shopname}</li>
  </ul>

  <p>Please take necessary actions based on this request.</p>

  <p>If you have any questions or concerns, please address them accordingly.</p>
  <p>If you want to confirm the updation, please click on this link:</p>
  <a href=${link} style="display: inline-block; background-color: #007bff; color: #fff; text-decoration: none; padding: 10px 20px; border-radius: 5px;">Click here to Approve request.</a>


  <p>Thank you for your attention to this matter.</p>


</div>

</body>
</html>

      `,
    };
    await transporter.sendMail(mailOptions);
    console.log("email send!")
    return 'Email sent successfully!'
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).send('Error sending email');
  }
};






exports.requestDeleteShop = async function (detail, shop, res) {
  console.log("detail=====", detail)
  console.log("shop=====", shop)
   
  let link = `http://selectezi.com/deleteshop/${shop.id}`
  try {
    const mailOptions = {
      from: emailConfig.user,
      to: 'support@selectezi.com',
      subject: 'Select Ezi || Shop Deletion Request',
      html: `
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Shop Deletion Request</title>
</head>
<body style="font-family: Arial, sans-serif;">

<div style="max-width: 600px; margin: 0 auto;">
  <h2 style="text-align: center; color: #333;">Shop Deletion Request</h2>
  <p>Dear Admin,</p>

  <p>A shop owner has requested to delete their shop. Below are the details of the shop:</p>

  <ul>
    <li><strong>Shop ID:</strong> ${shop.id} </li>
    <li><strong>Shop Name:</strong> ${shop.shopname}</li>
    <li><strong>Contact:</strong> ${detail.email}</li>
    <li><strong>Reason:</strong> ${detail.reason}</li>
    <li><strong>Description:</strong> ${detail.description}</li>
  </ul>

  <p>Please take necessary actions based on this request.</p>

  <p>If you have any questions or concerns, please address them accordingly.</p>
  <p>If you want to confirm the deletion, please click on this link:</p>
  <a href=${link} style="display: inline-block; background-color: #007bff; color: #fff; text-decoration: none; padding: 10px 20px; border-radius: 5px;">Click here to Approve request.</a>


  <p>Thank you for your attention to this matter.</p>


</div>

</body>
</html>

      `,
    };
    await transporter.sendMail(mailOptions);
    console.log("email send!")
    return 'Email sent successfully!'
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).send('Error sending email');
  }
};