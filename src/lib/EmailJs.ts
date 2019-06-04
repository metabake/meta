"use strict";
import axios from 'axios';

export class EmailJs {
    send(email, from_name, emailjsService_id, emailjsTemplate_id, emailjsUser_id) {
        axios.post('https://api.emailjs.com/api/v1.0/email/send', {
                service_id: emailjsService_id, // gmail
                template_id: emailjsTemplate_id, // template_IWM2Sp3V
                user_id: emailjsUser_id, // user_PFE8rcsDafCMuUvI1Yj11
                template_params: {
                    email: email,
                    to_name: email,
                    from_name: from_name,
                    message_html: 'Hi, your email and password are registered as login credentials for WebAdmin!',
                    email_to: email
                }
            })
            .then(res => {
                console.info('Email has been sent. Result', res);
            })
            .catch(err => {
                console.info('Email has not been sent. Erro', err);
            });
    };
}
module.exports = {
    EmailJs
};
