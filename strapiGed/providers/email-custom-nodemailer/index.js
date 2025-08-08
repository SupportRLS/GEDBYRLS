"use strict";

const nodemailer = require("nodemailer");

module.exports = {
  init(providerOptions = {}, settings = {}) {
    const transporter = nodemailer.createTransport({
      host: providerOptions.host,
      port: providerOptions.port,
      auth: {
        user: providerOptions.auth.user,
        pass: providerOptions.auth.pass,
      },
      secure: providerOptions.secure || false,
    });

    return {
      async send(options) {
        const {
          from = settings.defaultFrom,
          to,
          subject,
          text,
          html,
          attachments,
        } = options;

        await transporter.sendMail({
          from,
          to,
          subject,
          text,
          html,
          attachments,
        });
      },
    };
  },
};
