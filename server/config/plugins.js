require("dotenv").config();

module.exports = ({ env }) => ({
  upload: {
    config: {
      provider: "cloudinary",
      providerOptions: {
        cloud_name: env("CLOUDINARY_NAME"),
        api_key: env("CLOUDINARY_KEY"),
        api_secret: env("CLOUDINARY_SECRET"),
      },
      actionOptions: {
        upload: {
          folder: "gurukripa", // Specify the folder in Cloudinary
        },
        delete: {}, // Add any delete options if needed
      },
    },
  },
});
