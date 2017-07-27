const nodemailer = require("nodemailer");

module.exports.SimpleMailer = class SimpleMailer {
    
    constructor(configs){
        this.configs = configs;
        this.transporter = nodemailer.createTransport(configs);
    }
    
    sendMessage(simpleMessage) {
        simpleMessage.from = this.configs.auth.user;
        const promise = new Promise((resolve, reject) => {
            this.transporter.sendMail(simpleMessage.toMailOptions(), (err, info) => {
                if(err){
                    reject(err);
                } else {
                    resolve(info);
                }
            });
        });
        return promise;
    }
};

module.exports.SimpleMessage = class SimpleMessage {
    
    constructor(){
        this.recipients = [];
    }
    
    setSubject(subjectText){
        this.subject = subjectText; 
    }

    addRecipient(recipientEmail){
        this.recipients.push(recipientEmail);
    }
    
    setRecipients(recipients) {
        this.recipients = recipients;
    }
    
    setContent(messageContent){
        this.content = messageContent;
    }
    
    toMailOptions(){
        return {
            to: this.recipients.join(', '),
            replyTo: this.sender,
            subject: this.subject,
            html: this.content
        };
    }
};