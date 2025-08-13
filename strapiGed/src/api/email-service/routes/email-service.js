module.exports = {
  routes: [
    {
      method: "POST",
      path: "/email-service",
      handler: "email-service.create",
      config: {
        auth: false,
      },
    },
  ],
};
