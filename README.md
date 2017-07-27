Simple Mailer
=========

A small library aiming to make sending emails with node a little more streamlined

## Installation

  `npm install @doughtnerd/simple-mailer`

## Usage
    
    const mailer = require('simple-mailer');

    //Example configs for using GMAIL.
    //Check the Nodemailer website for other options
    let mailerObject = new mailer.SimpleMailer(
            {
                service: "gmail",
                port:465,
                auth: {
                    user: 'your-email@gmail.com'',
                    pass: 'YourAPIKey'
                },
                connectionTimeout :20000,
            }
        );
        
    const email = new mailer.SimpleMessage();
    
    email.addRecipient('example@test.com');
    email.setSubject("Test");
    email.setContent("<div><p>Hello world</p></div>");
    
    mailerObject.sendMessage(email).then((info)=>{
        //Do something with the success data if you want...
    }).catch((err)=>{
        //Catch any errors in sending the message here.
    });
  

## Tests

  `npm test`

## Contributing

In lieu of a formal style guide, take care to maintain the existing coding style. 
Add unit tests for any new or changed functionality. 
Lint and test your code.