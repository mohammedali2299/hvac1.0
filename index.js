const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const app = express();

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.post('/api/form', (req, res) => {
    const htmlEmail = `
        <h3>Contact Details<h3>
        <ul>
            <li>Name: ${req.body.name}<li>
            <li>Phone: ${req.body.phone}<li>
            <li>Email: ${req.body.email}<li>
            <li>Job Type: ${req.body.rescom}</li>
            <li>Cooling: ${req.body.cooling}</li>
            <li>Heating: ${req.body.heating}</li>
            <li>Electrical: ${req.body.electrical}</li>
            <li>Ducting: ${req.body.ducting}</li>
            <li>Other: ${req.body.other}</li>
        </ul>
        <h3>Job Description:<h3>
        <p>${req.body.description}<p>
    `

    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'streamlineunited@gmail.com',
            pass: 'qWaBTJAB437X'
        }
    })

    let mailOptions = {
        from: 'streamlineunited@gmail.com',
        to: 'jdbrutcher@gmail.com',
        subject: `New Job From: ${req.body.name}`,
        text: req.body.description,
        html: htmlEmail
    }

    transporter.sendMail(mailOptions, (err, info) => {
        if(err) {
            console.log(err);
        } else {
            console.log(info);
        }
    })
});

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`)
});