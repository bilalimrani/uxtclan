const express = require('express');
const nodemailer = require('nodemailer'),
  bodyParser = require('body-parser'),
  path = require('path');

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/api', (req, res) => {
  console.log('fsdfsddsfasg');
  res.send({ message: 'Hello from server!' });
});

// async..await is not allowed in global scope, must use a wrapper
async function main(email, subject, description, phone, name) {
  console.log('HHHHHHHHHHYYYYYYYyyyyy');
  let transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    ignoreTLS: false,
    auth: {
      user: 'bimrani816@gmail.com',
      pass: 'rana7441634',
    },
  });

  let info = await transporter.sendMail({
    from: 'bimrani816@gmail.com',
    to: 'bimrani816@gmail.com, mshahrukh@live.com',
    subject: subject,
    html: `<div>Name: ${name || 'N/A'}</div><div>Phone: ${
      phone || 'N/A'
    }</div><div>Email ${email || 'N/A'}</div><div>Description: ${
      description || 'N/A'
    }</div>`,
  });

  console.log('Message sent: %s', info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

  // Preview only available when sending through an Ethereal account
  console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
  // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
}

app.post('/hireus', (req, res) => {
  const { email, description, phone, name } = req.body;
  console.log(req.body, req.params);
  main(email, 'Hire Us', description, phone, name);

  res.send({ status: 200 });
});

app.post('/contactus', (req, res) => {
  const { email, description, phone, name } = req.body;
  console.log(req.body, req.params);
  main(email, 'Contact Us', description, phone, name);

  res.send({ status: 200 });
});

app.use(express.static(path.join(__dirname + '/client/build')));
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + '/client/build', 'index.html'));
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server listening on ${port}`);
});
