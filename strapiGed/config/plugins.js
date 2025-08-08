module.exports = ({ env }) => ({
  // Plugin icônes custom
  "icons-field": {
    enabled: true,
    config: {
      icons: [
        {
          name: "my-icon",
          svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32px" height="32px" fill="#212134"><path d="M26 ..."></path></svg>',
        },
      ],
    },
  },

  // Plugin email (avec Nodemailer)
  email: {
    config: {
      provider: require.resolve("../providers/email-custom-nodemailer"),
      providerOptions: {
        host: env("SMTP_HOST", "in-v3.mailjet.com"),
        port: env.int("SMTP_PORT", 587),
        auth: {
          user: env("SMTP_API_KEY"),
          pass: env("SMTP_SECRET_KEY"),
        },
        // TLS config optional
        secure: false,
      },
      settings: {
        defaultFrom: env("SMTP_DEFAULT_FROM"),
        defaultReplyTo: env("SMTP_DEFAULT_REPLY_TO"),
      },
    },
  },
});
