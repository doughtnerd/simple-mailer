'use strict';

const chai = require("chai");
const chaiAsPromised = require('chai-as-promised');
const mailer = require("../index");

chai.use(chaiAsPromised);

const should = chai.should();
const expect = chai.expect;
const assert = chai.assert;

describe('simple-mailer', function(){
    
    it('SimpleMailer class should be an object', function(){
        let mailerObject = new mailer.SimpleMailer(
            {
                service: "gmail",
                port:465,
                auth: {
                    user: process.env.EMAIL_ADDRESS,
                    pass: process.env.API_KEY
                },
                connectionTimeout :20000,
            }
        );
        return expect(mailerObject).to.be.an('object');
    });
    
    it('should send a message', function(){
        let mailerObject = new mailer.SimpleMailer(
            {
                service: "gmail",
                port:465,
                auth: {
                    user: process.env.EMAIL_ADDRESS,
                    pass: process.env.API_KEY
                },
                connectionTimeout :20000,
            }
        );
        
        const email = new mailer.SimpleMessage();
        email.addRecipient(process.env.TEST_RECIPIENT);
        email.setSubject("Test");
        email.setContent("<div><p>Hi</p></div>");
        const promise = mailerObject.sendMessage(email);
        return promise.should.be.fulfilled;
    });
});