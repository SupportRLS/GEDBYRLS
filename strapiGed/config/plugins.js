module.exports = ({ env }) => ({
  "icons-field": {
    enabled: true,
    config: {
      icons: [
        // Define your own custom icons list here
        {
          name: "my-icon",
          svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32px" height="32px" fill="#212134"><path d="M26 ..."></path></svg>',
        },
        // Add more custom icons here
      ],
    },
  },
});
